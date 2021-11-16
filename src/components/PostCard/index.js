import Image from 'next/image'
import Link from 'next/link'
import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './PostCard.module.css'

export const PostCard = ({ post }) => {
  const { title, slug, description, createdAt, thumbnail } = post.fields

  const dateFormatted = moment(createdAt).format('L')

  return (
    <section className={styles.cards_wrapper}>
      {!post === 0 ? null : (
        <article className={styles.card_container}>
          <div className={styles.card_items}>
            <div className={styles.card_image}>
              <Image
                src={`https:${thumbnail.fields.file.url}`}
                width='400'
                height='300'
                layout='intrinsic'
                alt='Imagem ilustrativa do conteúdo'
                priority
              />
            </div>
            <div className={styles.card_detail}>
              <Link href={`/blog/${slug}`}>
                <a>
                  <h4>{title}</h4>
                  <p>{description}</p>
                </a>
              </Link>
              <em>{dateFormatted}</em>
            </div>
          </div>
        </article>
      )}
    </section>
  )
}

export default PostCard
