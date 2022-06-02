import '@assets/main.css'
import '@assets/chrome-bug.css'

import { FC, useEffect } from 'react'
import type { AppProps } from 'next/app'

import { ManagedUIContext } from '@components/ui/context'
import { Toaster } from 'react-hot-toast'
import { Head } from '@components/common'

const Noop: FC = ({ children }: any) => <>{children}</>

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).Layout || Noop

  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <ManagedUIContext>
        <Layout pageProps={pageProps}>
          <Toaster position="top-center" reverseOrder={false} />
          <Component {...pageProps} />
        </Layout>
      </ManagedUIContext>
    </>
  )
}

export default MyApp
