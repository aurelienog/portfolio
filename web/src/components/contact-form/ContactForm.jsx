import React, { useState } from 'react'
import { useForm} from 'react-hook-form'
import service from '../../services/common';

function ContactForm() {
  const { register, handleSubmit, reset, formState: { errors, isValid, isSubmitting } } = useForm({mode: 'onChange'});
  const [serverError, setServerError] = useState();
  const [successMessage, setSuccessMessage] = useState();

  const onMessageSubmit = async (message) => {
    try {
      setServerError();
      const newMessage = await service.sendMessage(message);
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
    <form onSubmit={handleSubmit(onMessageSubmit)} className='my-12'>
      <div className='mb-8'>

        {serverError && <div className="border font-medium rounded-2xl w-full p-4 text-red-600 mt-10">{serverError}</div>}
        {successMessage && <div className="border font-medium rounded-2xl w-full p-4 text-green-600 my-4">{successMessage}</div>}

        {/*NAME*/}
        <div className='flex flex-col h-32'>
          <label htmlFor='name' className=' cursor-pointer font-bold p-2'><span className='text-red-600 font-medium'>*</span>Nombre :</label>
          <input id='name' type='text' placeholder='Jane Doe' {...register("name", { 
            required: "Por favor, ingrese su nombre.", 
            minLength: { value: 3, message: 'El nombre debe tener una longitud entre 2 y 30 caracteres.' },
            maxLength: { value: 30, message: 'El nombre debe tener una longitud entre 2 y 30 caracteres.'} 
            })} 
            className={`peer field-sizing-content cursor-pointer border h-12 rounded-2xl p-2 outline-none hover:border-2 focus:border-2 border-black focus:font-bold focus:bg-green-200/10 ${errors.name ? 'not-focus:border-red-600 not-focus:border-2 not-focus:bg-red-200' : ''}` } aria-describedby="nameError"/>
          { errors.name && <div id="nameError" className='peer-not-focus:text-red-600 text-red-600/0 font-medium p-2'>{errors.name?.message}</div> }  
        </div>

        {/*Email*/}
        <div className='flex flex-col h-32'>
          <label htmlFor='email' className='cursor-pointer font-bold p-2'><span className='text-red-600 font-medium'>*</span>Email :</label>
          <input id='email' type='email' placeholder='jane@example.com' className={`peer field-sizing-content cursor-pointer border h-12 rounded-2xl p-2 outline-none hover:border-2 focus:border-2 border-black focus:font-bold  focus:bg-green-200/10 ${errors.email ? 'not-focus:border-red-600 not-focus:border-2 not-focus:bg-red-200' : ''}` } {...register("email", {
            pattern: { 
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
            message: 'El correo electrónico debe ser válido.'  
          },
          required: "Por favor, ingrese su correo electrónico.", })} aria-describedby="emailError"/>
          { errors.email && <div id="emailError" className='peer-not-focus:text-red-600 text-red-600/0 font-medium p-2'>{errors.email?.message}</div> } 
        </div>

        {/*Message*/}
        <div className='flex flex-col min-h-52'>
          <label htmlFor='message' className='cursor-pointer font-bold p-2'><span className='text-red-600 font-medium'>*</span>Mensaje :</label>
          <textarea id='message' placeholder="Escriba su mensaje aquí..." className={`peer cursor-pointer border h-32 rounded-2xl p-2 outline-none hover:border-2 focus:border-2 border-black focus:font-bold  focus:bg-green-200/10 ${errors.message ? 'not-focus:border-red-600 not-focus:border-2 not-focus:bg-red-200' : ''}` } {...register("message", { 
            required: "Por favor, ingrese su mensaje.", 
            minLength: { value: 150, message: 'El mensaje debe tener al menos 150 caracteres.' },
            maxLength: { value: 5000, message: 'El mensaje debe tener máximo 5000 caracteres.'} 
            })} aria-describedby="messageError"/>
        { errors.message && <div id="messageError" className='peer-not-focus:text-red-600 text-red-600/0 font-medium p-2'>{errors.message?.message}</div> }    
        </div>

        <div className='mt-8'>
          <button type='submit' className={`w-full cursor-pointer bg-[#e10505]/90 uppercase outline-2 font-bold text-white rounded-2xl px-8 py-4 ${!isValid || isSubmitting ? 'opacity-60 pointer-events-none' : ''} shadow-2xl`}>{isSubmitting ? 'Enviando...' : 'Enviar mensaje'}</button>
        </div>
        
      </div>     
    </form>
  )
}

export default ContactForm