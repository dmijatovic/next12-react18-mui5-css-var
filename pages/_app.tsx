import { useState } from 'react';
import Head from 'next/head';
import App, { AppContext, AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache, Global } from '@emotion/react';

import {muiTheme,getCssVarsFromTheme, applyCssVarsToPallete} from '../styles/theme';
import createEmotionCache from '../components/createEmotionCache';

import '../styles/global.css'

import PageLayout from '~/components/layout/PageLayout';


// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  pathname: string
}

export default function MyApp(props: MyAppProps) {
  const [mode, setMode] = useState < 'light'|'dark'>('light')

  const theme = muiTheme(mode)
  const globals = getCssVarsFromTheme(theme)
  // const cssTheme = {
  //   ...theme,
  //   palette: applyCssVarsToPallete({
  //     ...theme.palette
  //   })
  // }
  // debugger
  // console.group("myApp")
  // console.log("pathname...", props.pathname)
  // console.log("globals...", globals)
  // console.log("cssTheme...", cssTheme)
  // console.groupEnd()

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* dynamically pass css variables when theme changes */}
        <Global styles={globals} />
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <PageLayout>
          <Component {...pageProps} />
        </PageLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.getInitialProps = async (ctx: AppContext) => {
  const pathname = ctx.router.pathname
  // console.group("MyApp.getInitialProps")
  // console.log("pathname...", pathname)
  // console.log("appContext...", appContext)
  const appProps = await App.getInitialProps(ctx)
  // console.log("appProps...", appProps)
  // console.groupEnd()
  return {
    ...appProps,
    pathname
  }
}
