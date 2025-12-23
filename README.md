# Ali Mohammadabadi - Portfolio

A modern, responsive portfolio website built with Vue 3, featuring dark/light theme toggle, bilingual support (Persian/English), and smooth animations.

## 🌟 Features

- ✨ Modern and beautiful design
- 🌓 Dark and light theme with toggle functionality
- 🎨 Smooth and attractive animations
- 📱 Fully responsive design
- ⚡ Built with Vue 3 and Vite
- 🎯 Optimized for performance
- 🌍 Bilingual support (Persian/English) with RTL/LTR support
- 🚀 Fast and lightweight

## 🛠️ Technologies Used

- **Vue 3** - Progressive JavaScript framework
- **Vite** - Next generation frontend tooling
- **CSS3** - Custom properties for theming
- **Intersection Observer API** - For scroll animations

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Theme System

The portfolio includes a comprehensive theme system:
- **Dark Theme**: Default theme with dark backgrounds and light text
- **Light Theme**: Light backgrounds with dark text
- Theme preference is saved in localStorage
- Smooth transitions between themes

## 🌍 Language Support

- **Persian (فارسی)**: RTL layout with Persian translations
- **English**: LTR layout with English translations
- Language preference is saved in localStorage
- Code blocks and contact info remain LTR in both languages

## 📁 Project Structure

```
src/
├── components/
│   ├── NavBar.vue          # Navigation bar with theme/language toggle
│   ├── HeroSection.vue     # Hero section with typing animation
│   ├── AboutSection.vue    # About me section
│   ├── ExperienceSection.vue  # Work experience timeline
│   ├── SkillsSection.vue   # Skills with progress bars
│   ├── EducationSection.vue # Education and languages
│   ├── ContactSection.vue  # Contact information
│   ├── Footer.vue          # Footer with copyright
│   └── ScrollToTop.vue     # Scroll to top button
├── composables/
│   └── useLanguage.js      # Language management composable
├── App.vue                 # Main app component
├── main.js                 # Application entry point
└── style.css               # Global styles and theme variables
```

## 🎯 Key Features Explained

### Dark/Light Theme
- Toggle button in navigation bar
- Smooth color transitions
- Persistent theme selection

### Bilingual Support
- Flag icons for language selection (🇮🇷 / 🇬🇧)
- Automatic RTL/LTR layout switching
- Code blocks and contact info remain LTR

### Animations
- Typing animation in hero section
- Scroll-triggered fade-in animations
- Smooth hover effects
- Floating elements

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Optimized for all screen sizes

## 📝 Customization

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.vue`
3. Add translations in `src/composables/useLanguage.js`

### Modifying Colors
Edit CSS variables in `src/style.css`:
```css
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  /* ... */
}
```

### Adding Translations
Edit `src/composables/useLanguage.js` and add your translations to the `translations` object.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder will contain the production-ready files.

### Deploy to GitHub Pages
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages

### Deploy to Vercel/Netlify
Simply connect your GitHub repository and deploy. Both platforms support Vite projects out of the box.

## 📄 License

This project is for personal use.

## 👤 Author

**Ali Mohammadabadi**
- Email: mohammadabadi.project@gmail.com
- Telegram: [@ali_1554](https://t.me/ali_1554)
- LinkedIn: [Ali Mohammadabadi](https://linkedin.com/in/ali-mohammadabadi-649376195)

## 🙏 Acknowledgments

- Vue.js team for the amazing framework
- Vite team for the fast build tool
- All open-source contributors

---

Made with ❤️ using Vue 3
