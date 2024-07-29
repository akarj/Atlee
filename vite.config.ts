import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@pages': resolve(__dirname, 'src/pages'),
        },
    },
    server: {
        port: 3000,
    },
    envPrefix: 'TS_',
});
