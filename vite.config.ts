import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'LazyPage1',
              test: /01-lazyload\/pages\/LazyPage1/,
            },
            {
              name: 'LazyPage2',
              test: /01-lazyload\/pages\/LazyPage2/,
            },
            {
              name: 'LazyPage3',
              test: /01-lazyload\/pages\/LazyPage3/,
            },
          ],
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
})
