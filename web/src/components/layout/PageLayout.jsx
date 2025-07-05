function PageLayout({children}) {
  return (
    <div className='w-[80%] mx-auto max-w-screen-xl space-y-26'>
      {children}
    </div>
  )
}

export default PageLayout