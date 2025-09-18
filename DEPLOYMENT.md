# GitHub Pages Deployment Guide

This guide will help you deploy the Williams-Sonoma Inspired website to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your computer
- Basic knowledge of Git commands

## Step-by-Step Deployment

### 1. Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., `williams-sonoma-inspired`)
5. Make sure it's set to "Public" (required for free GitHub Pages)
6. Don't initialize with README (we already have files)
7. Click "Create repository"

### 2. Upload Your Files

#### Option A: Using Git Command Line

```bash
# Navigate to your project directory
cd williams-sonoma-inspired

# Initialize git repository
git init

# Add all files
git add .

# Commit the files
git commit -m "Initial commit: Williams-Sonoma inspired website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Option B: Using GitHub Web Interface

1. Go to your newly created repository
2. Click "uploading an existing file"
3. Drag and drop all your project files
4. Add a commit message: "Initial commit: Williams-Sonoma inspired website"
5. Click "Commit changes"

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section in the left sidebar
4. Under "Source", select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click "Save"

### 4. Access Your Live Site

1. GitHub will provide you with a URL like: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`
2. It may take a few minutes for the site to be available
3. You can find the URL in the "Pages" section of your repository settings

## Custom Domain (Optional)

If you have a custom domain:

1. In the Pages settings, add your custom domain
2. Update your DNS settings to point to GitHub Pages
3. Add a `CNAME` file to your repository with your domain name

## Updating Your Site

To update your site:

```bash
# Make your changes to the files
# Then commit and push

git add .
git commit -m "Update: description of changes"
git push origin main
```

Your changes will be automatically deployed to GitHub Pages.

## Troubleshooting

### Site Not Loading
- Check that your repository is public
- Ensure `index.html` is in the root directory
- Wait a few minutes for GitHub to process the changes

### Images Not Showing
- Verify image URLs are correct
- Check that external images (Unsplash) are accessible
- Consider hosting images locally for better performance

### Styling Issues
- Check browser console for CSS errors
- Ensure all CSS files are properly linked
- Verify file paths are correct

## Performance Tips

1. **Optimize Images**: Compress images before uploading
2. **Minify CSS/JS**: Use tools to minify your code for production
3. **Use CDN**: Consider using a CDN for external resources
4. **Enable Caching**: GitHub Pages automatically handles caching

## Security Considerations

- Don't include sensitive information in your repository
- Use HTTPS for all external resources
- Regularly update dependencies if using any

## Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Look at your repository's "Actions" tab for build errors
3. Verify all file paths and links are correct
4. Test your site locally before deploying

---

Your Williams-Sonoma inspired website should now be live on GitHub Pages! 🎉
