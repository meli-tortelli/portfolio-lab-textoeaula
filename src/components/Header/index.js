import Link from 'next/link'
import { Navbar } from '../Navbar'

import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.nav_wrapper}>
      <div className={styles.nav_logo}>
        <h1>
          <Link href='/'>
            <a>Lab.TA</a>
          </Link>
        </h1>
      </div>
      <Navbar />
    </header>
  )
}

export default Header
