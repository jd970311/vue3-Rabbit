import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver(),
      // 自动导入图标组件
      IconsResolver({
        prefix: 'Icon',
      }),],
      imports: ['vue']
    }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: "sass",
      }),
      // 自动注册图标组件
      IconsResolver({
        enabledCollections: ['ep'],
      }),
      ],
    }),
    Icons({
      // compiler: 'vue3',
      autoInstall: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
         @use "@/styles/element/index.scss" as *;
         @use "@/styles/var.scss" as *;
         `,
      },
    },
  },
})
