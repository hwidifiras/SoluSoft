# Solusoft - Cloud & Software Solutions

A modern, responsive company website built with React and Tailwind CSS, featuring dark mode support and smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional interface with gradient backgrounds and rounded corners
- **Responsive**: Mobile-first design that works perfectly on all devices
- **Dark Mode**: Full dark mode support with system preference detection
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance**: Optimized for fast loading and smooth interactions

## 🎨 Brand Colors (Extracted from Logo)

- **Primary Blue**: `#2563eb` (Deep blue)
- **Secondary Blue**: `#3b82f6` (Medium blue) 
- **Accent Blue**: `#60a5fa` (Light blue)
- **Gradients**: Flowing blue gradients throughout the design

## 📱 Pages

- **Home**: Hero section with company introduction and service preview
- **Services**: Detailed service offerings with process workflow
- **About**: Team introduction, company values, and timeline
- **Portfolio**: Project showcase with filtering capabilities
- **Contact**: Contact form, business information, and FAQ section

## 🛠 Tech Stack

- **React 18**: Latest React with functional components and hooks
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **Framer Motion**: Smooth animations and transitions
- **React Router**: Client-side routing
- **Responsive Design**: Mobile-first approach with breakpoint utilities

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd solusoft-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 🎯 Project Structure

```
src/
├── components/           # Reusable components
│   ├── Navbar.js        # Navigation with dark mode toggle
│   ├── Footer.js        # Footer with links and social media
│   ├── Hero.js          # Hero section component
│   ├── Card.js          # Reusable card component
│   └── ContactForm.js   # Contact form with validation
├── pages/               # Page components
│   ├── Home.js          # Landing page
│   ├── Services.js      # Services overview
│   ├── About.js         # About us page
│   ├── Portfolio.js     # Project portfolio
│   └── Contact.js       # Contact page
├── App.js               # Main app component with routing
├── index.js             # React entry point
└── index.css            # Global styles and Tailwind imports
```

## 🎨 Design Features

### Color Palette
- Consistent blue gradient theme extracted from brand logos
- Dark mode variants for all colors
- Semantic color usage (primary, secondary, accent)

### Typography
- Inter font family for clean, modern text
- Responsive font sizes
- Proper contrast ratios for accessibility

### Components
- Reusable card components with hover effects
- Gradient buttons with smooth transitions
- Responsive navigation with mobile menu
- Animated contact form with success states

### Animations
- Scroll-triggered animations with Framer Motion
- Hover effects on interactive elements
- Smooth page transitions
- Loading states and micro-interactions

## 📱 Responsive Breakpoints

- **Mobile**: `< 768px`
- **Tablet**: `768px - 1024px`
- **Desktop**: `> 1024px`

## 🌙 Dark Mode

- Automatic system preference detection
- Manual toggle in navigation
- Persistent user preference storage
- Smooth transitions between themes

## 🔧 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
theme: {
  extend: {
    colors: {
      primary: { /* your colors */ },
      secondary: { /* your colors */ },
    }
  }
}
```

### Content
Update the content in each page component to match your business information.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions, please contact us at hello@solusoft.com

---

Built with ❤️ by the Solusoft team
