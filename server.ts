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

  // API Routing - Process Inquiries and log them
  app.post('/api/contact', async (req, res) => {
    try {
      const { fullName, email, phoneNumber, companyName, subject, message } = req.body;

      if (!fullName || !email || !phoneNumber || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      console.log('New Web Inquiry Ingested:');
      console.log(`- Full Name: ${fullName}`);
      console.log(`- Email Address: ${email}`);
      console.log(`- Phone Number: ${phoneNumber}`);
      console.log(`- Company: ${companyName || 'N/A'}`);
      console.log(`- Subject: ${subject}`);
      console.log(`- Message: ${message}`);

      return res.json({
        success: true,
        message: 'Inquiry processed successfully'
      });
    } catch (e: any) {
      console.error('Inquiry Submission Route Failure:', e);
      return res.status(500).json({ error: 'Server internal error processing inquiry.', details: e.message });
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
