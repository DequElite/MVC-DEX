"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ModelInit;
function ModelInit(serviceName) {
    return `
class ${serviceName}Model {
  constructor() {
    // Init your model here
  }
}
  
export default ${serviceName}Model;
    `.trim();
}
