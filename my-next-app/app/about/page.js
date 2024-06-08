
import React from 'react'
 
import Link from 'next/link'
import './styles.css';


const About = () => {
 




    return (

      <div className='bg-slate-900 flex flex-col h-screen justify-centre items-center'>
          
          <h1 className='text-7xl font-mono text-center px-3 py-3 '>About Us</h1>
        
          <div className='flex justify-center'>
          <img src='/1.jpg' height='700px' width='700px'  className=' '></img>
          </div>
         
          <p className='text-4xl text-center px-3 py-3 '>What We Are All About</p> 
        
       
          <p className='text-lg text-center px-3 py-3'>Welcome to Mastishkam India, your trusted career counseling company with 6 years of experience in diverse edtech domains. We pride ourselves on offering top-notch career counseling services to students, guiding them towards a successful future.</p>
         {/* <iframe src='./contact'></iframe> */}

      </div>
      
     
      // <div className="   bg-slate-900 gap-2 justify-items-center  ">
      //    <h1 className='text-7xl font-mono '>About Us</h1>
      // <img src='/1.jpg' height='700px' width='700px' ></img>
         
         
      //    <p className='text-4xl '>What We Are All About</p> 
      //   <p className='text-lg'>Welcome to Mastishkam India, your trusted career counseling company with 6 years of experience in diverse edtech domains. We pride ourselves on offering top-notch career counseling services to students, guiding them towards a successful future.</p>
      //  </div>
       
        
        
        
    
    
        

    )
    
   
  }

export default About