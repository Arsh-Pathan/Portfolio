# 🚀 Arsh Pathan - Professional Portfolio

A modern, animated portfolio website built with **Astro**, **Three.js**, **Tailwind CSS**, and **GSAP**. This project features a space-themed design with smooth scroll animations, interactive 3D elements, and a fully responsive layout.

## ✨ Features

- **3D Space Background**: Interactive star field using Three.js that responds to mouse movement.
- **Smooth Animations**: Powered by GSAP and ScrollTrigger for premium feel.
- **Responsive Design**: Fully optimized for Desktop, Tablet, and Mobile.
- **Modern Tech Stack**: Built with performance-first Astro framework.
- **Interactive Elements**: Hover effects, tilt cards, and particle systems.

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [GSAP](https://greensock.com/gsap)
- **3D Graphics**: [Three.js](https://threejs.org)
- **Forms**: [EmailJS](https://www.emailjs.com)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and sign up/login.
3. Import your repository.
4. Vercel will automatically detect Astro and configure the build settings.
5. Click **Deploy**.

### GitHub Pages

1. Update `astro.config.mjs` with your site URL:
   ```js
   export default defineConfig({
     site: 'https://username.github.io',
     base: '/repository-name', // if deploying to a subpath
   });
   ```
2. Run `npm run build`.
3. Deploy the `dist/` folder to your `gh-pages` branch.

## 📝 Configuration

### EmailJS Setup

To make the contact form work:
1. Sign up at [EmailJS](https://www.emailjs.com).
2. Create a **Service** and a **Template**.
3. Open `src/components/Contact.astro`.
4. Replace the placeholder IDs with your actual credentials:
   ```javascript
   await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form, 'YOUR_PUBLIC_KEY');
   ```

### Customization

- **Colors**: Edit `tailwind.config.mjs` to change the theme colors.
- **Content**: Update the data arrays in each component (e.g., `src/components/Projects.astro`) to change the content.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
