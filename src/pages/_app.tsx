import React from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import '../styles/tailwind.css'

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    <React.Fragment>
      <Head>
        <title>ichigaya coworkingcafe</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <Component {...pageProps} />
    </React.Fragment>
  )
}