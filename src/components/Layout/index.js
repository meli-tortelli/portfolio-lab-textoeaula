import Head from 'next/head'

import Navbar from '../Navbar'
import Footer from '../Footer'

import styles from './Layout.module.css'
import HeroSection from '../HeroSection'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Lab.TA - Laboratório Texto e Aula</title>
      </Head>

      <Navbar />
      <main className={styles.main_content}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
