# EmailJS Setup Guide

EmailJS allows you to send emails directly from your contact form without needing a backend server. It's perfect for static sites deployed on GitHub Pages.

## Step 1: Create an EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Click **Sign Up** and create a free account
3. Verify your email

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Choose your email provider:
   - **Gmail** (recommended - use your personal Gmail)
   - Outlook
   - SendGrid
   - Other providers

### For Gmail:
- Select **Gmail**
- Click **Connect Account**
- Authorize EmailJS to access your Gmail
- Name the service: `gmail` (or any name you prefer)

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Configure the template:

**Template Name:** `contact_form_template`

**Subject:** 
```
New Portfolio Contact: {{subject}}
```

**Email Content:**
```
Hello James,

You have a new message from your portfolio website!

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

**To Email:** `jamesariess76@gmail.com`

4. Click **Save**
5. Note the **Template ID**: `contact_form_template`

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to **Account** → **API Keys**
2. Find your **Public Key** (looks like: `abc123def456xyz`)
3. Copy this key

## Step 5: Update .env.local

Add these variables to `.env.local`:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=gmail
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=contact_form_template
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

Replace:
- `gmail` with your service name (from Step 2)
- `contact_form_template` with your template ID (from Step 3)
- `your_public_key_here` with your actual public key (from Step 4)

## Step 6: Test the Form

1. Restart your dev server: `npm run dev`
2. Go to the **Get In Touch** section
3. Fill out the form and click **Send Message**
4. You should receive the email at `jamesariess76@gmail.com`

## Troubleshooting

**"Failed to send message":**
- Check that your Public Key is correct in `.env.local`
- Verify the Service ID matches your EmailJS account
- Ensure the Template ID exists in your account
- Check browser console for detailed error messages

**Emails not arriving:**
- Check your spam/junk folder
- Verify the "To Email" in your template is correct
- Test using EmailJS dashboard directly

## Security Notes

- The `NEXT_PUBLIC_` prefix means these variables are exposed in the browser (this is intentional for EmailJS)
- Public Keys are safe to expose - they can only send emails through your template
- Never share your **private/secret keys** (if you have API access)
- EmailJS has rate limiting on free tier (~200 emails/day)

## Deploying to GitHub Pages

The EmailJS configuration works on deployed sites too! Just:
1. Add the same environment variables to your GitHub repository secrets (if needed)
2. Or commit them to `.env.local` (safe since they're public keys)
3. The contact form will work on your live GitHub Pages site

## Next Steps

After setup:
- Test sending multiple emails
- Check spam folder to ensure emails aren't filtered
- Consider adding email verification to reduce spam
- Set up auto-replies if needed

---

Questions? Check the [EmailJS Documentation](https://www.emailjs.com/docs/)
