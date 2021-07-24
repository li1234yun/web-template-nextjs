import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactNode } from 'react'

function APP({ Component, pageProps }: AppProps): ReactNode {
  return <Component {...pageProps} />
}

export default APP
