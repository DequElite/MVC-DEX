export default function tsconfigJsonInit(){
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