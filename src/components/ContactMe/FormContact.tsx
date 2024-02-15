'use client';
import styles from './FormContact.module.css';
import { FormEvent, ChangeEvent } from 'react';
import { primaryFont } from '../../fonts';

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
    <form
      // style={{ fontFamily: primaryFont.className }}
      className={styles.form}
      onSubmit={handleSubmit}
    >
      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <label htmlFor='name'>Nombre</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='name'
            placeholder='Tu nombre aquí...'
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='last_name'>Apellido</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='last_name'
            placeholder='Tu apellido aquí...'
          />
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.inputContainer}>
          <label htmlFor='email'>Email</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='email'
            placeholder='Tu email aquí...'
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor='subject'>Asunto</label>
          <input
            onChange={handleInputChange}
            type='text'
            id='subject'
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
