


'use client';

import React from 'react';
import Logo from './components/logo';
import NavLink from './components/navBar';
//import ButtonBase from "@material-@mui/material/ButtonBase"
// import Button from 'material-ui/Button';

const Page = () => {
 
  return (
    <div className="min-h-screen ">
      <header className="bg-black text-white sticky top-0 z-20 mx-auto flex w-full items-center flex-wrap justify-between p-5">
        {/* <Logo />
        <NavLink /> */}
      </header>
      <main className="container mx-auto p-5">
       
        <div className="relative bg-cover bg-center h-screen " style={{ backgroundImage: 'url(/laptop.jpg)' }}>
          {/* <div className="absolute inset-0 bg-black opacity-50 "></div> */}
          <div className="relative z-10 text-white p-5   ml-auto ">
            <h1 className="text-5xl font-bold  ">Benefits to Join Our Classes</h1>
            <ul className="mt-5 space-y-3 text-xl list-disc ">
              <li>Personality Development</li>
              <li>Career Advice</li>
              <li>Apti + Reasoning</li>
              <li>English Speaking</li>
              <li>Business Language</li>
              <li>Placement Support</li>
            </ul>
          </div>
          
        </div>
        <div className="mt-10 max-w-lg mx-auto text-center">
          <p className="text-3xl font-semibold leading-relaxed text-red-600">
            Students who want to transform their careers into the IT sector.
          </p>
          <div className='flex  p-4'>
            <button  className='h-10 w-40 bg-slate-50 text-black' >Engineering</button>
            <button className='h-10 w-40 bg-slate-500 text-white'>Diploma</button>
            <button className='h-10 w-40 bg-slate-950 text-white'>11th / 12th</button>
            <button className='h-10 w-40 bg-red-600 text-black'>10th</button>
          </div>


        </div>

      </main>
    </div>
  );
};

export default Page;
// 'use client'
// import React, { useState } from 'react'

// const page = () => {
//   const [marks,setMarks]=useState(60)
//   return (
//     <>
//     <h1>my marks were {marks}</h1>
//     <button onClick={()=>{setMarks(33)}}>update</button>
//     </>
//   )
// }

// export default page