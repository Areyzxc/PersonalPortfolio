# Project Images Directory

This directory stores project showcase images and screenshots.

## Usage

Replace the placeholder image paths in `src/data/projectsData.ts` with actual project screenshots.

### Current Placeholders:
- `mangabrew-placeholder.jpg` → Replace with actual MangaBrew Cafe screenshot
- `blog-placeholder.jpg` → Replace with actual Blog platform screenshot  
- `cg-game-placeholder.jpg` → Replace with actual game screenshot or gameplay footage
- `sysinfo-placeholder.jpg` → Replace with actual SystemInfoGenerator screenshot

## Image Requirements

For best results:
- **Format**: JPG or PNG
- **Size**: 1200x600px (recommended for responsive display)
- **Quality**: High quality, clear screenshots
- **Content**: Show main UI/gameplay/feature

## How to Add Images

1. Add your screenshot/image to this folder
2. Update the image path in `src/data/projectsData.ts`:
   ```typescript
   image: '/images/projects/your-image.jpg'
   ```
3. If you have multiple images for a project, add them to the `images` array:
   ```typescript
   images: [
     '/images/projects/mangabrew-1.jpg',
     '/images/projects/mangabrew-2.jpg',
     '/images/projects/mangabrew-3.jpg',
   ]
   ```

## Video Thumbnails

For projects with YouTube videos:
- YouTube automatically generates thumbnails
- Your `youtubeUrl` is already configured in projectsData.ts
- Hover over project cards to see the play button

## Project Folder Structure

```
projects/
├── mangabrew-1.jpg          (MangaBrew Cafe main screenshot)
├── mangabrew-2.jpg          (MangaBrew Cafe feature screenshot)
├── blog-1.jpg               (Blog platform main view)
├── blog-2.jpg               (Blog platform article view)
├── cg-game-1.jpg            (Game main menu)
├── cg-game-2.jpg            (Game gameplay screenshot)
├── sysinfo-1.jpg            (SystemInfoGenerator UI)
└── sysinfo-2.jpg            (SystemInfoGenerator output example)
```

## Note

Currently using placeholder paths. When you have screenshots ready:
1. Upload them to this directory
2. Update `src/data/projectsData.ts` with the actual paths
3. The components will automatically display your images

No code changes needed - just add the images and update the paths!
