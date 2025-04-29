import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    // Define @ like de source folder
    resolve: {
        alias: {
          '@': path.resolve(__dirname, './src'),
        },
    },
    css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
            //Definition of global variables -> Now, the file can be use for all the components
            additionalData: `@import "@/styles/variables.less"; @import "@/styles/mixins.less";`
          }
        }
  }
});