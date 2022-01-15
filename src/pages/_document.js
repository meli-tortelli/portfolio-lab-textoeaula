import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <meta charSet='utf-8' />
          <link rel='icon' type='image/ico' href='/favicon.ico.png' />
          <link rel='canonical' href='https://labtextoeaula.com.br' />
          <meta name='theme-color' content='#0093dd' />
          <meta
            name='keywords'
            content='escrita acadêmica, tradução, aula particular, revisão, lattes, escrita criativa, cursos, literatura'
          />
          <meta
            name='description'
            content='Um espaço que atua com a orientação, organização, revisão e edição textual'
          />
          <meta
            name='application-name'
            content='Laboratório Texto e Aula'
          />
          <meta name='author' content='Clara do Prado' />
          <meta property='og:type' content='website' />
          <meta
            property='og:url'
            content='https://www.labtextoeaula.com.br'
          />
          <meta property='og:title' content='Laboratório Texto e Aula' />
          <meta
            property='og:description'
            content='Um espaço que atua com a orientação, organização, revisão e edição textual.'
          />
          <meta
            property='og:site_name'
            content='Laboratório Texto e Aula'
          />
          <meta property='og:image' itemProp='image' content='/logo.png' />
          <meta name='robots' content='nofollow' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
