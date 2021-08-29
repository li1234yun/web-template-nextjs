import { createTheme } from '@material-ui/core'

const lightTheme = createTheme({
  shape: {
    borderRadius: '1px',
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
