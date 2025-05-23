import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      include: ['**/*.ts'],
      exclude: ['**/types.ts', '**/*.d.ts', '.playground/**/*.config.ts']
    },
    passWithNoTests: true
  }
})
