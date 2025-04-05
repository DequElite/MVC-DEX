"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ServiceInit;
function ServiceInit(serviceName) {
    return `
    import ${serviceName}Model from '../models/${serviceName}.model';
    
    class ${serviceName}Service {
        private model: ${serviceName}Model;
    
        constructor(model: ${serviceName}Model) {
        this.model = model;
        }
    
        public async doSomething() {
        return '${serviceName} service doing something!';
        }
    }
    
    export default ${serviceName}Service;
    `.trim();
}
