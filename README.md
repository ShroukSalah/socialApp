# Lamma 🤝

> **Lamma** (لمّة) comes from the Egyptian Arabic word for a get-together, when friends and family gather. That is what a social app is for. It's also short, easy to say, and easy to spell in English letters.

A modern social media web application built with **Angular**, where users can register, share posts, and interact with each other through likes and comments.

[![Angular](https://img.shields.io/badge/Angular-22-DD0031?logo=angular&logoColor=white)](https://angular.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

🔗 **[Live Demo](https://social-app-weld-ten.vercel.app/)**

 
---

## ✨ Features

- 🔐 User authentication (register & login)
- 📝 Create, edit, and delete posts
- ❤️ Like and comment on posts
- 👤 User profiles
- 📱 Fully responsive design

---

## 🛠 Tech Stack

| Category | Technology |
| --- | --- |
| Framework | [Angular](https://angular.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | CSS / PostCSS |
| Backend API | [Route Posts API](https://route-posts.routemisr.com) |
| Testing | [Vitest](https://vitest.dev/) |
| Code Quality | Prettier, EditorConfig |

---

## 📂 Project Structure

```
socialApp/
├── public/              # Static assets
├── src/
│   ├── app/             # Components, services, routes
│   ├── environments/    # Environment configuration
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

- [Node.js](https://nodejs.org/) (a version supported by your Angular release; the LTS version is recommended)
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

The app connects to a backend API. Set the base URL in `src/environments/environment.ts`:

```ts
export const environment = {
  production: false,
  apiUrl: 'https://route-posts.routemisr.com',
};
```

---

## 🌍 Deployment

Build the app for production:

```bash
ng build
```

The production files are generated in the `dist/` folder.

The live demo is hosted on [Vercel](https://vercel.com/). The app can also be deployed for free on [Netlify](https://www.netlify.com/) or [Firebase Hosting](https://firebase.google.com/docs/hosting).

> **Note:** Because this is a single-page app, configure your host to redirect all routes to `index.html`. Otherwise, refreshing on a page like `/profile` will return a 404.

---

## 🗺 Roadmap

- [ ] Real-time notifications
- [ ] Direct messaging
- [ ] Dark mode
- [ ] Image uploads

 
---

## 📄 License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

## 👩‍💻 Author

**Shrouk Salah**

- GitHub: [@ShroukSalah](https://github.com/ShroukSalah)
- LinkedIn: [Shrouk Salah](https://www.linkedin.com/in/shrouk-salah-b3a955106/)

⭐ If you like this project, give it a star!
