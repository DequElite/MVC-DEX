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
            'body-parser': '^latest',
            'cookie-parser': '^latest',
            cors: '^latest',
            dotenv: '^latest',
            express: '^latest',
            nodemon: '^latest',
        },
        devDependencies: {
            '@eslint/js': '^latest',
            '@types/bcrypt': '^latest',
            '@types/cookie-parser': '^latest',
            '@types/cors': '^latest',
            '@types/express': '^latest',
            '@types/node': '^latest',
            '@typescript-eslint/eslint-plugin': '^latest',
            '@typescript-eslint/parser': '^latest',
            eslint: '^latest',
            globals: '^latest',
            'ts-loader': '^latest',
            'ts-node': '^latest',
            tsc: '^latest',
            typescript: '^latest',
            'typescript-eslint': '^latest',
        },
    };
}
