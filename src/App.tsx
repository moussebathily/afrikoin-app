import React from 'react'

export default function App() {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  const styles: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: isDark ? '#121212' : '#ffffff',
    color: isDark ? '#ffffff' : '#000000',
    padding: 20
  }

  return (
    <div style={styles}>
      <h1>Bienvenue sur AfriKoin 👋</h1>
      <p>Mode : {isDark ? 'Sombre 🌙' : 'Clair ☀️'}</p>
    </div>
  )
}
