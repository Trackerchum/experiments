import { defineConfig } from 'tsup';
import { BuildOptions } from 'esbuild';

export default defineConfig((options) => {
    const dev = options.env?.['NODE_ENV'] === 'dev';
    return {
        entry: ['src/index.ts'],
        outDir: undefined,
        esbuildOptions: (options: BuildOptions) => {
            options.outfile = 'build/server.js';
        },
        sourcemap: true,
        watch: dev,
        noExternal: [/(.*)/],
    };
});
