"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = indexInit;
function indexInit() {
    return `
  import express, { Express } from 'express';
  
  export const app: Express = express();
  const PORT = process.env.PORT || 7003;
  
  // there init your routes
  // for example:
  // import userRoute from './app/routes/user.route';
  // app.use(userRoute);
  
  app.listen(PORT, () => {
    console.log(\`🚀 Server was started on port \${PORT}\`);
  });
    `.trim();
}
