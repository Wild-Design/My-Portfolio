'use client';
import { useState } from 'react';
import ThemeConfig from '@/interfaces/ThemeConfig';
import styles from './FormContact.module.css';
import { FormEvent, ChangeEvent, FC } from 'react';
import emailjs from '@emailjs/browser';

interface Props {
  currentTheme: ThemeConfig;
}

const FormContact: FC<Props> = ({ currentTheme }) => {
  //--------------------------------------------------------
  const [formData, setFormData] = useState({});
  console.log(formData);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    emailjs
      .sendForm('service_i9rowwi', 'template_lax5bvv', event.currentTarget, {
        publicKey: 'zB4OPOZMhnXQGRz33',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <form
      style={{ backgroundColor: currentTheme.colorForm + 80 }}
      className={styles.form}
      onSubmit={sendEmail}
    >
      <h2 className={styles.formTitle}>Formulario de contacto</h2>
      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <label htmlFor='user_name'>Nombre</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='user_name'
            name='user_name'
            placeholder='Tu nombre aquí...'
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='last_name'>Apellido</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='last_name'
            name='last_name'
            placeholder='Tu apellido aquí...'
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <label htmlFor='user_email'>Email</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='user_email'
            name='user_email'
            placeholder='Tu email aquí...'
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='subject'>Asunto</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='subject'
            name='subject'
            placeholder='Asunto aquí...'
          />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='message'>Mensaje</label>
        <textarea
          className={styles.textarea}
          onChange={handleInputChange}
          name='message'
          id='message'
          placeholder='Escribe tu mensaje aquí...'
        ></textarea>
      </div>
      <button className={styles.button} type='submit'>
        Enviar
      </button>
    </form>
  );
};

export default FormContact;
