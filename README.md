# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.




Notes:
Issues faced
- tailwindcss version,
    - i updated to version 4 while the teaching was in ver3 
    - at first i just continued with ver4 and realized quite alot
    of work have to be redone because it was all in ver3
    - had to downgrade tailwindcss to ver3 and shows error about peer dependency conflicts (This project is using React 19, but some of my packages only support up to React 18)
        - solution done: use --legacy-peer-deps
        - tells npm to ignore peer dependency conflicts
- had to manually create the tailwind and postcss config.cjs file

