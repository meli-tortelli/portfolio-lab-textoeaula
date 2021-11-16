import Image from 'next/image'
import Link from 'next/link'

import Button from '../Button'

import styles from './HeroSection.module.css'
function HeroSection() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.banner}>
        <h1 className={styles.heading}>
          Um espaço que atua com a orientação, organização, revisão e
          edição textual.
        </h1>
        <span className={styles.small}>
          Atendendo pessoas que precisam de auxílio em diversas áreas da
          escrita.
        </span>
        <div className={styles.see_more_button}>
          <Button>
            <Link href='/quem-sou'>
              <a>Saiba mais</a>
            </Link>
          </Button>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          src='/logo-1.svg'
          width='500'
          height='500'
          alt='Logo Laboratório texto e aula'
          priority
        />
      </div>
    </section>
  )
}

export default HeroSection
