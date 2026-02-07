import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Configuración para despliegue en raíz del dominio
  base: '/',

  // URL del sitio para SEO y sitemap
  // Actualiza con tu dominio real
  site: 'https://www.dynamics.unam.edu',
});