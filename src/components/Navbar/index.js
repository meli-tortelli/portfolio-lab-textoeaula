import Link from 'next/link'
import { useState } from 'react'
import { navLinks } from '../../utils/links'
import classNames from 'classnames/bind'

import styles from './Navbar.module.css'

const cx = classNames.bind(styles)

export const Navbar = () => {
  const [clicked, setClick] = useState(false)

  const handleClick = () => {
    setClick(!clicked)
  }

  const menuClasses = cx({
    active: clicked ? true : false,
  })

  return (
    <header className={styles.nav_wrapper}>
      <div className={styles.nav_logo}>
        <h1>
          <Link href='/'>
            <a>Lab.TA</a>
          </Link>
        </h1>
      </div>
      <div className={styles.menu_icon} onClick={handleClick}>
        <i>
          {clicked ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='menu_icon'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          ) : (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='menu_icon'
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
          )}
        </i>
      </div>

      <nav>
        <ul
          className={clicked ? menuClasses : styles.nav_menu}
          onClick={handleClick}
        >
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
    </header>
  )
}

export default Navbar
