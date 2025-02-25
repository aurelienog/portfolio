import React, { useState } from 'react'
import { useForm} from 'react-hook-form'
import service from '../../services/common';

function ContactForm() {
  const { register, handleSubmit, formState: { errors, isValid } } = useForm({mode: 'onBlur'});
  const [serverError, setServerError] = useState();

  const onMessageSubmit = async (message) => {
    try {
      setServerError();
      const newMessage = await service.sendMessage(message);
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
      <div className='space-y-6 mb-8'>
        <p className='md:text-xl font-bold mb-8'>Estoy a un mensaje de distancia :</p>

        {serverError && <div className="border font-medium rounded-2xl w-full p-4 text-red-600 mt-10">{serverError}</div>}

        {/*NAME*/}
        <div className='grid'>
          <label htmlFor='name' className='cursor-pointer font-bold p-2'><span className='text-red-600 font-medium'>*</span>Nombre :</label>
          <input id='name' {...register("name", { 
            required: "Por favor, ingrese su nombre.", 
            minLength: { value: 3, message: 'El nombre debe tener una longitud entre 2 y 30 caracteres' },
            maxLength: { value: 30, message: 'El nombre debe tener una longitud entre 2 y 30 caracteres'} 
            })} 
            className={`field-sizing-content cursor-pointer border h-12 rounded-2xl p-2 outline-none hover:border-2 focus:border-2 border-black focus:font-bold  focus:bg-black/10 ${errors.name ? 'border-red-600 border-2 bg-red-200' : ''}` } aria-describedby="nameError"/>
          { errors.name && <div id="nameError" className='text-red-600 font-medium p-2'>{errors.name?.message}</div> }  
        </div>

        {/*Email*/}
        <div className='grid'>
          <label htmlFor='email' className='cursor-pointer font-bold p-2'><span className='text-red-600 font-medium'>*</span>Email :</label>
          <input id='email' className={`field-sizing-content cursor-pointer border h-12 rounded-2xl p-2 outline-none hover:border-2 focus:border-2 border-black focus:font-bold  focus:bg-black/10 ${errors.email ? 'border-red-600 border-2 bg-red-200' : ''}` } type='email' {...register("email", {
            pattern: { 
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ ,
            message: 'User email must be valid'  
          },
          required: "Por favor, ingrese su correo electrónico.", })} aria-describedby="emailError"/>
          { errors.email && <div id="emailError" className='text-red-600 font-medium p-2'>{errors.email?.message}</div> } 
        </div>

        {/*Message*/}
        <div className='grid'>
          <label htmlFor='message' className='cursor-pointer font-bold p-2'><span className='text-red-600 font-medium'>*</span>Mensaje :</label>
          <textarea id='message' placeholder="Escriba su mensaje aquí..." className={`field-sizing-content cursor-pointer border h-32 rounded-2xl p-2 outline-none hover:border-2 focus:border-2 border-black focus:font-bold  focus:bg-black/10 ${errors.message ? 'border-red-600 border-2 bg-red-200' : ''}` } {...register("message", { 
            required: "Por favor, ingrese un mensaje.", 
            minLength: { value: 300, message: 'El mensaje debe tener al menos 300 caracteres.' },
            maxLength: { value: 5000, message: 'El mensaje debe tener máximo 5000 caracteres'} 
            })} aria-describedby="messageError"/>
        { errors.message && <div id="messageError" className='text-red-600 font-medium p-2'>{errors.message?.message}</div> }    
        </div>

        <div className='mt-12'>
          <button type='submit' className={`w-full cursor-pointer bg-[#e10505]/90 uppercase outline-2 font-bold text-white/90 rounded-2xl px-8 py-4 ${!isValid ? 'opacity-30 pointer-events-none' : ''} shadow-2xl`}>Enviar mensaje</button>
        </div>
        
      </div>     
    </form>
  )
}

export default ContactForm