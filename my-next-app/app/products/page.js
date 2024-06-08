
// import {profile} from 'console'
import React from 'react'
import Image from 'next/image'
import Button from '@mui/material/Button';

import ProductList from '../products/productList.js'




async function getprofile() {

    const res = await fetch('https://dummyjson.com/products');
    const profile = await res.json()
    // console.log(profile)
    return profile
}

export default async function Page() {
    const profiles = await getprofile()

    
    return (
        <div>
            <ProductList data1={profiles.products} />

        </div>
    );
}
