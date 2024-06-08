'use client'
import { motion } from "framer-motion";
import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
// import './styles.css';


const NavLink = () => {

  const links = [


    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' },
    { href: '/services', label: 'Services' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/products', label: 'Products' },
    { href: '/users', label:'Users'},
    { href: '/user1', label:'User1'},
    { href: '/contact1', label:'Contact1'}

    
  ]
  const path = usePathname();

  return (
    <header className="header-main ">
      <div className="header-main-logo bg-yellow-600 p-4 flex justify-between items-center w-full">
        <Link href='/' passHref className=' p-2' >
          <img src='/logo.png' width='70px' height='70px' alt='Logo' />
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
