
'use client'
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';



const NavLink = () => {

  const links = [


    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contactus', label: 'Contact Us' },
    { href: '/courses', label: 'Courses' },
    {
        href:'/login' ,label:'Login'
    }
    

    
  ]
  const path = usePathname();

  return (
    <header className="header-main ">
        <div className="flex p-4 justify-between"> 
      {/* <div className="header-main-logo bg-yellow-600 p-4 flex justify-between items-center w-full"> */}
        <Link href='/' passHref className=' p-2' >
          <div className="my_bg_image"></div>
        </Link>
        <nav className="header-main-nav flex justify-end gap-5 pt-5">
          <ul className=" flex gap-4">
            {

              links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <ul>
                      <h1> {link.label}</h1>
                      {link.href === path && <motion.div layoutId="underline" className="underline h-[2px] bg-white"></motion.div>}
                    </ul>
                  </Link>
                </li>
              ))
            }
          </ul>


        </nav>



      </div>





    </header>


  )
}
export default NavLink;
