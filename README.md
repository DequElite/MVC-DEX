# MVC - DEX: **A New Era of Architecture**

### MVC-based Architecture for Back-End Applications on Node.js

The **DEX architecture** is a modern, scalable, and maintainable architecture for developing back-end applications with Node.js and TypeScript. It leverages the powerful **MVC (Model-View-Controller)** pattern, helping you structure your project efficiently and making it easier to manage large-scale applications.

---

### Key Principles of DEX:
1. **Data**: Models that define and handle data structures.
2. **Entity**: Services that encapsulate business logic.
3. **Execution**: Controllers and Routes that manage incoming requests and responses.

---

### Core Technologies Used in DEX:
- **Node.js** – for the server-side runtime environment.
- **Express.js** – the web framework for handling routing and HTTP requests.
- **ESLint** – to enforce coding standards and improve code quality.
- **TypeScript** – a statically-typed language that provides enhanced tooling and avoids common JavaScript pitfalls.

---

### Why DEX?

- **Simplicity**: DEX was designed to streamline application creation, reducing setup time by automating key configurations.
- **Scalability**: With its modular structure and clear separation of concerns, DEX supports growing systems and teams.
- **Maintainability**: DEX helps you build clean and organized codebases that are easy to maintain in the long run.
- **Clear Separation**: The **MVC** pattern ensures that each part of your application (data, logic, and presentation) is logically separated and easier to scale.

---

## Quick Start: Setting Up a DEX Project

### 1. Install `mvc-dex-cli` for Easy Architecture Management
This tool will help you quickly set up and manage the DEX architecture for your Node.js projects.

```bash
npm i -g mvc-dex-cli
```

---

### 2. Create a New DEX Project
Use the CLI to initialize a new project based on the DEX architecture.

```bash
npx mvc-dex-cli init myDexProject
```

This command will create the following directory structure:

```
.
├── src
│   ├── app
│   ├── configs
│   ├── index.ts
│   ├── middlewares
│   ├── tests
│   └── utils
├── eslint.config.mjs
├── package.json
├── README.md
└── tsconfig.json
```

---

### 3. Install Required Dependencies
Now, install the necessary npm modules.

```bash
npm i
```

---

### 4. Add System Components
You can now add new components to your system, such as models, controllers, and services. For example, to add a **users** component, run:

```bash
npx mvc-dex-cli add users
```

This will create the following files for your **users** component:
- `users.controller.ts`
- `users.model.ts`
- `users.service.ts`
- `users.route.ts`

---

### 5. Running the Project
To run your project in development mode, use:

```bash
npm run dev
```

This will start the project using `nodemon` to automatically restart the server during development.

---

### 6. Building the Project
To build your project for production, run:

```bash
tsc
```

This will compile your TypeScript code to JavaScript, preparing your project for deployment.

---

### 7. Start Building with Scalable Architecture!
Now that your project is set up, you can start developing your application with a clean, modular, and scalable architecture.

With DEX, you can easily add new features, grow your application, and ensure that your code remains clean and maintainable as your project evolves.

---

## Why Choose DEX?

DEX is designed to make the development of scalable and maintainable Node.js applications easier. Here’s why you should consider using it:

- **Clean Structure**: DEX follows the MVC architecture, providing a clean and understandable structure that anyone can follow.
- **Extensibility**: With its modular approach, you can easily add new features and services as your project grows.
- **TypeScript-First**: Leveraging TypeScript from the beginning ensures you get the benefits of static typing, better tooling, and fewer bugs in production.
- **Automated CLI**: The `mvc-dex-cli` tool automates tedious tasks, helping you stay focused on building features rather than managing configuration.
- **Future-Proof**: DEX helps you design applications that can scale, handle more traffic, and remain easy to maintain as your team grows.

---

## License
MIT License. See [LICENSE](./LICENSE) file for details.

---

### More Information

Feel free to refer to the project’s documentation for detailed guides on how to structure your controllers, models, services, and routes. You can also dive into additional features like authentication, testing, and deployment to make your project production-ready.

---

Let's improve the back-end development world, one scalable architecture at a time!

### New in v1.0.4
* Improved CLI: Added commander library for flexible and convenient use
* New structure: service files are located in a separate folder in the app folder
* Improved CLI typing, file splitting
* Fixed bugs with code structure and formatting