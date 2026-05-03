import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      // babel: {
      //   plugins: [
      //     [
      //       '@locator/babel-jsx/dist',
      //       {
      //         env: 'development',
      //       },
      //     ],
      //   ],
      // },
    }),
  ],
  server: {
    port: 5173,
    proxy: {
      // All /api/* and /health requests → Express backend
      '/api': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
      '/health': {
        target: 'http://localhost:5005',
        changeOrigin: true,
      },
    },
  },
})
