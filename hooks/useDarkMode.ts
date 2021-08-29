import { useEffect, useState } from 'react'
import theme from 'common/theme'

function useDarkMode(enabled = true) {
  // Load current dark mode initial setting
  if (typeof window !== 'undefined') {
    enabled =
      window.localStorage.getItem('dark') === null
        ? enabled
        : window.localStorage.getItem('dark') === '1'
    console.log('initial dark mode enabled:', enabled)
  }

  // Tailwindcss dark mode switch
  const tailwindSwitch = (dark: boolean) => {
    const root = window.document.documentElement
    if (dark && !root.classList.contains('dark')) {
      root.classList.add('dark')
    } else if (!dark && root.classList.contains('dark')) {
      root.classList.remove('dark')
    }
  }

  // Material-UI dark mode switch
  const materialUISwitch = (dark: boolean) => {
    // defaultTheme.palette.mode = dark ? 'dark' : 'light'
    theme.currentTheme = dark ? theme.dark : theme.light
    console.log('theme change global:', theme)
  }

  const [dark, setDark] = useState(enabled)
  useEffect(() => {
    console.log('switch dark mode', dark)
    // Switch dark mode
    materialUISwitch(dark)
    tailwindSwitch(dark)

    // Save to localStorage
    if (typeof window !== 'undefined') {
      if (dark) {
        window.localStorage.setItem('dark', '1')
      } else {
        window.localStorage.setItem('dark', '0')
      }
    }
  }, [dark])

  return [dark, setDark]
}

export default useDarkMode
