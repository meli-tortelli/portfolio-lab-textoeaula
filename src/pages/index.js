import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import Testimonials from '../components/TestimonialsSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lab.TA - Laboratório Texto e Aula</title>
      </Head>
      <HeroSection />
      <Testimonials />
    </>
  )
}
