import eslint from '@eslint/js';
import angular from 'angular-eslint';
import 'eslint-plugin-only-warn';
import { defineConfig } from 'eslint/config';
import typescript from 'typescript-eslint';

export default defineConfig(
  eslint.configs.recommended,
  typescript.configs.recommended,
  angular.configs.tsRecommended,
  {
    files: ['*.html'],
    extends: [
      angular.configs.templateRecommended,
      angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/directive-selector': [
        'error',
        { prefix: 'app', style: 'camelCase' },
      ],
      '@angular-eslint/component-selector': [
        'error',
        { type: 'element', prefix: 'app', style: 'kebab-case' },
      ],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          ignoredMethodNames: ['ngOnInit', 'ngOnChanges'],
          overrides: { constructors: 'off', properties: 'no-public' },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        { selector: 'enumMember', format: ['PascalCase'] },
      ],
      '@typescript-eslint/no-inferrable-types': 'error',
      '@typescript-eslint/no-useless-constructor': 'error',
    },
  },
);
