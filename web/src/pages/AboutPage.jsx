import React from 'react'
import meImg from '../assets/images/meOffice.webp';
import PageLayout from '../components/layout/PageLayout'

function AboutPage() {
  return (
    <PageLayout>
      <section className="mx-auto md:grid grid-cols-2">
        <article>
          <h2>Work in progress</h2>
        </article>
        <figure className='bg-blue-100 h-[40rem] hidden relative'>
          <img src={meImg} alt="hero-portrait" className={`absolute h-full object-cover [-webkit-mask-image:url(mask1.png)] [-webkit-mask-size:auto_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:140%-1rem] `} />
        </figure>
      </section>
    </PageLayout>

  )
}

export default AboutPage