import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import { ThemeProvider } from './context/theme'

const App = () => {

  const [themeMode, setThemeMode] = useState("light");

  const lightTheme = () => {
    setThemeMode("light");
  }

  const darkTheme = () => {
    setThemeMode("dark");
  }

  // actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode])

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className='h-screen dark:bg-slate-200 bg-slate-700 flex items-center justify-center'>
        <Card />
      </div>
    </ThemeProvider>
  )
}

export default App