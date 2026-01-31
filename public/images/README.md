# Images Directory Guide

This folder contains all images for your portfolio. Here's the structure:

## 📁 Folder Organization

### `/profile`
Your profile picture and headshots
- **Recommended**: `profile.jpg` (used in About section)
- **Size**: 400x400px or larger (square format recommended)
- **Format**: JPG, PNG, or WebP
- **Usage**: AboutSection component displays this image with animated border

### `/gallery`
Personal photo collections and galleries
- Travel photos
- Personal moments
- Event photos
- Display in ImageGallery component

### `/projects`
Screenshots and previews of your projects
- Project thumbnails
- Feature screenshots
- Live app previews
- **Recommended naming**: `project-1.jpg`, `project-2.jpg`, etc.

### `/certificates`
Your certificates, achievements, and credentials
- Course completion certificates
- Professional certifications
- Achievement badges
- **Recommended naming**: `cert-name-year.jpg`

---

## 🖼️ Image Upload Instructions

### For Profile Picture:
1. Find/create a professional headshot photo (400x400px recommended)
2. Save as `profile.jpg` in this folder
3. The About section will automatically display it with a glowing border animation

### For Projects:
1. Take screenshots of your projects
2. Name them descriptively: `project-ecommerce.jpg`, `project-weather-app.jpg`
3. Save in `/projects` folder
4. Reference in your projects data file

### For Gallery:
1. Add your personal photos to `/gallery`
2. Organize by subfolder if desired (e.g., `/gallery/travel`, `/gallery/events`)
3. Use for image gallery component

### For Certificates:
1. Scan or screenshot your certificates
2. Save in `/certificates` folder
3. Reference in your achievements section

---

## 🎨 Image Best Practices

**Format**: Use JPG for photos, PNG for graphics with transparency
**Size**: Keep images under 2MB for web optimization
**Dimensions**: 
- Profile: 400x400px (square)
- Projects: 1200x600px or 800x600px
- Gallery: 1000x750px or 1200x800px

**Optimization**: Use tools like TinyPNG or ImageOptim to compress images

---

## 📝 How to Update Avatar in AboutSection

The `AboutSection` component currently uses a placeholder. Update it:

```typescript
// In app/page.tsx or wherever you use AboutSection:
<AboutSection 
  profileImage="/images/profile/profile.jpg"
  name="Your Full Name"
  title="Your Professional Title"
  // ... other props
/>
```

---

## ✅ Checklist

- [ ] Add profile.jpg to `/profile` folder (400x400px recommended)
- [ ] Add project screenshots to `/projects` folder
- [ ] Add personal photos to `/gallery` folder
- [ ] Add certificates to `/certificates` folder
- [ ] Update AboutSection with your profile image path
- [ ] Test responsive images on mobile/desktop

---

For more details, see `ROADMAP.md` and `SETUP_GUIDE.md`
