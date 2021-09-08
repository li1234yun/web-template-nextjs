import { createTheme } from '@mui/material'

const lightTheme = createTheme({
  shape: {
    borderRadius: 1,
  },
})
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const theme = {
  currentTheme: lightTheme,
  light: lightTheme,
  dark: darkTheme,
}
export default theme
