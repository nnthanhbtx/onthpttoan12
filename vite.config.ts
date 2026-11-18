import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, type Plugin } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import { transform as lightningTransform } from 'lightningcss';

/**
 * Unwrap CSS `@layer name { ... }` blocks and remove empty `@layer ...;` statements
 * so Safari 12-15.3 (iPhone 8, iPhone X, iPhone XS Max on iOS 13-15.3) applies all Tailwind styles cleanly.
 */
function unwrapCssLayers(css: string): string {
  let out = css.replace(/@layer\s+[a-zA-Z0-9_,\s-]+;/g, '');
  let result = '';
  let i = 0;

  while (i < out.length) {
    if (out.startsWith('@layer', i)) {
      const nextBrace = out.indexOf('{', i);
      const nextSemi = out.indexOf(';', i);
      if (nextBrace !== -1 && (nextSemi === -1 || nextBrace < nextSemi)) {
        // Walk balanced braces to unwrap @layer block
        let depth = 1;
        let j = nextBrace + 1;
        let inSingle = false;
        let inDouble = false;
        while (j < out.length && depth > 0) {
          const ch = out[j];
          const prev = j > 0 ? out[j - 1] : '';
          if (ch === "'" && !inDouble && prev !== '\\') inSingle = !inSingle;
          else if (ch === '"' && !inSingle && prev !== '\\') inDouble = !inDouble;
          else if (!inSingle && !inDouble) {
            if (ch === '{') depth++;
            else if (ch === '}') depth--;
          }
          j++;
        }
        if (depth === 0) {
          const inner = out.slice(nextBrace + 1, j - 1);
          result += unwrapCssLayers(inner);
          i = j;
          continue;
        }
      }
    }
    result += out[i];
    i++;
  }

  return result;
}

function safariLegacyCssPlugin(): Plugin {
  const downlevelCss = (rawCss: string, filename: string, minify: boolean): string => {
    try {
      const unwrapped = unwrapCssLayers(rawCss);
      const transformed = lightningTransform({
        filename,
        code: Buffer.from(unwrapped),
        minify,
        targets: { safari: 13 << 16 },
        errorRecovery: true,
      });
      return Buffer.from(transformed.code).toString('utf8');
    } catch {
      return rawCss;
    }
  };

  return {
    name: 'safari-legacy-css-compat',
    enforce: 'post',
    transform(code, id) {
      if (id.endsWith('.css') && !id.includes('node_modules')) {
        return {
          code: downlevelCss(code, id, false),
          map: null,
        };
      }
    },
    generateBundle(_options, bundle) {
      for (const fileName of Object.keys(bundle)) {
        const asset = bundle[fileName];
        if (asset.type === 'asset' && fileName.endsWith('.css')) {
          const raw =
            typeof asset.source === 'string'
              ? asset.source
              : Buffer.from(asset.source).toString('utf8');
          asset.source = downlevelCss(raw, fileName, true);
        }
      }
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      safariLegacyCssPlugin(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: [
          'icon.svg',
          'apple-touch-icon.png',
          'pwa-192x192.png',
          'pwa-512x512.png',
          'pwa-maskable-512x512.png',
        ],
        devOptions: {
          enabled: false,
        },
        manifest: {
          id: '/',
          name: 'ÔN THI THPT 2027 - Luyện Đề Môn Toán',
          short_name: 'THPT 2027',
          description:
            'Hệ thống luyện đề thi Tốt nghiệp THPT Môn Toán 2027 chuyên nghiệp chuẩn cấu trúc mới, hỗ trợ làm bài offline không cần WiFi.',
          theme_color: '#060d1f',
          background_color: '#060d1f',
          display: 'standalone',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          maximumFileSizeToCacheInBytes: 10 * 1024 * 1024,
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2,ttf,eot,webp,json}'],
          globIgnores: ['**/assets/aistudio/**'],
          navigateFallback: 'index.html',
          cleanupOutdatedCaches: true,
          clientsClaim: true,
          skipWaiting: true,
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
      }),
    ],
    build: {
      target: ['es2019', 'safari13', 'chrome87'],
      cssTarget: ['safari13', 'chrome87'],
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'katex-vendor': ['katex'],
            'lucide-vendor': ['lucide-react'],
          },
        },
      },
    },
    optimizeDeps: {
      esbuildOptions: {
        target: 'es2019',
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
