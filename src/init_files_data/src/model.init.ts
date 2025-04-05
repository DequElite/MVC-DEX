export default function ModelInit(serviceName: string): string {
    return `
  class ${serviceName}Model {
    constructor() {
      // Init your model here
    }
  }
  
  export default ${serviceName}Model;
    `.trim();
  }
  