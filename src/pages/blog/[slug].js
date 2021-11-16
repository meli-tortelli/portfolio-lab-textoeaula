import { createClient } from 'contentful'
import Head from 'next/head'

import PostsContent from '../../components/PostContent'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export const BlogPost = ({ post }) => {
  return (
    <>
      <Head>
        <title>
          Lab.TA - Laboratório Texto e Aula / {post.fields.title}
        </title>
      </Head>
      <PostsContent key={post.sys.space} post={post} />
    </>
  )
}

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: 'blog',
  })

  const paths = response.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    }
  })

  return {
    paths: paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  })

  return {
    props: {
      post: items[0],
    },
  }
}

export default BlogPost
