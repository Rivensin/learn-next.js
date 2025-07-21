import React, { ComponentPropsWithRef } from 'react'

type Button = ComponentPropsWithRef<'button'>

function Button({children,className,...props} : Button) {
  return (
    <button
      className={`mt-3 text-md text-center bg-black text-white w-36 h-12 hover:shadow-2xl hover:bg-black/80 duration-300 ease-out transition-all rounded cursor-pointer ${className}`} 
      {...props} 
      >
      {children}
    </button>
  )
}

export default Button