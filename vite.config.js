import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { crx } from '@crxjs/vite-plugin'
import manifest from './src/manifest.js' // Node 14 & 16
// import manifest from './src/manifest.json' assert { type: 'json' } // Node >=17

export default defineConfig({
	resolve: {
		alias: {
			'@': '/src/',
		},
	},
	build: {
		terserOptions: {
			compress: {
				drop_console: true,
			},
		}, // 生存环境移除console、
	},
	plugins: [vue(), crx({ manifest })],
})
