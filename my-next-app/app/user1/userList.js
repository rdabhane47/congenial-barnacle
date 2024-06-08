// import { profile } from 'console';
import React from 'react'
import  Link  from 'next/link';
import Image from 'next/image';

const UserList = ({data1}) => {
    const list = data1;
    // console.log(list);
  return (
    <div className='bg-slate-600  p-4 '> 
<h2 className='text-center font-extrabold text-4xl mb-4'> USER LIST</h2>    
<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>



        { 
           list.map((profile)=>(


            <Link href={`/user1/${profile.id}`} key={profile.id}>
            <div className=''>

            <Image srcset={profile.image} width ={12} height={12} layout='responsive' objectFit='fill' className='rounded-full '/>
           <p className='font-serif text-center from-stone-950 '> {profile.firstName} {profile.maidenName} {profile.lastName}</p>
           {/* <p className='text-end'>for more info Click Here..</p> */}


            </div>
             </Link>

         )
           )
        }
    </div>
    </div>
  )
}

export default UserList;