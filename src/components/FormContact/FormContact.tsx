'use client';
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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='name'>Tu nombre</label>
        <input onChange={handleInputChange} type='text' />
      </div>
      <div>
        <label htmlFor='last_name'>Apellido</label>
        <input onChange={handleInputChange} type='text' />
      </div>
      <div>
        <label htmlFor='email'></label>
        <input onChange={handleInputChange} type='text' />
      </div>
      <div>
        <label htmlFor='subject'>Asunto</label>
        <input onChange={handleInputChange} type='text' />
      </div>
      <div>
        <label htmlFor='message'></label>
        <textarea
          onChange={handleInputChange}
          name='message'
          id='message'
          placeholder='Escribe aquí...'
        ></textarea>
      </div>
      <button type='submit'>Enviar</button>
    </form>
  );
};

export default FormContact;
