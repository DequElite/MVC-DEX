"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = tsconfigJsonInit;
function tsconfigJsonInit() {
    return {
        compilerOptions: {
            target: 'ES6',
            module: 'commonjs',
            strict: true,
            esModuleInterop: true,
            skipLibCheck: true,
            forceConsistentCasingInFileNames: true,
            outDir: './dist',
            rootDir: './src',
        },
    };
}
