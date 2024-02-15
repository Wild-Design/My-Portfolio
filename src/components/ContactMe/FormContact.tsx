'use client';
import styles from './FormContact.module.css';
import { FormEvent, ChangeEvent } from 'react';

const FormContact = () => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
  };
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <label htmlFor='name'>Tu nombre</label>
          <input onChange={handleInputChange} type='text' id='name' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='last_name'>Apellido</label>
          <input onChange={handleInputChange} type='text' id='last_name' />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <label htmlFor='email'>Tu email</label>
          <input onChange={handleInputChange} type='text' id='email' />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='subject'>Asunto</label>
          <input onChange={handleInputChange} type='text' id='subject' />
        </div>
      </div>

      <div className={styles.inputContainer}>
        <label htmlFor='message'>Tu mensaje</label>
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
