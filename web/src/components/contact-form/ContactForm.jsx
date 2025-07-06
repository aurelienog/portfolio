import { useForm} from 'react-hook-form';
import service from '../../services/common';
import { useState } from 'react';
import  Button  from '../button/Button'

function ContactForm() {
  const { register, handleSubmit, reset, setError, formState: { errors, isValid, isSubmitting }} = useForm({mode: 'onChange'});
  const [serverError, setServerError] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const onMessageSubmit = async (message) => {
    try {
      setServerError();
      await service.sendMessage(message);
      reset();
      setSuccessMessage("Gracias por ponerte en contacto conmigo. He recibido tu mensaje y lo revisaré lo antes posible!");
    } catch(error) {
      const errors = error.response?.data.errors;
      if (errors) {
        console.log(error.message, errors);
        Object.keys(errors)
        .forEach((inputName) => setError(inputName, { message: errors[inputName]}))
      } else {
        console.log(error);
        setServerError(error.message)
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onMessageSubmit)} className='my-12 lg:w-[50%]'>
      <div className='mb-8'>
        {/*NAME*/}
        <div className='flex flex-col h-32 mb-4'>
          <label htmlFor='name' className='p-2'><span className='text-red-600 font-medium'>*</span>Nombre :</label>
          <input id='name' type='text' placeholder='Jane Doe' {...register("name", { 
            required: "Por favor, ingrese su nombre.", 
            minLength: { value: 3, message: 'El nombre debe tener una longitud entre 2 y 30 caracteres.' },
            maxLength: { value: 30, message: 'El nombre debe tener una longitud entre 2 y 30 caracteres.'} 
            })} 
            className={`peer  ${errors.name ? 'not-focus:border-red-600 not-focus:bg-red-200' : ''}` } aria-describedby="nameError"/>
          { errors.name && <div id="nameError" className='peer-not-focus:text-red-600 text-red-600/0 font-medium p-2'>{errors.name?.message}</div> }  
        </div>

        {/*Email*/}
        <div className='flex flex-col h-32 mb-4'>
          <label htmlFor='email' className='p-2'><span className='text-red-600 font-medium'>*</span>Email :</label>
          <input id='email' type='email' placeholder='jane@example.com' className={`peer ${errors.email ? 'not-focus:border-red-600  not-focus:bg-red-200' : ''}` } {...register("email", {
            pattern: { 
            value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'El correo electrónico debe ser válido.'  
          },
          required: "Por favor, ingrese su correo electrónico.", })} aria-describedby="emailError"/>
          { errors.email && <div id="emailError" className='peer-not-focus:text-red-600 text-red-600/0 font-medium p-2'>{errors.email?.message}</div> } 
        </div>

        {/*Message*/}
        <div className='flex flex-col min-h-56 mb-4'>
          <label htmlFor='message' className='p-2'><span className='text-red-600 font-medium'>*</span>Mensaje :</label>
          <textarea id='message' placeholder="Escriba su mensaje aquí..." className={`peer h-32 ${errors.message ? 'not-focus:border-red-600  not-focus:bg-red-200' : ''}` } {...register("message", { 
            required: "Por favor, ingrese su mensaje.", 
            minLength: { value: 150, message: 'El mensaje debe tener al menos 150 caracteres.' },
            maxLength: { value: 5000, message: 'El mensaje debe tener máximo 5000 caracteres.'} 
            })} aria-describedby="messageError"/>
        { errors.message && <div id="messageError" className='peer-not-focus:text-red-600 text-red-600/0 font-medium p-2'>{errors.message?.message}</div> }    
        </div>

        <Button type='submit' className={`mt-8 w-full ${!isValid || isSubmitting ? 'opacity-70 pointer-events-none': ''}`}>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</Button>
        
        {serverError && <div className="border font-medium w-full p-4 text-red-600 mt-10">{serverError}</div>}
        {successMessage && <div className="border font-medium w-full p-4 text-green-600 my-4">{successMessage}</div>}

      </div>     
    </form>
  )
}

export default ContactForm