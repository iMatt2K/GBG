# GBG — Goat Bounce Goat

A simple static website template for the GBG project.

This repository provides the basic structure for a small responsive website including:

- A header with navigation and logo
- A hero section and content layout
- Light/dark mode support (automatically respects system preference)
- Four example pages: Home, About, Projects, Contact
- A responsive navigation toggle for mobile

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Website
   ```

2. **Place assets**
   Put the `GBGOfficialLogo.png` image in the `assets/` folder.  The site header uses `assets/GBGOfficialLogo.png`.

3. **Serve locally**
   ```bash
   python -m http.server 8000
   # open http://localhost:8000 in your browser
   ```

4. **Edit content**
   - Modify `index.html`, `about.html`, `projects.html`, `contact.html` to suit your needs.
   - Update styles in `css/style.css` or add new scripts in `js/main.js`.

## Project Structure

```
Website/
├── assets/             # Images and media
│   └── GBGOfficialLogo.png   # project logo
├── css/
│   └── style.css
├── js/
│   └── main.js
├── index.html
├── about.html
├── projects.html
├── contact.html
└── README.md
```

## Customization & Deployment

- Add a `package.json` and build scripts if you introduce a bundler or frontend framework.
- Deploy using GitHub Pages, Netlify, Vercel, or any static host.
- Replace placeholder text and example projects with your real content.

## License

Add a LICENSE file to this repository to indicate how it may be used.

---

> *This README is templated for GitHub and can be further customized to your project's needs.*
