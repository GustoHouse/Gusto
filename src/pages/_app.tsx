import '@/styles/global.scss'
import '@/styles/grid.scss'
import '@/styles/thisistheway.scss'
import '@/styles/services.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
