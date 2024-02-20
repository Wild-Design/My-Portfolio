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
  const regexUserEmail = /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/;

  const errors: Errors = {};

  if (!user_name.length) {
    errors.user_name = 'Al menos 3 caracteres';
    if (user_name.length >= 50) {
      errors.user_name = 'Maximo 50 caracteres';
    }
  }
  //---------------------------
  if (!last_name.length) {
    errors.last_name = 'Al menos 3 caracteres';
    if (last_name.length >= 50) {
      errors.last_name = 'Maximo 50 caracteres';
    }
  }
  //---------------------------

  if (!regexUserEmail.test(user_email)) errors.user_email = 'Email invalido';

  //---------------------------
  if (!subject.length) {
    errors.subject = 'Al menos 3 caracteres';
    if (subject.length >= 30) {
      errors.subject = 'Maximo 50 caracteres';
    }
  }
  //---------------------------
  if (!message.length) {
    errors.message = 'Al menos 3 caracteres';
    if (message.length >= 2000) {
      errors.message = 'Maximo 2000 caracteres';
    }
  }

  return errors;
};

export default formContactValidator;
