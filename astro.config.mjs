import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],

  // Configuración para despliegue en raíz del dominio
  base: '/',

  // URL del sitio para SEO y sitemap
  site: 'https://www.dynamics.unam.edu',

  // Optimizaciones de build
  build: {
    inlineStylesheets: 'auto',
  },

  // Optimizaciones de performance
  compressHTML: true,

  // Prefetch automático para navegación más rápida
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // Optimización de imágenes
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
    },
  },

  // Configuración de Vite para optimizaciones adicionales
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild', // Cambiado de terser a esbuild para mejor compatibilidad
    },
    ssr: {
      noExternal: ['@astrojs/tailwind'],
    },
  },
});