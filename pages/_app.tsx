import { AppProvider } from '@/components/context/appContext'
import { SessionProvider } from '@/components/context/sessionContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </AppProvider>
  )
}
