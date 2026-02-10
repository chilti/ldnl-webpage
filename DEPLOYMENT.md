# Instrucciones de Deployment

## Error Actual
```
Cannot find module '@astrojs/sitemap'
```

## Solución

### En el servidor de producción, ejecuta:

```bash
cd /mnt/Archivos/ldnl-webpage
npm install @astrojs/sitemap
npm run build
```

## Alternativa: Instalar todas las dependencias

Si hay más dependencias faltantes:

```bash
cd /mnt/Archivos/ldnl-webpage
npm install
npm run build
```

## Verificar package.json

Asegúrate de que `package.json` incluya:

```json
{
  "dependencies": {
    "@astrojs/sitemap": "^3.0.0",
    "@astrojs/tailwind": "^5.0.0",
    "astro": "^4.0.0",
    "tailwindcss": "^3.0.0"
  }
}
```

## Proceso Completo de Deployment

1. **Pull los cambios**:
   ```bash
   cd /mnt/Archivos/ldnl-webpage
   git pull origin main
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Build**:
   ```bash
   npm run build
   ```

4. **Verificar build**:
   ```bash
   ls -la dist/
   ```

## Notas Importantes

- El sitemap se generará automáticamente en `dist/sitemap-index.xml`
- El archivo `robots.txt` se copiará a `dist/robots.txt`
- Todos los assets se optimizarán durante el build
- El LiteYouTube component mejorará significativamente la performance

## Troubleshooting

### Si el build falla por memoria:
```bash
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

### Si hay problemas con permisos:
```bash
sudo chown -R $USER:$USER /mnt/Archivos/ldnl-webpage
```

### Limpiar cache y reinstalar:
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Verificación Post-Deployment

1. Verificar sitemap: `https://www.dynamics.unam.edu/sitemap-index.xml`
2. Verificar robots.txt: `https://www.dynamics.unam.edu/robots.txt`
3. Probar lazy loading de videos en la home
4. Verificar meta tags con: https://www.opengraph.xyz/
5. Probar performance con: https://pagespeed.web.dev/

## Performance Esperada

- **Lighthouse Score**: >90 en todas las métricas
- **Tiempo de carga inicial**: <2 segundos
- **LCP (Largest Contentful Paint)**: <2.5s
- **CLS (Cumulative Layout Shift)**: <0.1
