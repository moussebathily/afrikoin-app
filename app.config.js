import 'dotenv/config'

export default {
  expo: {
    name: 'AfriKoin',
    slug: 'afrikoin',
    version: '1.2.2',
    orientation: 'portrait',
    icon: './assets/icon.png',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff'
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff'
      },
      package: 'com.afrikoin.myapplication'
    },
    androidStatusBar: {
      translucent: true,
      backgroundColor: 'transparent',
      barStyle: 'light-content'
    },
    web: {
      favicon: './assets/favicon.png'
    }
  }
}
