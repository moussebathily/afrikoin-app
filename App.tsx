import React from 'react'
import { Text, View, useColorScheme, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const colorScheme = useColorScheme()
  const isDark = colorScheme === 'dark'

  return (
    <SafeAreaView style={[styles.container, isDark ? styles.dark : styles.light]}>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      <View>
        <Text style={[styles.text, isDark ? styles.textDark : styles.textLight]}>
          Bienvenue sur AfriKoin 👋
        </Text>
        <Text style={[styles.text, isDark ? styles.textDark : styles.textLight]}>
          Mode : {isDark ? 'Sombre 🌙' : 'Clair ☀️'}
        </Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  light: {
    backgroundColor: '#ffffff'
  },
  dark: {
    backgroundColor: '#121212'
  },
  text: {
    fontSize: 18,
    marginBottom: 10
  },
  textLight: {
    color: '#000000'
  },
  textDark: {
    color: '#ffffff'
  }
})
