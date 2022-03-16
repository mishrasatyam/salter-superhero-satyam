import TopBar from './TopBar'
import Footer from './Footer'
export default function Layout({ children }) {
    const {props} = children
    const {data} = props
    console.log(data)
  return (
    <>
      <TopBar />
      <main className='mx-4 mt-4 mb-10'>{children}</main>
      <Footer/>
    </>
  )
}