import React, { Children } from 'react'

function GradientLayout( {children}) {
  return (
<div className="min-h-screen w-full bg-[#fef9f7] relative">
  {/* Warm Soft Coral & Cream */}
  <div
    className="absolute inset-0 z-0"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 80%, rgba(255, 160, 146, 0.25) 0%, transparent 50%),
        radial-gradient(circle at 80% 20%, rgba(255, 244, 228, 0.3) 0%, transparent 50%),
        radial-gradient(circle at 40% 40%, rgba(255, 160, 146, 0.15) 0%, transparent 50%)`,
    }}
  />
    <div className='pointer-events-none w-full h-[1px] absolute top-1 left-0 z-50' id="sticky-trigger" aria-hidden></div>
    {children}
</div>
  )
}

export default GradientLayout