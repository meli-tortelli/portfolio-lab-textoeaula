import Head from 'next/head'
import { createClient } from 'contentful'

import PostCard from '../../components/PostCard'

export const Blog = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Lab.TA - Laboratório Texto e Aula / Blog</title>
      </Head>

      {posts.map((post) => (
        <PostCard key={post.sys.id} post={post} />
      ))}
    </>
  )
}

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  })

  console.log(client)

  const response = await client.getEntries({
    content_type: 'blog',
  })

  return {
    props: {
      posts: response.items,
    },
  }
}

export default Blog
