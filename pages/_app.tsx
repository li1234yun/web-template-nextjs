import "../styles/globals.css";
import type { AppProps } from "next/app";
import { LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ThemeProvider } from "@mui/material";
import theme from "common/theme";
import LayoutAPP from "components/layout/LayoutApp";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react-transition-group/node_modules/@types/react";

// Extend Next Page
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function APP({ Component, pageProps }: AppPropsWithLayout): JSX.Element {
  const layout = Component.getLayout ?? ((page) => (<LayoutAPP>{page}</LayoutAPP>))  // get layout, default layout is LayoutAPP

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <ThemeProvider theme={theme.currentTheme}>
        {layout(<Component {...pageProps} />)}
      </ThemeProvider>
    </LocalizationProvider>
  )
}
