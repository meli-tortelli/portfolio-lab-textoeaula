import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ children }) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  )
}

export default MyApp
