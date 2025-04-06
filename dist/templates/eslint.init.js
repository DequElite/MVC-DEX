"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const eslint = `
    import { defineConfig } from 'eslint/config';
    import globals from 'globals';
    import js from '@eslint/js';
    import tseslint from 'typescript-eslint';


    export default defineConfig([
    { 
        files: ['**/*.{js,mjs,cjs,ts}'],
        rules: {
        'semi': ['error', 'always'],
        'quotes': ['error', 'single'],
        'eqeqeq': ['error', 'always'],
        }
    },
    { 
        files: ['**/*.{js,mjs,cjs,ts}'], 
        languageOptions: { globals: globals.browser } 
    },
    { 
        files: ['**/*.{js,mjs,cjs,ts}'], 
        plugins: { js }, 
        extends: ['js/recommended'] 
    },
    tseslint.configs.recommended,
    ]);
`.trim();
exports.default = eslint;
