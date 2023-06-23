import '@/styles/global.scss'
import '@/styles/grid.scss'
import '@/styles/header.scss'
import '@/styles/thisistheway.scss'
import '@/styles/services.scss'
import '@/styles/design.scss'
import '@/styles/pricing.scss'
import '@/styles/questions.scss'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
