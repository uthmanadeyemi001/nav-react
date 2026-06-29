import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
plugins: [
react(),
VitePWA({
registerType: 'autoUpdate',
manifest: {
name: 'Quotes App',
short_name: 'Quotes',
description: 'A simple quotes app',
theme_color: '#7F77DD',
background_color: '#ffffff',
display: 'standalone',
icons: [
{ src: '/pwa-192x192.png', sizes: '192x192', type: 'image/png' },
{ src: '/pwa-512x512.png', sizes: '512x512', type: 'image/png' }
]
}
})
]
} )
