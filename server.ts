/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';
import { createServer as createViteServer } from 'vite';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Parse JSON and URL-encoded bodies
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // API Routing - Process Inquiries and send Mail Confirmation Auto-Responder
  app.post('/api/contact', async (req, res) => {
    try {
      const { fullName, email, phoneNumber, companyName, subject, message } = req.body;

      if (!fullName || !email || !phoneNumber || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // 1. Build beautiful HTML email template for the user's autoresponder receipt
      const htmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); background-color: #ffffff;">
          <!-- Header Banner -->
          <div style="background-color: #0b1c3f; padding: 24px; text-align: center; border-bottom: 4px solid #D32F2F;">
            <h1 style="color: #ffffff; margin: 0; font-size: 20px; font-weight: bold; letter-spacing: 0.5px; text-transform: uppercase;">Lifeline Communi-Care</h1>
            <p style="color: #38bdf8; margin: 5px 0 0 0; font-size: 10px; font-family: monospace; letter-spacing: 1.5px; text-transform: uppercase;">Emergency Preparedness & Training</p>
          </div>

          <!-- Main Body -->
          <div style="padding: 30px; color: #1f2937;">
            <p style="font-size: 15px; line-height: 1.5; margin-top: 0;">Dear <strong>${fullName}</strong>,</p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">
              Thank you for reaching out to Lifeline Communi-Care (Pty) Ltd. We have successfully received your inquiry at our client dispatch center.
            </p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #4b5563;">
              Lead Instructor <strong>Robbie de Jager</strong> or a regional training coordinator has been assigned to review your coordinates and prepare a custom proposal.
            </p>

            <!-- Summary Card -->
            <div style="background-color: #f9fafb; border-left: 4px solid #D32F2F; border-right: 1px solid #e5e7eb; border-top: 1px solid #e5e7eb; border-bottom: 1px solid #e5e7eb; border-radius: 8px; padding: 18px; margin: 24px 0;">
              <h2 style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.5px; margin-top: 0; margin-bottom: 12px; color: #9ca3af; font-family: monospace; font-weight: bold;">Enquiry Coordinates</h2>
              <table style="width: 100%; font-size: 13px; border-collapse: collapse; text-align: left;">
                <tr>
                  <td style="padding: 5px 0; color: #6b7280; font-weight: bold; width: 33%;">Full Name:</td>
                  <td style="padding: 5px 0; color: #111827;">${fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #6b7280; font-weight: bold;">Inquiry Subject:</td>
                  <td style="padding: 5px 0; color: #111827;">${subject}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #6b7280; font-weight: bold;">Phone Number:</td>
                  <td style="padding: 5px 0; color: #111827; font-family: monospace;">${phoneNumber}</td>
                </tr>
                <tr>
                  <td style="padding: 5px 0; color: #6b7280; font-weight: bold;">Company:</td>
                  <td style="padding: 5px 0; color: #111827;">${companyName || 'N/A'}</td>
                </tr>
              </table>
            </div>

            <p style="font-size: 14px; line-height: 1.6; color: #4b5563; margin-bottom: 24px;">
              Our standard response timeline is within <strong>24 operational hours</strong>. Robbie or are regional coordinator is ready to contact you directly on your specified number: <strong>${phoneNumber}</strong> to confirm scheduling, student headcounts, or custom first aid kits specifications.
            </p>

            <p style="font-size: 14px; line-height: 1.6; color: #4b5563; margin-bottom: 0;">
              In the meantime, if you have any additional details or files to submit, please don't hesitate to correspond directly to this mailbox.
            </p>
          </div>

          <!-- Footer Block -->
          <div style="background-color: #f3f4f6; border-top: 1px solid #e5e7eb; padding: 24px; text-align: center; font-size: 11px; color: #6b7280; line-height: 1.6;">
            <p style="margin: 0 0 4px 0; font-weight: bold; color: #374151;">Lifeline Communi-Care (Pty) Ltd</p>
            <p style="margin: 0 0 10px 0;">Cape Town, South Africa | Operational Regional & National Teams</p>
            <p style="margin: 0; text-transform: uppercase;">Direct Line: <span style="font-family: monospace; font-weight: bold; color: #111827;">+27 (0) 74 841 0771</span> | Email: <span style="font-family: monospace; color: #D32F2F; font-weight: bold;">info@lifelinecommunicare.co.za</span></p>
          </div>
        </div>
      `;

      // 2. Check if SMTP configuration parameters are declared in env
      const hasSMTP = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

      if (hasSMTP) {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || '587'),
          secure: process.env.SMTP_SECURE === 'true',
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        const fromAddress = process.env.SMTP_FROM || 'info@lifelinecommunicare.co.za';

        // Send emails instantly in the background without blocking the HTTP response
        transporter.sendMail({
          from: `"Lifeline Communi-Care Desk" <${fromAddress}>`,
          to: email,
          subject: `Enquiry Auto-Confirmation: ${subject}`,
          html: htmlContent,
        }).then(info => {
          console.log('SMTP Auto-acknowledgement user email sent:', info.messageId);
        }).catch(err => {
          console.error('SMTP Auto-acknowledgement user email failure:', err);
        });

        transporter.sendMail({
          from: `"Lifeline Webb Dispatcher" <${fromAddress}>`,
          to: 'info@lifelinecommunicare.co.za',
          subject: `[New Lead Ingest] ${subject} - ${fullName}`,
          text: `
            New Lifeline Web Ingested Inquiry Submission:
            ---------------------------------------------
            Full Name: ${fullName}
            Email Address: ${email}
            Phone Number: ${phoneNumber}
            Company/Affiliate: ${companyName || 'N/A'}
            Subject: ${subject}

            Message:
            ${message}

            ---------------------------------------------
            Sent automatically via Server Web Form Agent.
          `,
        }).then(info => {
          console.log('SMTP admin inbox email copy sent:', info.messageId);
        }).catch(err => {
          console.error('SMTP admin inbox email copy failure:', err);
        });

        return res.json({
          success: true,
          mode: 'live',
          message: 'Your inquiry has been stored, and a receipt confirmation has been transmitted directly to your inbox!',
        });
      } else {
        // Fallback Simulation Mode (Zero setup experience for development preview)
        console.log(`[Demo/Simulation Mode] No SMTP configurations set in .env.`);
        console.log(`- Simulated confirmation autoresponse dispatched to user email: ${email}`);
        console.log(`- Simulated lead dispatched to primary inbox: info@lifelinecommunicare.co.za`);

        return res.json({
          success: true,
          mode: 'demo',
          previewEmail: {
            to: email,
            from: 'info@lifelinecommunicare.co.za',
            subject: `Enquiry Auto-Confirmation: ${subject}`,
            html: htmlContent,
          },
        });
      }
    } catch (e: any) {
      console.error('Inquiry Submission Route Failure:', e);
      return res.status(500).json({ error: 'Server internal error processing inquiry transmission.', details: e.message });
    }
  });

  // Vite development vs production middleware integration
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server launched and active on port ${PORT}`);
  });
}

startServer();
