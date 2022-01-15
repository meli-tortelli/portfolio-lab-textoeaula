import Image from 'next/image'
import Link from 'next/link'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import moment from 'moment'
import 'moment/locale/pt-br'

import styles from './PostContent.module.css'
import Button from '../Button'

export default function PostsContent({ post }) {
  const { featureImage, title, content, createdAt, tags } = post.fields

  console.log(post)

  const dateFormatted = moment(createdAt).fromNow()

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
            <span className={styles.tags_detail} key={post.fields.slug}>
              {tag}
            </span>
          ))}
        </div>
        <span>{dateFormatted}</span>
      </article>
      <div className={styles.content_button}>
        <Button>
          <Link href='/blog'>
            <a role='button'>Voltar</a>
          </Link>
        </Button>
      </div>
    </section>
  )
}
