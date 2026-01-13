# 📸 Gallery Management Guide

## How to Add New Images to Your Gallery

Your Gallery Section is fully functional and ready for your images! Here's how to manage it:

---

## ✅ Quick Start: Add Your First Images

### Step 1: Add Image Files
```bash
# 1. Copy your images to the gallery folder
cp your-image.jpg public/images/gallery/

# 2. Organize by category (optional)
public/images/gallery/
├── travel-1.jpg
├── events-1.jpg
└── personal-1.jpg
```

### Step 2: Update Gallery Data
Edit: `src/data/galleryData.ts`

Add your images to the `galleryImages` array:

```typescript
{
  id: '7',
  src: '/images/gallery/your-image.jpg',
  alt: 'Description for accessibility',
  title: 'Your Image Title',
  description: 'A detailed description of your image.',
  category: 'Travel',  // or Events, Personal, etc.
  date: '2024-11-27',
},
```

### Step 3: Deploy
```bash
git add .
git commit -m "Add gallery images"
git push origin main
# GitHub Actions will auto-deploy!
```

---

## 📋 Image Data Structure

Each gallery image needs these properties:

| Property | Type | Example |
|----------|------|---------|
| `id` | string | `'7'` (unique identifier) |
| `src` | string | `'/images/gallery/travel-1.jpg'` |
| `alt` | string | `'Mountain View'` (for accessibility) |
| `title` | string | `'Mountain Adventure'` |
| `description` | string | `'Beautiful view from the summit'` |
| `category` | string | `'Travel'`, `'Events'`, `'Personal'` |
| `date` | string | `'2024-11-27'` (YYYY-MM-DD format) |

---

## 🎨 Gallery Features

### ✨ Current Features
- **3-column responsive grid** (2 on tablet, 1 on mobile)
- **Category filtering** (Travel, Events, Personal, etc.)
- **Fullscreen lightbox** with image viewer
- **Navigation arrows** to browse images
- **Image counter** (e.g., "3 of 12")
- **Image details** (title, description, date)
- **Smooth animations** on load and hover
- **Auto-creates categories** from your data

### 💡 How It Works
1. Upload images to `/public/images/gallery/`
2. Add image data to `galleryData.ts`
3. Gallery automatically:
   - Detects unique categories
   - Creates filter buttons
   - Generates masonry grid
   - Enables lightbox modal

---

## 🚀 For Deployed Site (GitHub Pages)

### Method 1: Direct Git Push (Recommended)
```bash
# Add images
cp photo.jpg ~/personal-portfolio/public/images/gallery/

# Update data file
nano src/data/galleryData.ts  # Add your image entry

# Deploy
git add .
git commit -m "Add gallery photos"
git push origin main
```

GitHub Actions automatically rebuilds and deploys! ✨

### Method 2: Manual Updates (No Coding)
You can also:
1. Fork your portfolio repo
2. Upload images via GitHub web interface
3. Edit `galleryData.ts` directly on GitHub
4. It auto-deploys!

---

## 📝 Example: Adding 3 New Travel Photos

```typescript
// In src/data/galleryData.ts, add to galleryImages array:

{
  id: '7',
  src: '/images/gallery/travel-beachresort.jpg',
  alt: 'Tropical Beach Resort',
  title: 'Tropical Paradise',
  description: 'Amazing white sand beach with crystal clear waters.',
  category: 'Travel',
  date: '2024-07-15',
},
{
  id: '8',
  src: '/images/gallery/travel-mountains.jpg',
  alt: 'Alpine Mountains',
  title: 'Alpine Adventure',
  description: 'Hiking through stunning alpine scenery.',
  category: 'Travel',
  date: '2024-08-20',
},
{
  id: '9',
  src: '/images/gallery/travel-cityscape.jpg',
  alt: 'City Skyline',
  title: 'City Lights',
  description: 'Evening view of the bustling city skyline.',
  category: 'Travel',
  date: '2024-09-10',
},
```

Then push to GitHub - done! 🎉

---

## ✅ Checklist for Adding Images

- [ ] Image file copied to `/public/images/gallery/`
- [ ] Image entry added to `src/data/galleryData.ts`
- [ ] All required fields filled (id, src, alt, title, description, category, date)
- [ ] Unique `id` (no duplicates)
- [ ] Correct file path in `src`
- [ ] Valid `date` in YYYY-MM-DD format
- [ ] Changes committed to git
- [ ] Pushed to GitHub main branch

---

## 🎯 Gallery Component Location

- **Component:** `src/components/sections/GallerySection.tsx`
- **Data:** `src/data/galleryData.ts`
- **Images:** `public/images/gallery/`
- **Exported in:** `src/components/sections/index.ts`
- **Used in:** `app/page.tsx`

---

## 💡 Pro Tips

1. **Image Naming**: Use descriptive names like `travel-bali-beach.jpg` instead of `IMG123.jpg`
2. **Image Size**: Keep images < 2MB for faster loading
3. **Aspect Ratio**: Works best with images around 4:3 or 16:9 ratio
4. **Categories**: Auto-generated from your data - no need to register them!
5. **Dates**: Sort newest first by date in your data array
6. **Alt Text**: Important for accessibility - describe the image clearly

---

## 🔄 Workflow for Regular Updates

**Weekly/Monthly Photo Uploads:**
```bash
# 1. Navigate to your portfolio repo
cd ~/personal-portfolio

# 2. Add new photos
cp ~/Pictures/new-photo.jpg public/images/gallery/

# 3. Edit gallery data file
nano src/data/galleryData.ts  # Add image entries

# 4. Commit and push (auto-deploys!)
git add .
git commit -m "Add [month] gallery photos"
git push origin main
```

Done! Your site updates automatically! 🚀

---

For more help, check `PROJECT_SUMMARY.md` and `SETUP_GUIDE.md`
