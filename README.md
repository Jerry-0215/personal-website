# Personal Website - Moscow Portfolio Template

This is a Next.js personal portfolio website based on the Moscow template from ThemeForest, configured for deployment on GitHub Pages.

## 🚀 Features

- Modern, responsive design
- Dark/Light theme support
- Portfolio showcase
- Blog functionality
- Contact form with EmailJS integration
- Typing animation effects
- Materialize CSS framework

## 📁 Project Structure

```
├── pages/           # Next.js pages
├── src/
│   ├── components/  # React components
│   ├── layout/      # Layout components
│   ├── context/     # React context
│   └── utils/       # Utility functions
├── public/          # Static assets
├── styles/          # Global styles
└── .github/         # GitHub Actions workflow
```

## 🛠️ Setup & Development

1. **Install dependencies:**
   ```bash
   npm install --legacy-peer-deps
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run start
   ```

## 🌐 Deployment to GitHub Pages

### Prerequisites
1. Create a new GitHub repository
2. Push this code to the `main` branch

### Setup Steps
1. **Connect to GitHub repository:**
   ```bash
   git remote add origin https://github.com/Jerry-0215/personal-website.git
   git push -u origin main
   ```

2. **Configure GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings → Pages
   - Under "Build and deployment", select "GitHub Actions"
   - The workflow will automatically deploy when you push to main

3. **Access your site:**
   - Your site will be available at: `https://jerry-0215.github.io/personal-website/`

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `src/components/AboutUs.js` - About section
- `src/components/Portfolio.js` - Portfolio projects
- `src/components/GetInTouch.js` - Contact information
- `public/images/` - Replace with your photos

### Styling
- Modify `public/css/style.css` for custom styles
- Theme colors can be changed in `public/css/skins/`
- Global styles in `styles/globals.css`

### EmailJS Configuration
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the service ID in `src/components/GetInTouch.js`

## 📝 Available Pages

- `/` - Main portfolio page
- `/index-dark` - Dark theme version
- `/blog-light` - Blog listing (light theme)
- `/blog-dark` - Blog listing (dark theme)
- `/demo` - Demo page

## 🔧 Technical Details

- **Framework:** Next.js 12.2.5
- **Styling:** Materialize CSS + Custom CSS
- **Icons:** Font Awesome
- **Animations:** Typed.js, Custom animations
- **Email:** EmailJS integration
- **Deployment:** GitHub Pages with static export

## 📄 License

This template is from ThemeForest. Please check the original license terms.

## 🆘 Troubleshooting

### Build Issues
- Use `--legacy-peer-deps` flag when installing dependencies
- Ensure all image paths are correct
- Check for any missing dependencies

### GitHub Pages Issues
- Verify `.nojekyll` file exists in `public/` directory
- Check GitHub Actions workflow is enabled
- Ensure repository is public for free GitHub Pages hosting

### Development Issues
- Clear `.next` folder and restart dev server
- Check browser console for JavaScript errors
- Verify all image assets are in correct locations
# Test deployment
# Force workflow trigger
