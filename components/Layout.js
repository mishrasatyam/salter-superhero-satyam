import TopBar from './TopBar'
import Footer from './Footer'
import Head from 'next/head'
export default function Layout({ children }) {
    const {props} = children
    const {data} = props
  return (
    <>
      <Head>
        <html lang='en'></html>
        <title>Marvel</title>
        <meta name="description" content="Display 20 marvel superhero's"></meta>
      </Head>
      <TopBar />
      <main className='mx-4 mt-4 mb-10'>{children}</main>
      <Footer/>
    </>
  )
}