import axios from 'axios'
import { AppProps } from 'next/app'
import React from 'react'
import { SWRConfig } from 'swr'
import '../styles/global.css'
import '../styles/tailwind.css'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios(url).then((r: any) => r.data),
        }}
      >
        <Component {...pageProps} />
      </SWRConfig>
    </>
  )
}

export default App
