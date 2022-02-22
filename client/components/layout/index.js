import Head from 'next/head'
import Header from './header'
import Footer from './footer'

export default function Layout({ children }) {
  return (
    <>
        <Head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <base href="http://localhost:3001"/>
            <title>Lotus</title>
        </Head>
        <Header />
        <main>{children}</main>
        <Footer />
    </>
  )
}