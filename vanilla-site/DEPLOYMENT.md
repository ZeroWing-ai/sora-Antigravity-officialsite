# Vanilla Site Deployment Guide

## 📁 Site Location
The vanilla HTML/CSS/JS version of your portfolio is located at:
```
/Users/nagi/Desktop/開発/そら公式サイトAntigravity/vanilla-site/
```

## 🚀 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** (or use existing):
   ```bash
   cd vanilla-site
   git init
   git add .
   git commit -m "Initial commit: Vanilla portfolio site"
   ```

2. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/ZeroWing-ai/sora-portfolio-vanilla.git
   git branch -M main
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main` / `root`
   - Save

4. **Your site will be live at**:
   ```
   https://zerowng-ai.github.io/sora-portfolio-vanilla/
   ```

### Option 2: Netlify

1. **Drag and Drop**:
   - Go to [netlify.com](https://netlify.com)
   - Drag the `vanilla-site` folder to the deploy zone
   - Done! Your site is live

2. **Or via Git**:
   - Connect your GitHub repository
   - Build settings: Leave empty (no build needed!)
   - Publish directory: `/`

### Option 3: Vercel

1. **Via CLI**:
   ```bash
   cd vanilla-site
   npx vercel
   ```

2. **Or via Dashboard**:
   - Import your GitHub repository
   - Framework Preset: Other
   - Build Command: Leave empty
   - Output Directory: `./`

### Option 4: Any Static Host

Simply upload the contents of the `vanilla-site` folder to any web server or static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Firebase Hosting
- Cloudflare Pages
- etc.

## 📝 File Structure

```
vanilla-site/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles
├── js/
│   ├── data.js         # Portfolio data
│   └── main.js         # Interactions & animations
└── images/             # All images
    ├── 3d-maze.png
    ├── battle-royale.png
    ├── coin-shooting.png
    ├── line-stickers.png
    ├── note-page.png
    ├── pomodoro-timer.png
    └── sns-generator.png
```

## ✅ Benefits of Vanilla Site

- ✨ **No build step required** - Just upload and it works
- 🚀 **Fast loading** - No framework overhead
- 💰 **Free hosting** - Works on any static host
- 🔧 **Easy to maintain** - Simple HTML/CSS/JS
- 📱 **Fully responsive** - Works on all devices
- 🎨 **Same design** - Identical to Next.js version

## 🔄 Updating Content

To update your portfolio:

1. **Edit data** in `js/data.js`
2. **Add images** to `images/` folder
3. **Commit and push** (if using Git)
4. Changes deploy automatically!

## 🧪 Local Testing

```bash
cd vanilla-site
python3 -m http.server 8080
# Visit http://localhost:8080
```

Or use any local server:
- VS Code Live Server extension
- `npx serve`
- `php -S localhost:8080`
