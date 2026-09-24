import { defineConfig, globalIgnores } from 'eslint/config';
import biome from 'eslint-config-biome';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import jsxA11y from 'eslint-plugin-jsx-a11y';

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    'coverage/**',
    'playwright-report/**',
    'test-results/**',
  ]),

  // Disables ESLint rules that overlap with Biome (formatting, general lint).
  biome,

  // Accessibility is owned by jsx-a11y, not Biome (Biome's a11y preset is "none").
  // Must come AFTER eslint-config-biome, which otherwise turns off 33 jsx-a11y
  // rules and leaves neither tool checking them. Plugin is registered by eslint-config-next.
  {
    rules: {
      ...jsxA11y.flatConfigs.recommended.rules,
    },
  },
]);

export default eslintConfig;
