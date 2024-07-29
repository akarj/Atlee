import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@pages': '/src/pages',
		},
	},
	server: {
		port: 3000,
	},
	envPrefix: 'TS_',
	// Add this line to specify the tsconfig file
	// tsconfig: './tsconfig.json',
});
