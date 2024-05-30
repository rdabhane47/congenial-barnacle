'use client'

import Login from './login'
import React from 'react'
import {getAuth,onAuthStateChanged} from "firebase/auth"
import {app} from '../config';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';




const Page = () => {
    const router=useRouter();
    const auth =getAuth(app);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user)
                {
                    router.push('./dashboard');
                }
        });
    },[auth,router]);
    
    return (
    <main className='flex min-h-screen flex-col items-center p-12 '>
        <h1 text-4xl font-bold mb-10>Firebase Otp Sign In</h1>
        <Login/>
    </main>
  )
}

export default Page