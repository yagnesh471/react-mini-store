# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.
You can also try [the experimental native React Compiler support in plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md#rust-react-compiler) by using `compiler: true` in the plugin options instead of using the Babel plugin.

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.


# React Mini Store 🛒

A clean, multi-page single-page application (SPA) built with React and React Router DOM. This project demonstrates core React fundamentals, component architecture, client-side routing, and state management.

---

## 🚀 Features

- **Client-Side Routing:** Seamless page navigation using `react-router-dom` (`BrowserRouter`, `Routes`, `Route`, `Link`).
- **Reusable Components & Props:** Modular `ProductCard` component accepting dynamic data and callbacks.
- **State Management:** Interactive cart counter powered by React's `useState` hook.
- **Side Effects:** Dynamic browser tab updates utilizing the `useEffect` hook.
- **Fallback 404 Route:** Handles unmatched paths gracefully.

---

## 📁 Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx        # Navigation bar with router links
│   └── ProductCard.jsx   # Reusable product component
├── pages/
│   ├── Shop.jsx          # Catalog view with cart state
│   ├── Cart.jsx          # Shopping cart overview
│   └── Support.jsx       # Contact form & useEffect example
├── App.jsx               # Main router configuration
├── main.jsx              # DOM entry point (React 18+)
└── index.html            # HTML container