#!/usr/bin/env node
import fs from 'fs/promises'; 
import path from 'path';
import eslint from './init_files_data/eslint.init';
import packageJsonInit from './init_files_data/package.json.init';
import tsconfigJsonInit from './init_files_data/tsconfig.json.init';
import getControllerInit from './init_files_data/src/controller.init';
import ModelInit from './init_files_data/src/model.init';
import RouteInit from './init_files_data/src/route.init';
import ServiceInit from './init_files_data/src/service.init';
import { NewProjectFilesType } from './types/types';
import indexInit from './init_files_data/src/index.init';

async function createProjectStructure(projectPath: string, projectName: string) {
    const dirs: string[] = [
        'src/app/controllers',
        'src/app/models',
        'src/app/routes',
        'src/app/services',
        'src/configs',
        'src/middlewares',
        'src/tests',
        'src/utils',
    ];

    const files: NewProjectFilesType[] = [
        { path: 'eslint.config.mjs', content: eslint },
        { path: 'package.json', content: JSON.stringify(packageJsonInit(projectName), null, 2)},
        { path: 'README.md', content: '# Project README' },
        { path: 'tsconfig.json', content: JSON.stringify(tsconfigJsonInit(),null, 2)},
        { path: '.env', content: 'PORT=7173' },
        { path: '.gitignore', content: 'node_modules \n .env' },
        { path: 'src/index.ts', content: indexInit() }
    ];

    try {
        for (const dir of dirs) {
            await fs.mkdir(path.join(projectPath, dir), { recursive: true });
        }

        for (const file of files) {
            await fs.writeFile(path.join(projectPath, file.path), file.content);
        }

        console.log('Project structure created successfully! Enter command npm i to install modules');
    } catch (err) {
        console.error('Error creating project structure:', err);
        process.exit(1);
    }
}

async function addService(serviceName: string, projectPath: string) {

    try {
        const files: NewProjectFilesType[] = [
            { path: path.join(projectPath, 'src/app/controllers', `${serviceName}.controller.ts`), content: getControllerInit(serviceName) },
            { path: path.join(projectPath, 'src/app/models', `${serviceName}.model.ts`), content: ModelInit(serviceName) },
            { path: path.join(projectPath, 'src/app/routes', `${serviceName}.route.ts`), content: RouteInit(serviceName) },
            { path: path.join(projectPath, 'src/app/services', `${serviceName}.service.ts`), content: ServiceInit(serviceName) },
        ];

        for (const file of files) {
            await fs.writeFile(file.path, file.content);
        }

        console.log(`Service '${serviceName}' added successfully!`);
    } catch (err) {
        console.error('Error adding service:', err);
        process.exit(1);
    }
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

    const projectPath = path.join(process.cwd(), projectName);

    createProjectStructure(projectPath, projectName);

} else if (command === 'add') {
    newServiceName = args[1];

    if (!newServiceName) {
        console.log('Error: you need to pass the service name via the add <servicename> command');
        process.exit(1);
    }

    const projectPath = process.cwd(); 

    addService(newServiceName, projectPath);
} else if (command === 'version') {
    console.log('1.0.3');
    process.exit(1);
}
