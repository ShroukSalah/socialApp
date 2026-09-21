# 🌐 SocialApp

A modern social media web application built with **Angular**, where users can connect, share posts, and interact with each other.

<!-- Replace the line above with 1-2 sentences describing exactly what your app does. -->

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

🔗 **[Live Demo](https://your-demo-link.vercel.app)** <!-- Replace with your deployed link -->

---

## 📸 Screenshots

| Home Feed | Profile |
| :---: | :---: |
| ![Home](docs/screenshots/home.png) | ![Profile](docs/screenshots/profile.png) |

| Login | Mobile View |
| :---: | :---: |
| ![Login](docs/screenshots/login.png) | ![Mobile](docs/screenshots/mobile.png) |

<!-- Create a docs/screenshots folder, add your images, and keep the file names above (or update them). -->

---

## ✨ Features

- 🔐 User authentication (register & login)
- 📝 Create, edit, and delete posts
- ❤️ Like and comment on posts
- 👤 User profiles
- 📱 Fully responsive design

<!-- Keep only the features your app actually has, and add any others. -->

---

## 🛠 Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Angular](https://angular.dev/) |
| Language | TypeScript |
| Styling | CSS / PostCSS |
| Testing | [Vitest](https://vitest.dev/) |
| Code Quality | Prettier, EditorConfig |

<!-- Add anything else you use: Tailwind CSS, Angular Material, RxJS, Firebase, REST API, etc. -->

---

## 📂 Project Structure

```
socialApp/
├── public/          # Static assets
├── src/
│   ├── app/         # Components, services, routes
│   ├── index.html
│   ├── main.ts
│   └── styles.css
├── angular.json
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.dev/tools/cli)

```bash
npm install -g @angular/cli
```

### Installation

1. Clone the repository

   ```bash
   git clone https://github.com/ShroukSalah/socialApp.git
   ```

2. Go to the project folder

   ```bash
   cd socialApp
   ```

3. Install dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   ng serve
   ```

5. Open your browser and go to `http://localhost:4200/`

The app reloads automatically whenever you change a source file.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `ng serve` | Start the local development server |
| `ng build` | Build the app for production into `dist/` |
| `ng test` | Run unit tests with Vitest |
| `ng generate component <name>` | Generate a new component |

---

## ⚙️ Environment Variables

<!-- Delete this section if your app doesn't use an API. -->

If the app connects to a backend API, set the base URL in `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://route-posts.routemisr.com'
};
```

---

## 🌍 Deployment

<!-- The app can be deployed for free on platforms like [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/), or [Firebase Hosting](https://firebase.google.com/docs/hosting). -->

```bash
ng build
```

The production files will be generated in the `dist/` folder.

---

## 🗺 Roadmap

- [ ] Real-time notifications
- [ ] Direct messaging
- [ ] Dark mode
- [ ] Image uploads

 
---

## 🤝 Contributing

Contributions are welcome!

<!-- 1. Fork the project
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m "feat: add amazing feature"`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request -->

---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 👩‍💻 Author

**Shrouk Salah**

- GitHub: [@ShroukSalah](https://github.com/ShroukSalah)
- LinkedIn: [your-linkedin](https://www.linkedin.com/in/shrouk-salah-b3a955106/) <!-- Replace with your link -->

⭐ If you like this project, give it a star!