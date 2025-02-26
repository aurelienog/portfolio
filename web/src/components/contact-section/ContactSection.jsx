import React from 'react'
import ContactForm from '../contact-form/ContactForm'
import Send from '../../assets/send.svg?react';

function ContactSection() {
  return (
    <section className='relative'>
      <h2 className='md:text-6xl'>Trabajamos juntos?</h2>
      <p className='md:text-xl flex gap-2 font-bold mb-8'>Estoy a un mensaje de distancia <Send/></p>
      <div className='w-[50%]'>
        <ContactForm/>
      </div>
      
    </section>
  )
}

export default ContactSection