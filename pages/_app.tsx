import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LocalizationProvider } from '@material-ui/lab'
import AdapterDateFns from '@material-ui/lab/AdapterDateFns'
import { ThemeProvider } from '@material-ui/core'
import theme from 'common/theme'
import LayoutAPP from 'components/layout/LayoutApp'

export default function APP({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme.currentTheme}>
        <LayoutAPP>
          <Component {...pageProps} />
        </LayoutAPP>
      </ThemeProvider>
    </LocalizationProvider>
  )
}
