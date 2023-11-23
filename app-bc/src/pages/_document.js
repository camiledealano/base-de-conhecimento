import { Html, Head, Main, NextScript } from 'next/document'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head />
      <Header />
      <body>
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  )
}
