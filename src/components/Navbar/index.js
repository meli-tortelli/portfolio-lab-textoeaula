import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from '../../utils/links'

import styles from './Navbar.module.css'

export const Navbar = () => {
  const [clicked, setClick] = useState(false)

  const handleClick = () => {
    setClick(!clicked)
  }

  return (
    <nav className={styles.nav_list}>
      {/* <div className={styles.menu_icon}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div> */}
      <ul>
        {navLinks.map((link) => {
          return (
            <li key={link.title} className={styles.nav_links}>
              <Link href={link.path}>
                <a>{link.title}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar
