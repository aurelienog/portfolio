function PageLayout({children}) {
  return (
    <div className='w-[80%] relative mx-auto max-w-screen-xl'>
      {children}
      <div className='pointer-events-none w-full h-[1px] absolute top-[500px] left-0 z-50' id="sticky-trigger" aria-hidden></div>
    </div>
  )
}

export default PageLayout