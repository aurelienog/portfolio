import React from 'react'

function PageLayout({children}) {
  return (
    <div className='w-[80%] mt-[var(--header-height)] mx-auto max-w-screen-xl'>
      {children}
    </div>
  )
}

export default PageLayout