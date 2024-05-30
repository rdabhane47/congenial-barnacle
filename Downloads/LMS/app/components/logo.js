import React from 'react'
import Image from 'next/image';

const Logo= () => {
  return (
    <div className='logo h-16 w-16 alt="logo'>
    <img src='/logo.jpg' width={20} height={20}></img>
    </div>
  )
}

export default Logo