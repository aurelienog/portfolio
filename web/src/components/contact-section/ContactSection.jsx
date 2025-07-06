import ContactForm from '../contact-form/ContactForm';
import Send from '../../assets/icons/send.svg?react';

function ContactSection() {
  return (
    <section id='contact' className='relative'>
      <h2>Trabajamos juntos?</h2>
      <p className='flex gap-2 font-bold mb-8 items-baseline'>
        Estoy a un mensaje de distancia <Send className="relative top-1"/>
      </p>
      <ContactForm/>
    </section>
  )
}

export default ContactSection