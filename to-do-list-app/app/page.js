// 'use client'

// import React, { useState } from 'react'

// const page = () => {
//   const [title,settitle]=useState("")
//   const [desc,setdesc]=useState("")
//   const [maintask,setmaintask]=useState([])
//   const submitHandler =(e)=>{
//     e.preventDefault()
//     setmaintask([...maintask,{title,desc}])
//     console.log(title)
//     console.log(desc)
//     console.log(maintask)
//     settitle("")
//     setdesc("")
//     console.log(maintask) }

   
// let renderTask=<h2>No task availavle</h2>

// if(maintask.length>0){
//   renderTask=maintask.map((t,i)=>{
//     const deleteHandler =() =>{
//       let copytask=[...maintask]
//         copytask.splice(i,1)
//         setmaintask(copytask)
      
//           }
//     return  (
//       <form >
//       {/* <li key={i} className='flex items-center justify-between mb-8'> */}
//     {/* <div className='flex gap-4 mb-5 w-2/3 justify-between'> */}
  
//     <h1 className='text-2xl font-semibold required'>{t.title}</h1>
//     <p className='text-lg font-medium required'>{t.desc}</p>
//     {/* </div> */}
//      <button onClick={()=>
//       deleteHandler(i)
//      }
//       className='px-4 py-2 bg-red-400 text-white mb-5'>Delete</button> 
//     {/* </li> */}
//     </form>
  
//     );
  
//   });}
  
//   return (
//     <>
//     <h1 className='bg-gray-700 text-2xl text-center font-bold p-5'>My TO - DO LIST</h1>
    

//     <form onSubmit={submitHandler}>
//       <input type='text' className='text-xl text-black border-zinc-800 border-2 m-5 p-5 px-4 py-2 '  placeholder="Enter task here" 
//       value={title} 
//       onChange={(e)=>{
//         settitle(e.target.value)
//       }}/>
//       <input type='text' className='text-xl text-black border-zinc-800 border-2 m-5 p-5 px-4 py-2 '  placeholder="Enter Description here" 
//       value={desc}  
//       onChange={(e)=>{setdesc(e.target.value)}}/>
//       <button className='bg-gray-700 text-white m-5 px-4 py-2 text-2xl font-bold  rounded ' >Add Task</button>
//     </form>
//     <hr/>
//     <div className='p-8 bg-slate-500'>
     
// <ul>
//   {
//  renderTask
//   }
// </ul>
     
//     </div>
//     </>
//   )
// }

// export default page

import React from 'react';

// import Logo from './components/logo';
// import NavBar from './navBar';

const Page = () => {
  return (
    <div>
     
   
  <header className='bg-dark-backgroun sticky top-0 z-20 mx-auto flex w-full items-center flex-wrap justify-between'>
  <div className='logo h-16 w-16 alt="logo'>
    <img src='/logo.jpg'></img>
    </div>
    
  {/* <Logo />
  <NavBar /> */}

  </header>
    </div>
  )
}

export default Page