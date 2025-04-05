export default function getControllerInit(serviceName: string): string {
    return `
        import { Request, Response } from 'express';
        import ${serviceName}Service from '../services/${serviceName}.service';
        import ${serviceName}Model from '../models/${serviceName}.model';

        class ${serviceName}Controller {
            private service: ${serviceName}Service;
            private model: ${serviceName}Model;

            constructor(service: ${serviceName}Service, model: ${serviceName}Model) {
                this.service = service;
                this.model = model;
            }

            public async Main(req: Request, res: Response) {
                res.json({message:'Main Controller Function'});
            }
        }

        export default ${serviceName}Controller;
    `.trim();
}