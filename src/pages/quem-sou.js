import Head from 'next/head'
import ContactForm from '../components/ContactForm'
import WhoAmI from '../components/WhoAmISection'

export const QuemSou = () => {
  return (
    <>
      <Head>
        <title>Lab.TA - Laboratório Texto e Aula / Quem Sou</title>
      </Head>

      <WhoAmI />
      <ContactForm />
    </>
  )
}

export default QuemSou
