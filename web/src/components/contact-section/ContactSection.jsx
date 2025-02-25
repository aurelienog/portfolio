import React from 'react'
import ContactForm from '../contact-form/ContactForm'


function ContactSection() {
  return (
    <section className='relative'>
      <h2 className='md:text-6xl'>Trabajamos juntos?</h2>
      <div className='w-[50%]'>
        <ContactForm/>
      </div>
      
    </section>
  )
}

export default ContactSection