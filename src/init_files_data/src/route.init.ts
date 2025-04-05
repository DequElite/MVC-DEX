export default function RouteInit(serviceName: string): string {
    return `
        import { Router } from 'express';
        import ${serviceName}Service from '../services/${serviceName}.service';
        import ${serviceName}Model from '../models/${serviceName}.model';
        import ${serviceName}Controller from '../controllers/${serviceName}.controller';

        const ${serviceName}Route = Router();

        const model = new ${serviceName}Model();
        const service = new ${serviceName}Service(model); 
        const controller = new ${serviceName}Controller(service, model);

        ${serviceName}Route.get('/', controller.Main.bind(controller)); 

        export default ${serviceName}Route;
    `.trim();
}