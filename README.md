# React + Vite

## Contact form

The contact form sends submissions through Formspree. Create a form in your
[Formspree dashboard](https://formspree.io/) and set its endpoint in a local
`.env.local` file:

```text
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
```

You can start with `.env.example`. Restart the Vite development server after
changing the endpoint, and configure the same environment variable in your
deployment settings. Formspree delivers submissions to the email address
configured for that form.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
