# Adarsh Singh Parihar - Portfolio Website

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean and professional UI with gradient accents (blue & violet tones)
- **Dark/Light Mode**: Toggle between dark and light themes
- **Smooth Animations**: Framer Motion animations throughout
- **Fully Responsive**: Mobile-first design approach
- **Particle Background**: Interactive animated background
- **Floating Navigation**: Highlights active section while scrolling
- **Contact Form**: Direct email integration using mailto

## 🛠️ Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview production build:

```bash
npm run preview
```

## 📝 Configuration

### Adding Your Resume

Place your resume PDF in the `public` folder and name it `resume.pdf`, or update the link in `src/components/Hero.jsx`:

```jsx
<a href="/your-resume-name.pdf" target="_blank" rel="noopener noreferrer">
  View Resume
</a>
```

### Updating Email

The contact form uses `mailto:` links. Update your email in `src/components/Contact.jsx`:

```jsx
const mailtoLink = `mailto:your-email@example.com?subject=...`;
```

### Customizing Colors

Colors can be customized in `tailwind.config.js`. The main gradient colors are:

- Cyan: `#06b6d4`
- Blue: `#3b82f6`
- Purple: `#8b5cf6`

### Adding Projects

Edit the `projects` array in `src/components/Projects.jsx` to add or modify projects.

### Updating Social Links

Update social media links in `src/components/Contact.jsx` and `src/components/Navbar.jsx`.

## 📱 Sections

1. **Hero**: Introduction with CTA buttons
2. **About**: Brief bio and statistics
3. **Skills**: Technical skills organized by category
4. **Projects**: Showcase of projects with tech stack
5. **Achievements**: Timeline of milestones and achievements
6. **Contact**: Contact form and social links
7. **Footer**: Copyright and credits

## 🎨 Customization Tips

- Fonts: Change in `tailwind.config.js` and update Google Fonts link in `index.html`
- Animations: Modify Framer Motion variants in component files
- Layout: Adjust grid layouts in Tailwind classes
- Colors: Update gradient classes throughout components

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- **Email**: adarshparihar40@gmail.com
- **Phone**: +91-7275003315
- **GitHub**: [adarsh40parihar](https://github.com/adarsh40parihar)
- **LinkedIn**: [adarsh40parihar](https://linkedin.com/in/adarsh40parihar)

---

Built with ❤️ using React & Tailwind CSS
