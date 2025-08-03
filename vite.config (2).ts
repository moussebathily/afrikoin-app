import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Configuration Vite pour React + Expo Web
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'react-native': 'react-native-web',
      'expo-constants': 'expo-constants/build/index.web.js'
    }
  },
  define: {
    global: {},
    __DEV__: process.env.NODE_ENV !== 'production'
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true
  },
  optimizeDeps: {
    include: ['react-native-web', 'expo', 'expo-status-bar']
  }
})
