import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
// import moment from 'moment'
// import 'moment-timezone'

import styles from './PostContent.module.css'

export default function PostsContent({ post }) {
  const { featureImage, title, content, createdAt, tags } = post.fields

  console.log(post)

  // moment.locale('pt-br')
  // const dateFormatted = moment(createdAt).fromNow()

  return (
    <section className={styles.post_container}>
      {!featureImage ? null : (
        <div className={styles.image_post}>
          <Image
            src={`https:${featureImage.fields.file.url}`}
            alt='Imagem'
            height={featureImage.fields.file.details.image.height}
            width={featureImage.fields.file.details.image.width}
          />
        </div>
      )}
      <article className={styles.content_post}>
        <h2>{title}</h2>

        {documentToReactComponents(content)}
        <div className={styles.tags}>
          <p>tags: </p>
          {tags.map((tag) => (
            <span
              className={styles.tags_detail}
              key={post.metadata.tags[0]}
            >
              {tag}
            </span>
          ))}
        </div>
        <span>{createdAt}</span>
      </article>
      <span className={styles.content_button}>
        <Link href='/blog'>
          <a role='button'>Voltar</a>
        </Link>
      </span>
    </section>
  )
}
