import styles from './ServiceSection.module.css'

function ServiceSection() {
  return (
    <section className={styles.section_content}>
      <article className={styles.section_content_info}>
        <div className={styles.section_content_details}>
          <h1>Organização, revisão e edição textual</h1>
          <p>
            Os serviços oferecidos pelo Lab.TA contemplam desde a
            formatação, até a edição textual. Contudo, para te dizer qual a
            melhor opção para seu texto, precisamos conhecê-lo. Entre em
            contato com a gente.
          </p>
        </div>
        <div className={styles.section_content_details}>
          <h1>Orientação de escrita</h1>
          <p>
            Na escrita acadêmica, precisamos adequar nosso texto a um
            edital e a uma série de normas. Também é necessário conhecer as
            ferramentas de pesquisa disponíveis e aproveitar ao máximo
            delas.{' '}
          </p>
        </div>
        <div className={styles.section_content_details}>
          <h1>Traduções</h1>
          <p>
            No Lab.TA realizamos diversas traduções e versões. Desde textos
            mais curtos, como o resumo de trabalhos acadêmicos ou chamadas
            de divulgação de empresas, até materiais mais extensos, como
            artigos, capítulos e livros completos; ou folhetos, apostilas e
            outros documentos que sua empresa precise traduzir para
            alcançar mais pessoas.
          </p>
        </div>
        <div className={styles.section_content_details}>
          <h1>Aulas Particulares</h1>
          <p>
            As aulas particulares são oferecidas presencialmente e online
            em Ponta Grossa-PR; e remotamente a alunas e alunos de outras
            cidades. Oferecemos aulas de reforço para crianças e
            adolescentes, a partir do conteúdo escolar das disciplinas de
            português, inglês e espanhol. Para jovens no Ensino Médio, além
            dessas matérias, temos um grupo de estudos de produção textual,
            voltada aos processos seletivos para entrada no Ensino
            Superior. Para adultos, oferecemos aulas preparatórias para
            processos seletivos ou exames de proficiência em língua inglesa
            ou espanhola. Se você se interessa por uma dessas modalidades
            de aula particular, ou procura outro tipo de acompanhamento
            para você ou sua família, entre em contato com a gente.
          </p>
        </div>
      </article>
      <article className={styles.section_content_info}>
        <p>
          <em role='definition'>
            ** O atendimento é presencial na cidade de Ponta Grossa - PR e
            região, para mais informações entrar em contato através do
            nosso email.
          </em>
        </p>
      </article>
    </section>
  )
}

export default ServiceSection
