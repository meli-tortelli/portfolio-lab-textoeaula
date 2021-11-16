import { useState } from 'react'
import emailjs, { sendForm } from 'emailjs-com'
import Button from '../Button'

import styles from './ContactForm.module.css'

function ContactForm() {
  const [result, showResult] = useState(false)

  function sendEmail(event) {
    event.preventDefault()

    emailjs
      .sendForm(
        'lab_textoeaula',
        'template_lab',
        event.target,
        'user_QjpzjxmE4gjDq1oY4ScYr'
      )
      .then(
        (result) => {
          console.log(result.text)
          showResult(result)
        },
        (error) => {
          console.log(error.text)
        }
      )
    event.target.reset()
    showResult(true)
  }

  setTimeout(() => {
    showResult(false)
  }, 10000)

  return (
    <section className={styles.form_wrapper}>
      <h2>Tem alguma dúvida e gostaria de entrar em contato?</h2>
      <form onSubmit={sendEmail} className={styles.form_group}>
        <label htmlFor='name'>Nome</label>
        <input
          type='text'
          name='name'
          id='name'
          placeholder='Nome Completo'
          // value={(event) => event.target.value}
          onChange={(event) => ([event.target.name] = event.target.value)}
          required
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          placeholder='exemplo@gmail.com'
          // value={(event) => event.target.value}
          onChange={(event) => ([event.target.name] = event.target.value)}
          required
        />
        <label htmlFor='message'>Deixe aqui sua mensagem</label>
        <textarea
          className={styles.message}
          rows='8'
          cols='30'
          maxLength='1200'
          id='message'
          name='message'
          // value={(event) => event.target.value}
          onChange={(event) => ([event.target.name] = event.target.value)}
          required
        />
        <Button className={styles.submit_button} type='submit'>
          Enviar
        </Button>

        <span className={styles.response}>
          {result ? (
            <p>
              Sua mensagem foi enviada com sucesso, assim que possível
              entraremos em contato!
            </p>
          ) : null}
        </span>
      </form>
    </section>
  )
}

export default ContactForm
