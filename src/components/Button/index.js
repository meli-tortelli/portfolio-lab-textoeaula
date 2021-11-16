import Link from 'next/link'

import styles from './Button.module.css'

function Button({ children }) {
  let route = '/quem-sou'
  return <button className={styles.button}>{children}</button>
}

export default Button
