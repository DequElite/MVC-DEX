export default function packageJsonInit(projectName: string) {
    return {
        name: projectName,
        version: '1.0.0',
        main: 'index.js',
        scripts: {
            dev: 'npx nodemon --watch src --ext ts --exec npx tsx src/index.ts',
        },
        author: '',
        license: 'ISC',
        description: '',
        dependencies: {
            'body-parser': '^1.20.3',
            'cookie-parser': '^1.4.7',
            cors: '^2.8.5',
            dotenv: '^16.4.7',
            express: '^4.21.2',
            nodemon: '^3.1.9',
        },
        devDependencies: {
            '@eslint/js': '^9.24.0',
            '@types/bcrypt': '^5.0.2',
            '@types/cookie-parser': '^1.4.8',
            '@types/cors': '^2.8.17',
            '@types/express': '^5.0.0',
            '@types/node': '^22.13.4',
            '@typescript-eslint/eslint-plugin': '^8.29.0',
            '@typescript-eslint/parser': '^8.29.0',
            eslint: '^9.24.0',
            globals: '^16.0.0',
            'ts-loader': '^9.5.2',
            'ts-node': '^10.9.2',
            tsc: '^2.0.4',
            typescript: '^5.7.3',
            'typescript-eslint': '^8.29.0',
        },
    };
}