import '../lib/dayjs'

import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

import { globalStyles } from '@/styles/global'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/lib/react-query'
import { DefaultSeo } from 'next-seo'

globalStyles()

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 2100,
          style: {
            backgroundColor: '#202024',
          },
        }}
      />
      <QueryClientProvider client={queryClient}>
        <SessionProvider session={session}>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'pt_BR',
              siteName: 'Call',
            }}
          />
          <Component {...pageProps} />
        </SessionProvider>
      </QueryClientProvider>
    </>
  )
}
