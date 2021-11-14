import Link from 'next/link'
// import ContactForm from '../ContactForm'

import styles from './WhoAmI.module.css'

export const WhoAmI = () => {
  return (
    <section className={styles.text_about}>
      <article className={styles.about}>
        <p className={styles.text_detail}>
          A profissional Clara do Prado é formada em Letras
          Português-Espanhol pela Universidade Estadual de Ponta Grossa –
          UEPG; possui certificação de Inglês Avançado por Cambridge e
          estuda Educação no Programa de Pós Graduação em Estudos da
          Linguagem da UEPG. Trabalha em escolas regulares e de idiomas, e
          atende crianças e adultos em aulas particulares desde 2015. Além
          disso, atuou em projetos sociais oferecendo aulas e oficinas de
          língua portuguesa, inglesa e espanhola. Já realizava organização,
          revisão e edição textual quando começou a oferecer também a
          orientação de escrita, que envolve a pesquisa e discussão de
          referências adequadas ao trabalho, elaboração de cronograma,
          leituras críticas e o acompanhamento no desenvolvimento do texto.
          Hoje, seu repertório de traduções e versões realizadas contempla
          textos empresariais, acadêmicos e literários.
        </p>
        <span>
          Quer saber quais trabalhos ofereço?{' '}
          <Link href='/servicos'>
            <a className={styles.detail}>Confira aqui &rarr;</a>
          </Link>
        </span>
      </article>
    </section>
  )
}

export default WhoAmI
