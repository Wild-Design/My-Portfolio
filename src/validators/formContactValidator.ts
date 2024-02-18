interface FormData {
  user_name: string;
  last_name: string;
  user_email: string;
  subject: string;
  message: string;
}

interface Errors {
  user_name?: string;
  last_name?: string;
  user_email?: string;
  subject?: string;
  message?: string;
}

const formContactValidator = ({
  user_name,
  last_name,
  user_email,
  subject,
  message,
}: FormData): Errors => {
  const regexUsername = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,50}$/;
  const regexUserLastName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{3,50}$/;
  const regexUserEmail = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;
  const regexUserSubject = /^[a-zA-Z0-9\s\-_.,;!?()]{1,60}$/;

  const errors: Errors = {};

  if (!regexUsername.test(user_name)) errors.user_name = 'Nombre invalido';
  if (!regexUserLastName.test(last_name))
    errors.last_name = 'Apellido invalido';
  if (!regexUserEmail.test(user_email)) errors.user_email = 'Email invalido';
  if (!regexUserSubject.test(subject)) errors.subject = 'Asunto invalido';
  if (message.length < 3 || message.length > 1500)
    errors.message = 'Mensaje invalido';

  return errors;
};

export default formContactValidator;
