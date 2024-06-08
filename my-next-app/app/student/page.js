'use client'

import React from 'react'


import Link from 'next/link';

export default  function Student()
{
  return (


    <div>
        <h1>Student List</h1>
        <ul>
                <li>  
                <Link href="/student/Rahi">Anil</Link>
                </li>
                <li>  
                <Link href="/student/ram">Ram</Link>
                </li>
                <li>  
                <Link href="/student/shyam">Shyam</Link>
                </li>
                <li>  
                <Link href="/student/sagar">Sagar</Link>
                </li>
                
        </ul>
        </div>
  
    )
}

