import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <address className={styles.info}>
        <span>&copy;2021</span>
        <span>LAB-TA</span>
        <span>(42)9 9960-8634</span>
        <span>labtextoeaula@gmail.com</span>
      </address>
    </footer>
  )
}

export default Footer
