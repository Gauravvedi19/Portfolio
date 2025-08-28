# React Portfolio Website with Parallax Animations

A modern, production-ready portfolio website built with React, featuring heavy frontend animations, parallax scrolling effects, and beautiful design aesthetics inspired by premium portfolio sites.

## 🚀 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with optimized layouts for all devices
- **Dark/Light Theme**: Persistent theme switching with smooth transitions
- **Smooth Scrolling**: Seamless navigation between sections
- **Contact Form**: Animated form with client-side validation
- **Project Showcase**: Interactive project grid with modal case studies

### Animation & Visual Effects
- **Parallax Scrolling**: Multi-layered parallax effects with different scroll speeds
- **3D Card Tilts**: Interactive project cards with realistic 3D hover effects
- **Custom Cursor**: Desktop-only custom cursor with hover interactions
- **Framer Motion**: Comprehensive animation system with entrance/exit effects
- **Scroll-Triggered Animations**: Content reveals based on scroll position
- **Micro-interactions**: Button hovers, form field focus states, and loading animations

### Performance & Accessibility
- **Lazy Loading**: Optimized image loading for better performance
- **Reduced Motion Support**: Respects user accessibility preferences
- **Semantic HTML**: Proper HTML structure for screen readers
- **Keyboard Navigation**: Full keyboard accessibility support
- **SEO Optimized**: Meta tags and structured content

## 🛠 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Development**: ESLint + TypeScript

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Customization

### Content Updates
1. **Personal Information**: Update contact details in `src/components/ContactForm.jsx` and `src/components/Footer.jsx`
2. **Projects**: Modify the projects array in `src/components/ProjectsGrid.jsx`
3. **About Section**: Edit content in `src/components/About.jsx`
4. **Hero Section**: Update headlines and description in `src/components/Hero.jsx`

### Styling & Theme
1. **Colors**: Customize the color palette in `tailwind.config.js`
2. **Typography**: Update font families and sizes in the Tailwind config
3. **Animations**: Modify animation variants in `src/lib/animations.js`
4. **Layout**: Adjust spacing and breakpoints in component files

### Adding New Projects
```javascript
{
  id: 7,
  title: "Your Project Title",
  description: "Brief project description",
  image: "https://your-image-url.jpg",
  category: "Web App", // or "Mobile", "Dashboard", etc.
  technologies: ["React", "Node.js", "MongoDB"],
  github: "https://github.com/your-repo",
  demo: "https://your-demo-url.com",
  longDescription: "Detailed project description for modal",
  challenges: "Technical challenges faced",
  results: "Project outcomes and metrics"
}
```

## ⚡ Performance Optimization

### Image Optimization
- Use WebP format for better compression
- Implement responsive images with `srcset`
- Lazy load images below the fold
- Compress images before deployment

### Code Splitting
```javascript
// Example of lazy loading components
const ProjectsGrid = lazy(() => import('./components/ProjectsGrid'));
```

### Bundle Analysis
```bash
npm run build
npx vite-bundle-analyzer dist
```

### Lighthouse Optimization
- Minimize unused CSS with PurgeCSS
- Optimize font loading with `font-display: swap`
- Use CDN for static assets
- Enable gzip compression on server

## 🔧 Environment Variables

Create a `.env` file for environment-specific configurations:

```env
VITE_CONTACT_FORM_ENDPOINT=your-form-endpoint
VITE_ANALYTICS_ID=your-analytics-id
VITE_SITE_URL=https://your-domain.com
```

## 📱 Mobile Optimization

### Reduced Motion
The site automatically detects and respects the `prefers-reduced-motion` setting:
- Disables complex animations on mobile devices
- Reduces motion for users with accessibility preferences
- Maintains visual appeal while improving performance

### Touch Interactions
- Optimized touch targets (minimum 44px)
- Swipe gestures for project navigation
- Improved tap responsiveness

## 🚀 Deployment

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

### Custom Server
1. Build the project: `npm run build`
2. Serve the `dist` folder with your preferred server
3. Configure gzip compression and caching headers

## 🔍 SEO Optimization

### Meta Tags
Update meta tags in `index.html`:
```html
<meta name="description" content="Your portfolio description">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your portfolio description">
<meta property="og:image" content="https://your-domain.com/og-image.jpg">
```

### Structured Data
Add JSON-LD structured data for better search engine understanding.

## 🎯 Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile**: iOS Safari 14+, Chrome Mobile 90+
- **Graceful Degradation**: Basic functionality on older browsers

## 📄 License

MIT License - feel free to use this project for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 🆘 Support

If you encounter any issues or have questions:
1. Check the [Issues](issues) section
2. Review the documentation
3. Create a new issue with detailed information

## 🏆 Credits

- **Design Inspiration**: Modern portfolio websites and Dribbble shots
- **Icons**: Lucide React icon library
- **Images**: Pexels (for demo images)
- **Animations**: Framer Motion community examples

---

**Built with ❤️ by a passionate developer**