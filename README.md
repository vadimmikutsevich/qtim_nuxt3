# QTIM Blog – Nuxt 3 Test Task

This project is a test assignment implemented using **Nuxt 3** and **TypeScript**. It is a simple blog application that demonstrates working with layouts, dynamic routing, API integration, pagination, and responsive UI.

## 🛠 Stack

- [Nuxt 3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Composition API
- Native Fetch API (no Axios)
- Optional: `@nuxt/image` for optimization

## 📦 Features

- Blog layout based on Figma design
- Responsive article grid
- Dynamic routing: `/blog/[id]`
- Safe type guards for validating API data
- Custom pagination (5 buttons per group + arrows)
- Hover effects and reveal animations
- Fallback placeholder when an image fails to load
- Fully reusable components: `Typography`, `Pagination`, `ArticleCard`, etc.
- Font: TT Commons (locally hosted)

## 📦 Installation

```bash
npm install
# or
yarn install
# or
pnpm install
```

📡 API Used
All Articles
https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/

Single Article by ID
https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/:id
