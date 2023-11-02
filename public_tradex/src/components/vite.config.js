import { defineConfig } from 'vite';
import ViteStyleImport from 'vite-plugin-style-import';

export default defineConfig({
  // ... your other Vite config settings

  plugins: [
    ViteStyleImport({
      libs: [
        {
          libraryName: 'react-loader-spinner',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `react-loader-spinner/dist/loader/css/${name}.css`;
          },
        },
      ],
    }),
  ],
});
