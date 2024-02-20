'use client';
import { useState } from 'react';
import ThemeConfig from '@/interfaces/ThemeConfig';
import styles from './FormContact.module.css';
import { FormEvent, ChangeEvent, FC } from 'react';
import emailjs from '@emailjs/browser';
import formContactValidator from '@/validators/formContactValidator';
import { RotatingLines } from 'react-loader-spinner';
import { useRef } from 'react';
import Swal from 'sweetalert2';

const SERVICE_ID = 'service_i9rowwi';
const TEMPLATE_ID = 'template_lax5bvv';
const PUBLIC_KEY = 'zB4OPOZMhnXQGRz33';

interface Props {
  currentTheme: ThemeConfig;
}

const FormContact: FC<Props> = ({ currentTheme }) => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    user_name: '',
    last_name: '',
    user_email: '',
    subject: '',
    message: '',
  });

  interface Errors {
    user_name?: string;
    last_name?: string;
    user_email?: string;
    subject?: string;
    message?: string;
  }
  const [errors, setErrors] = useState<Errors>({});

  const [loading, setLoading] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(formContactValidator(formData));
    if (!Object.keys(formContactValidator(formData)).length) {
      setLoading(true);

      emailjs
        .sendForm(SERVICE_ID, TEMPLATE_ID, event.currentTarget, {
          publicKey: PUBLIC_KEY,
        })
        .then(
          () => {
            setLoading(false);
            Swal.fire({
              icon: 'success',
              title: '¡Listo! 😁',
              text: 'Tu mensaje ha sido enviado correctamente.',
              footer:
                '¡Gracias por ponerte en contacto! Pronto estaré respondiendo tu correo.',
            });
            setFormData({
              user_name: '',
              last_name: '',
              user_email: '',
              subject: '',
              message: '',
            });
            formRef.current?.reset(); //Receteo el formulario para que no haga spam
          },

          (error) => {
            setLoading(false);

            Swal.fire({
              icon: 'error',
              title: 'Oops... Algo salió mal',
              text: 'No hemos podido enviar tu correo.',
              footer:
                'Por favor, verifica los datos ingresados e inténtalo de nuevo más tarde.',
            });
          }
        );
    }
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
      ref={formRef}
      style={{ backgroundColor: currentTheme.colorForm + 80 }}
      className={styles.form}
      onSubmit={handleSubmit}
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
          <div className={styles.errorContainer}>
            <span>{errors.user_name}</span>
          </div>
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
          <div className={styles.errorContainer}>
            <span>{errors.last_name}</span>
          </div>
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
          <div className={styles.errorContainer}>
            <span>{errors.user_email}</span>
          </div>
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
          <div className={styles.errorContainer}>
            <span>{errors.subject}</span>
          </div>
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
        <div className={styles.errorContainer}>
          <span>{errors.message}</span>
        </div>
      </div>
      <button className={styles.button} type='submit'>
        {loading ? (
          <RotatingLines
            strokeColor='#fff'
            strokeWidth='5'
            animationDuration='0.75'
            width='30'
            visible={true}
          />
        ) : (
          'Enviar'
        )}
      </button>
    </form>
  );
};

export default FormContact;
