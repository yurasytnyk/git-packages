import { defineConfig } from 'vite'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [dts({ rollupTypes: false })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'GitPackage',
      fileName: 'git-package',
    },
  },
})
