#!/usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const eslint_init_1 = __importDefault(require("./init_files_data/eslint.init"));
const package_json_init_1 = __importDefault(require("./init_files_data/package.json.init"));
const tsconfig_json_init_1 = __importDefault(require("./init_files_data/tsconfig.json.init"));
const controller_init_1 = __importDefault(require("./init_files_data/src/controller.init"));
const model_init_1 = __importDefault(require("./init_files_data/src/model.init"));
const route_init_1 = __importDefault(require("./init_files_data/src/route.init"));
const service_init_1 = __importDefault(require("./init_files_data/src/service.init"));
const index_init_1 = __importDefault(require("./init_files_data/src/index.init"));
function createProjectStructure(projectPath, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const dirs = [
            'src/app/controllers',
            'src/app/models',
            'src/app/routes',
            'src/app/services',
            'src/configs',
            'src/middlewares',
            'src/tests',
            'src/utils',
        ];
        const files = [
            { path: 'eslint.config.mjs', content: eslint_init_1.default },
            { path: 'package.json', content: JSON.stringify((0, package_json_init_1.default)(projectName), null, 2) },
            { path: 'README.md', content: '# Project README' },
            { path: 'tsconfig.json', content: JSON.stringify((0, tsconfig_json_init_1.default)(), null, 2) },
            { path: '.env', content: 'PORT=7173' },
            { path: '.gitignore', content: 'node_modules \n .env' },
            { path: 'src/index.ts', content: (0, index_init_1.default)() }
        ];
        try {
            for (const dir of dirs) {
                yield promises_1.default.mkdir(path_1.default.join(projectPath, dir), { recursive: true });
            }
            for (const file of files) {
                yield promises_1.default.writeFile(path_1.default.join(projectPath, file.path), file.content);
            }
            console.log('Project structure created successfully! Enter command npm i to install modules');
        }
        catch (err) {
            console.error('Error creating project structure:', err);
            process.exit(1);
        }
    });
}
function addService(serviceName, projectPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const files = [
                { path: path_1.default.join(projectPath, 'src/app/controllers', `${serviceName}.controller.ts`), content: (0, controller_init_1.default)(serviceName) },
                { path: path_1.default.join(projectPath, 'src/app/models', `${serviceName}.model.ts`), content: (0, model_init_1.default)(serviceName) },
                { path: path_1.default.join(projectPath, 'src/app/routes', `${serviceName}.route.ts`), content: (0, route_init_1.default)(serviceName) },
                { path: path_1.default.join(projectPath, 'src/app/services', `${serviceName}.service.ts`), content: (0, service_init_1.default)(serviceName) },
            ];
            for (const file of files) {
                yield promises_1.default.writeFile(file.path, file.content);
            }
            console.log(`Service '${serviceName}' added successfully!`);
        }
        catch (err) {
            console.error('Error adding service:', err);
            process.exit(1);
        }
    });
}
const args = process.argv.slice(2);
if (args.length === 0) {
    console.log('Error: you need to pass the project name via the init <projectname> command');
    process.exit(1);
}
const command = args[0];
let projectName;
let newServiceName;
if (command === 'init') {
    projectName = args[1];
    if (!projectName) {
        console.log('Error: you need to pass the project name via the init <projectname> command');
        process.exit(1);
    }
    const projectPath = path_1.default.join(process.cwd(), projectName);
    createProjectStructure(projectPath, projectName);
}
else if (command === 'add') {
    newServiceName = args[1];
    if (!newServiceName) {
        console.log('Error: you need to pass the service name via the add <servicename> command');
        process.exit(1);
    }
    const projectPath = process.cwd();
    addService(newServiceName, projectPath);
}
else if (command === 'version') {
    console.log('1.0.3');
    process.exit(1);
}
