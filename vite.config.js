import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    outDir: 'dist',
    targets: 'es2021',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => {
        const formatMap = {
          es: 'mjs',
          cjs: 'cjs',
        }
        return `index.${formatMap[format]}`
      },
    },
  },
  plugins: [dts({
    rollupTypes: true,
    exclude: ['node_modules/**', '**/*.test.ts', '**/*.spec.ts', '**/__test__/**'],
  })],
})
