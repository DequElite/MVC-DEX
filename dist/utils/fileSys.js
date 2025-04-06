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
exports.createProjectStructure = createProjectStructure;
exports.createServiceFiles = createServiceFiles;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const eslint_init_1 = __importDefault(require("../templates/eslint.init"));
const package_json_init_1 = __importDefault(require("../templates/package.json.init"));
const tsconfig_json_init_1 = __importDefault(require("../templates/tsconfig.json.init"));
const index_init_1 = __importDefault(require("../templates/src/index.init"));
const controller_init_1 = __importDefault(require("../templates/src/controller.init"));
const model_init_1 = __importDefault(require("../templates/src/model.init"));
const route_init_1 = __importDefault(require("../templates/src/route.init"));
const service_init_1 = __importDefault(require("../templates/src/service.init"));
function createProjectStructure(projectPath, projectName) {
    return __awaiter(this, void 0, void 0, function* () {
        const dirs = [
            'src/app',
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
            { path: '.gitignore', content: 'node_modules\n.env' },
            { path: 'src/index.ts', content: (0, index_init_1.default)() },
        ];
        try {
            for (const dir of dirs) {
                yield promises_1.default.mkdir(path_1.default.join(projectPath, dir), { recursive: true });
            }
            for (const file of files) {
                yield promises_1.default.writeFile(path_1.default.join(projectPath, file.path), file.content);
            }
            console.log('✅ Project structure created successfully!');
        }
        catch (err) {
            console.error('❌ Error creating project structure:', err);
            process.exit(1);
        }
    });
}
function createServiceFiles(serviceName, projectPath) {
    return __awaiter(this, void 0, void 0, function* () {
        const serviceDir = path_1.default.join(projectPath, 'src/app', serviceName);
        const files = [
            { path: path_1.default.join(serviceDir, `${serviceName}.controller.ts`), content: (0, controller_init_1.default)(serviceName) },
            { path: path_1.default.join(serviceDir, `${serviceName}.model.ts`), content: (0, model_init_1.default)(serviceName) },
            { path: path_1.default.join(serviceDir, `${serviceName}.route.ts`), content: (0, route_init_1.default)(serviceName) },
            { path: path_1.default.join(serviceDir, `${serviceName}.service.ts`), content: (0, service_init_1.default)(serviceName) },
        ];
        try {
            yield promises_1.default.mkdir(serviceDir, { recursive: true });
            for (const file of files) {
                yield promises_1.default.writeFile(file.path, file.content);
            }
            console.log(`✅ Service '${serviceName}' added successfully!`);
        }
        catch (err) {
            console.error('❌ Error adding service:', err);
            process.exit(1);
        }
    });
}
