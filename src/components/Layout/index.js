import Head from 'next/head'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lab.TA - Laboratório Texto e Aula</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
