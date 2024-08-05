import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   esbuild: {
//     loader: {
//       '.js': 'jsx', // Make sure .js files are treated as JSX
//     },
//   },
// });


// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { createEsbuildPlugin } from 'vite-plugin-esbuild';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [
//     react(),
//     createEsbuildPlugin({
//       loader: { '.js': 'jsx', '.ts': 'tsx' } // Specify loaders for file extensions
//     })
//   ]
// });
