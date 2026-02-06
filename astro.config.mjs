import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // Para despliegue en subdirectorio (ej: /nuevositio/)
  // Cambia esto según tu necesidad:
  // - Para producción en raíz: base: '/'
  // - Para pruebas en subdirectorio: base: '/nuevositio/'
  base: process.env.PUBLIC_BASE_PATH || '/',

  // Opcional: configurar site para SEO
  site: 'https://tu-dominio.com',
});