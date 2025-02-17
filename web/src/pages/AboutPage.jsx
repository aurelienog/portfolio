import React from 'react'
import meImg from '../assets/me.png';
import PageLayout from '../components/layout/PageLayout'

function AboutPage() {
  return (
    <PageLayout>
      <section className=" md:grid grid-cols-2">
        <article>
          <h1 className="text-5xl font-bold">De la gestión al código: un camino estructurado hacia el desarrollo web</h1>
        </article>
        <figure className='bg-blue-100 h-[40rem] relative'>
          <img src={meImg} alt="hero-portrait" className={`absolute h-full object-cover [-webkit-mask-image:url(mask1.png)] [-webkit-mask-size:auto_100%] [-webkit-mask-repeat:no-repeat] [-webkit-mask-position:140%-1rem] `} />
        </figure>
      </section>
    </PageLayout>

  )
}

export default AboutPage