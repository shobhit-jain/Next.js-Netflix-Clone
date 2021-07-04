const isProd = process.env.NODE_ENV === 'production'
import { AuthProvider } from '@/firebase/Auth-Provider/auth-provider'
import { AllStateProvider } from '@/provider/AllStateProvider'
import axios from 'axios'
import { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import React from 'react'
import { SWRConfig } from 'swr'
import '../styles/global.css'
import '../styles/tailwind.css'

const WebSecurity = dynamic(() => import('security/webSecurity'), {
  ssr: false,
})

declare global {
  interface Window {
    workbox: any
  }
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [isOnline, setIsOnline] = React.useState(true)

  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'ononline' in window &&
      'onoffline' in window
    ) {
      setIsOnline(window.navigator.onLine)
      if (!window.ononline) {
        window.addEventListener('online', () => {
          setIsOnline(true)
        })
      }
      if (!window.onoffline) {
        window.addEventListener('offline', () => {
          setIsOnline(false)
        })
      }
    }
  }, [])

  const router = useRouter()
  React.useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      'serviceWorker' in navigator &&
      window.workbox !== undefined &&
      isOnline
    ) {
      // skip index route, because it's already cached under `start-url` caching object
      if (router.route !== '/') {
        const wb = window.workbox
        wb.active.then(() => {
          wb.messageSW({ action: 'CACHE_NEW_ROUTE' })
        })
      }
    }
  }, [isOnline, router.route])

  return (
    <>
      <SWRConfig
        value={{
          fetcher: (url: string) => axios(url).then((r: any) => r.data),
        }}
      >
        <AllStateProvider>
          <AuthProvider>
            <Component {...pageProps} />
          </AuthProvider>
        </AllStateProvider>
      </SWRConfig>

      {/* {isProd && (
        <>
          <WebSecurity />
        </>
      )} */}
    </>
  )
}

export default App
