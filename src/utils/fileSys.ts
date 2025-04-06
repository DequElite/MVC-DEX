import fs from 'fs/promises';
import path from 'path';
import type { NewProjectFilesType } from '../types/types';
import eslint from '../templates/eslint.init';
import packageJsonInit from '../templates/package.json.init';
import tsconfigJsonInit from '../templates/tsconfig.json.init';
import indexInit from '../templates/src/index.init';
import getControllerInit from '../templates/src/controller.init';
import ModelInit from '../templates/src/model.init';
import RouteInit from '../templates/src/route.init';
import ServiceInit from '../templates/src/service.init';

export async function createProjectStructure(projectPath: string, projectName: string) {
  const dirs: string[] = [
    'src/app',
    'src/configs',
    'src/middlewares',
    'src/tests',
    'src/utils',
  ];

  const files: NewProjectFilesType[] = [
    { path: 'eslint.config.mjs', content: eslint },
    { path: 'package.json', content: JSON.stringify(packageJsonInit(projectName), null, 2) },
    { path: 'README.md', content: '# Project README' },
    { path: 'tsconfig.json', content: JSON.stringify(tsconfigJsonInit(), null, 2) },
    { path: '.env', content: 'PORT=7173' },
    { path: '.gitignore', content: 'node_modules\n.env' },
    { path: 'src/index.ts', content: indexInit() },
  ];

  try {
    for (const dir of dirs) {
      await fs.mkdir(path.join(projectPath, dir), { recursive: true });
    }

    for (const file of files) {
      await fs.writeFile(path.join(projectPath, file.path), file.content);
    }

    console.log('✅ Project structure created successfully!');
  } catch (err) {
    console.error('❌ Error creating project structure:', err);
    process.exit(1);
  }
}

export async function createServiceFiles(serviceName: string, projectPath: string) {
  const serviceDir = path.join(projectPath, 'src/app', serviceName);

  const files: NewProjectFilesType[] = [
    { path: path.join(serviceDir, `${serviceName}.controller.ts`), content: getControllerInit(serviceName) },
    { path: path.join(serviceDir, `${serviceName}.model.ts`), content: ModelInit(serviceName) },
    { path: path.join(serviceDir, `${serviceName}.route.ts`), content: RouteInit(serviceName) },
    { path: path.join(serviceDir, `${serviceName}.service.ts`), content: ServiceInit(serviceName) },
  ];

  try {
    await fs.mkdir(serviceDir, { recursive: true });

    for (const file of files) {
      await fs.writeFile(file.path, file.content);
    }

    console.log(`✅ Service '${serviceName}' added successfully!`);
  } catch (err) {
    console.error('❌ Error adding service:', err);
    process.exit(1);
  }
}
