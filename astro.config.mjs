// @ts-check
import { defineConfig } from 'astro/config';


// https://astro.build/config
export default defineConfig({
  site: 'https://miniprogram.zgzlcc.top', // Root URL of site
  i18n: {
    locales: ['zh-cn', 'en'],
    defaultLocale: 'zh-cn',
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
});