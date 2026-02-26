import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/ART/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Art World',
        short_name: 'ArtWorld',
        description: 'Where the unreal becomes real',
        theme_color: '#064e3b',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/ART/',
        icons: [
          {
            src: '/ART/Aicon1.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/ART/Aicon2.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
})