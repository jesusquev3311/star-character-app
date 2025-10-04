# ⭐ Star Wars Fan Page

A **Star Wars fan page** built with **Lit** and **Vanilla JavaScript**, displaying characters from the Star Wars universe using the public [SWAPI](https://swapi.dev/) API.

Includes SPA-style navigation, a character search component, pagination, and a modern development workflow powered by **ESLint**, **Prettier**, and **Husky**.

---

## 🚀 Tech Stack

- ⚡ **Lit** – for building reusable Web Components.
- 🧱 **Vanilla JavaScript (ES Modules)** – no extra frameworks.
- 🛸 **SWAPI** – public Star Wars API for data.
- 🧭 **Vaadin Router** – lightweight SPA navigation.
- 🎨 **Pure CSS** – dark, cinematic Star Wars look.
- 🧰 **ESLint + Prettier + Husky + Commitlint** – clean, consistent, and enforced code style.

---

## 📂 Project Structure

```
src/
├── components/
|   └── search/
│       └── sw-search.js                    # Reusable search component
|       └── sw-search.style.js              # Search component style
│   
├── core/
│   ├── router/
│   │   └── app-router.js               # SPA routing configuration (Vaadin Router)
│   └── services/
│       └── swapi.service.js            # Handles API calls to the Star Wars API
├── layouts/
│   └── header/
│      └── ws-header.js                 # App header layout
|      └── sw-header.style.js           # Header component style
├── pages/
│   ├── character-detail/
│   │   └── sw-character-detail.js       # SW Character Detail Page
|   |   └── sw-character-detail.style.js # Page Style
│   ├── character/
│   |   └── sw-character-detail.js       # SW Character Detail Page
|   |   └── sw-character-detail.style.js # Page Style
│   ├── home/
│   |   └── sw-home.js                   # Root app component
│   └──main.js                           # App entry point
├── shared/
│   └── config.js                        # App shared const, utils, etc...
├── style/
│   └── style.css                        # App global style rules
│
└── main.js                              # App entry point
```

---

## 🧩 Setup & Installation

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/star-wars-fan-page.git
cd star-wars-fan-page
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Run the development server
If you’re using a local dev server (e.g. `vite`, `live-server`, or `@web/dev-server`):

```bash
npm run dev
```

> 💡 If you use `@web/dev-server`, make sure it’s installed:
> ```bash
> npm install --save-dev @web/dev-server
> ```

Then open:
```
http://localhost:port-given-by-vite
```

---

## 🧹 Linting & Formatting

### Check for linting issues
```bash
npm run lint
```

### Automatically fix linting issues
```bash
npm run lint --fix
```

### Format code using Prettier
```bash
npm run format
```

---

## 🪐 Commit Flow (Husky + Commitlint)

Every time you make a commit:
- **Husky** triggers **ESLint** and **Prettier** through `lint-staged` on modified files.
- **Commitlint** validates that your commit message follows the conventional format.

**Valid examples:**
```
feat(header): add language selector
fix(router): fix navigation between characters
chore: update dependencies
```

---

## 🛸 API Source

**[SWAPI – The Star Wars API](https://swapi.dev/)**  
Used to fetch character data with full pagination and search support.

**Example endpoints:**
```
GET https://swapi.dev/api/people/?page=1
GET https://swapi.dev/api/people/?search=luke
```

---

## 🧠 Features

- Responsive, dark-themed Star Wars design.  
- SPA navigation with **Vaadin Router** (no reloads).  
- Character search and pagination integrated with the API.  
- Custom loader and empty state handling.  
- Automatic linting, formatting, and commit validation.  

---

## 🧑‍💻 Available Scripts

| Command | Description |
|----------|--------------|
| `npm run dev` | Start local development server |
| `npm run build` | Compiles distribution bundle |
| `npm run lint` | Check code for ESLint errors |
| `npm run format` | Format code using Prettier |
| `npm run prepare` | Set up Husky Git hooks |

---

## 🌌 Author

**Jesús Quevedo**  
Frontend Engineer
📍 Spain  
💻 [GitHub](https://github.com/jesusquev3311)

---

## ⚖️ License

This project is licensed under the **MIT License**.  
You are free to use, modify, and distribute it with attribution.
