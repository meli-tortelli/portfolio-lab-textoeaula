import styles from './TestimonialsSection.module.css'

export const Testimonials = () => {
  return (
    <section className={styles.section} role='complementary'>
      <article className={styles.article}>
        <h1 className={styles.detail_title}>
          Veja o que clientes tem a dizer:
        </h1>
      </article>
      <article className={styles.article_info}>
        <div className={styles.article_content}>
          <p>
            &ldquo;O trabalho da Clara é impecável nas questões de edição e
            organização textual! Profissional com amplo conhecimento na
            área da gramática e linguagem. Auxilia o cliente desde o
            primeiro contato com sugestões, clareza e organização das
            ideias.&rdquo;
          </p>
          <span>
            &#45; <strong>Leonardo Costa</strong>, professor de filosofia.
          </span>
        </div>
        <div className={styles.article_content}>
          <p>
            &ldquo;Excelente profissional,organizada, responsável, correta
            e pontual com a data de entrega. Agradeço a boa disposição de
            sempre, que me ajudam a deixar mais leve a minha vida
            acadêmica.&rdquo;
          </p>
          <span>
            &#45; <strong>Vanine Xavier</strong>, acadêmica de psicologia.
          </span>
        </div>
        <div className={styles.article_content}>
          <p>
            &ldquo;Para uma pessoa longe de estudos há um tempo, foi ótimo
            reiniciar esta trajetória com a Clara. Assim, o seu trabalho é
            renumerado com preço justo, além de proporcionar um valor
            imensurável de quem usufrui.&rdquo;
          </p>
          <span>
            &#45; <strong>Bruno Rabelo</strong>, PGE-PR, mestrando em
            Direito Profissional da UEPG.
          </span>
        </div>
      </article>
    </section>
  )
}

export default Testimonials
