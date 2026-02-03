# 🚀 GitHub Pages & Vercel Deployment Guide

**Date**: January 21, 2026  
**Status**: Ready for Deployment  
**Build**: ✅ Successful (0 errors, 0 warnings)  

---

## 📋 Table of Contents

1. [Prerequisites](#prerequisites)
2. [Option 1: GitHub Pages Deployment](#option-1-github-pages-deployment)
3. [Option 2: Vercel Deployment](#option-2-vercel-deployment)
4. [Custom Domain Setup](#custom-domain-setup)
5. [Verification & Testing](#verification--testing)
6. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### Required
- ✅ GitHub account (for GitHub Pages OR Vercel)
- ✅ Repository pushed to GitHub
- ✅ `npm run build` succeeds locally
- ✅ Git installed and configured

### Recommended
- Node.js 18+ (already installed)
- Terminal/PowerShell access
- Understanding of git commands

### Verify Build Status
```bash
npm run build
# Should complete with ✓ symbol and 0 errors
```

---

## Option 1: GitHub Pages Deployment

### Best For:
- Free hosting
- No external services
- Tied to GitHub repository
- Perfect for portfolios

### Setup Steps

#### Step 1: Update `next.config.ts`
```typescript
// For GitHub Pages with 'personal-portfolio' repo
const nextConfig: NextConfig = {
  output: 'export',  // Add this for static export
  basePath: '/PersonalPortfolio',  // Match your repo name
  assetPrefix: '/PersonalPortfolio/',
  // ... rest of config
};
```

#### Step 2: Update GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Select "GitHub Actions"
   - **Branch**: Select `master` (or `main`)

#### Step 3: Create GitHub Actions Workflow

Create file: `.github/workflows/deploy.yml`

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - master  # Change to 'main' if needed

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    permissions:
      contents: read
      pages: write
      id-token: write

    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Upload artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: './out'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

#### Step 4: Push Changes
```bash
git add -A
git commit -m "chore: Configure GitHub Pages deployment"
git push origin master
```

#### Step 5: Monitor Deployment
1. Go to your repo → **Actions** tab
2. Watch the workflow complete (usually 2-5 minutes)
3. Once green ✅, your site is live!

#### Step 6: Access Your Site
```
https://areyzxc.github.io/PersonalPortfolio
```

---

## Option 2: Vercel Deployment

### Best For:
- Production-grade hosting
- Serverless functions (if you add them)
- Automatic HTTPS
- Superior performance
- Easy custom domain
- Free tier available

### Setup Steps

#### Step 1: Sign Up for Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up"
3. Choose "GitHub" to authenticate
4. Authorize Vercel to access your repositories

#### Step 2: Import Your Project

1. After signing in to Vercel dashboard
2. Click "Add New..." → "Project"
3. Select your `personal-portfolio` repository
4. Click "Import"

#### Step 3: Configure Project Settings

**Root Directory**: Leave as default (automatic detection)

**Build Command**: 
```bash
npm run build
```

**Output Directory**: 
```
.next
```

**Environment Variables**: (Optional - skip for now)

#### Step 4: Deploy

1. Click "Deploy"
2. Vercel builds and deploys automatically
3. Deployment completes in 2-5 minutes
4. Live URL provided in dashboard

#### Step 5: Access Your Site
```
https://personal-portfolio-XXXXX.vercel.app
```
(Your unique URL will be shown in the Vercel dashboard)

#### Step 6: Future Deployments

**Automatic**: Every push to `master` branch automatically triggers deployment

**Manual**: 
```bash
# Install Vercel CLI (optional)
npm i -g vercel

# Deploy
vercel
```

---

## Custom Domain Setup

### For GitHub Pages

#### Using a Custom Domain
1. Go to repo **Settings** → **Pages**
2. Under "Custom domain", enter your domain (e.g., `www.example.com`)
3. Click "Save"
4. Update DNS records at your domain registrar:
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```
5. GitHub will automatically provision HTTPS certificate

### For Vercel

#### Using a Custom Domain
1. Go to Vercel dashboard → Your project
2. Navigate to **Settings** → **Domains**
3. Click "Add Domain"
4. Enter your domain (e.g., `portfolio.example.com`)
5. Follow DNS setup instructions
6. HTTPS automatically provisioned by Vercel

#### Subdomain Example
```
portfolio.yourdomain.com → Points to Vercel project
```

---

## Verification & Testing

### Before Deployment
```bash
# Verify build
npm run build

# Check for errors
npm run lint

# Test production build locally
npm run dev
```

### After Deployment

#### Check 1: Site Loading
- ✅ Can open the site in browser
- ✅ No CORS errors in console
- ✅ All sections load correctly

#### Check 2: Responsiveness
- ✅ Mobile (320px) - hamburger menu works
- ✅ Tablet (768px) - 2-column layout
- ✅ Desktop (1024px+) - full layout

#### Check 3: Features
- ✅ Theme toggle works
- ✅ Navigation links scroll correctly
- ✅ Projects modal opens/closes
- ✅ Animations smooth
- ✅ Images load
- ✅ Contact form submits (if configured)

#### Check 4: SEO
- ✅ Sitemap accessible: `yoursite.com/sitemap.xml`
- ✅ Robots.txt accessible: `yoursite.com/robots.txt`
- ✅ Meta tags in page source (DevTools → Elements)

#### Check 5: Performance
- ✅ Open DevTools → Lighthouse
- ✅ Run audit
- ✅ Target scores:
  - Performance: 80+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+

### Using DevTools Inspector

```bash
# Press F12 in browser
# Navigate to Inspector tab
# Right-click → Inspect Element on any component
# Check HTML structure and CSS
```

---

## Troubleshooting

### Issue 1: Build Fails on GitHub Actions
**Solution:**
```bash
# Verify locally
npm ci  # Clean install
npm run build

# Check for TypeScript errors
npm run lint

# Review error in GitHub Actions logs
```

### Issue 2: Styles Not Applied on Deployed Site
**Solution:**
```bash
# Verify basePath in next.config.ts
basePath: '/PersonalPortfolio'  // Must match repo name

# Rebuild and push
npm run build
git push origin master
```

### Issue 3: Images Not Loading
**Solution:**
```bash
# Verify image paths are relative to public/
# Example: /images/profile/profile.JPG

# Check file exists in public/images/
# Redeploy if files were added
```

### Issue 4: Custom Domain Shows "Redirect Loop"
**Solution:**
```bash
# GitHub Pages: Verify DNS A records
# Vercel: Check DNS CNAME record
# Wait 24-48 hours for DNS propagation
```

### Issue 5: Site Blank After Deployment
**Solution:**
```bash
# Clear browser cache (Ctrl+Shift+Delete)
# Hard refresh (Ctrl+F5)
# Check browser console for errors (F12)
# Verify basePath configuration
```

---

## Deployment Comparison

| Feature | GitHub Pages | Vercel |
|---------|--------------|--------|
| **Cost** | Free | Free tier available |
| **Setup Time** | 10 mins | 5 mins |
| **Custom Domain** | Yes | Yes |
| **Auto-Deploy** | ✅ On push | ✅ On push |
| **HTTPS** | ✅ Auto | ✅ Auto |
| **Performance** | Good | Excellent |
| **Scaling** | Limited | Excellent |
| **Serverless** | No | Yes |
| **Analytics** | No | Yes (paid) |
| **Support** | Community | Enterprise options |

---

## Recommended Setup

### For Portfolio (Recommended: Vercel)
**Why?**
- Faster deployment
- Better performance
- Easier custom domain
- Free tier sufficient for portfolio
- Professional appearance

**Steps:**
1. Sign up on [vercel.com](https://vercel.com)
2. Connect GitHub account
3. Import project
4. Deploy (1-click)

---

## Important Notes

### Before Deploying

✅ **Update Personal Information**
- [ ] Verify all text is accurate
- [ ] Check all links work
- [ ] Review images are appropriate
- [ ] Test contact form configuration

✅ **Environment Variables** (if needed)
```bash
# Create .env.local
NEXT_PUBLIC_API_URL=your_api_url  # If using APIs
```

✅ **SEO Checks**
- [ ] Meta tags populated
- [ ] Sitemap generated
- [ ] Robots.txt in place
- [ ] Open Graph images set

### After Deployment

📊 **Monitor Performance**
- Add Google Analytics (optional)
- Check Lighthouse scores
- Test on real devices
- Collect feedback

📝 **Keep Updated**
- Update projects section regularly
- Refresh social links
- Update contact information
- Refresh portfolio screenshots

---

## Quick Command Reference

```bash
# Local Development
npm run dev              # Start dev server (localhost:3000)

# Building
npm run build            # Create production build
npm run lint             # Check code quality

# Deployment
git add -A              # Stage changes
git commit -m "message" # Commit
git push origin master   # Push to GitHub
# Auto-deploys to GitHub Pages or Vercel

# Vercel CLI (Optional)
npm i -g vercel         # Install Vercel CLI
vercel                  # Deploy to Vercel
vercel --prod           # Deploy to production
```

---

## Next Steps

1. **Choose Deployment Option**
   - [ ] GitHub Pages (Option 1)
   - [ ] Vercel (Option 2)

2. **Follow Setup Steps**
   - Complete all steps for chosen option
   - Verify deployment succeeds

3. **Test Live Site**
   - Check all features work
   - Test on mobile device
   - Run Lighthouse audit

4. **Announce to World**
   - Share link on GitHub profile
   - Add to resume/CV
   - Post on LinkedIn

---

## Support & Help

**If Something Goes Wrong:**

1. Check this guide's Troubleshooting section
2. Review build logs (GitHub Actions or Vercel dashboard)
3. Test build locally: `npm run build`
4. Check repository settings
5. Verify environment variables

---

## Final Checklist Before Going Live

- [ ] All personal info is accurate and updated
- [ ] Build succeeds locally (`npm run build`)
- [ ] No console errors on dev server
- [ ] Tested on mobile (320px breakpoint)
- [ ] Tested on tablet (768px breakpoint)
- [ ] Tested on desktop (1024px+ breakpoint)
- [ ] All links work (internal and external)
- [ ] Images load correctly
- [ ] Theme toggle works
- [ ] Navigation menu works
- [ ] Contact section functional
- [ ] SEO files created (sitemap.xml, robots.txt)
- [ ] GitHub repository is public
- [ ] Ready to deploy! 🚀

---

**Choose your deployment option and let's go live!** 🎉

**Questions? Refer back to the relevant section or check the Next.js documentation.**

---

*Built with Next.js 16 • Deployed with ❤️*
