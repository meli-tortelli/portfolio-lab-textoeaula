import Head from 'next/head'

import Header from '../Header'
import Footer from '../Footer'

import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lab.TA - Laboratório Texto e Aula</title>
      </Head>

      <Header />
      <main className={styles.main_content}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
