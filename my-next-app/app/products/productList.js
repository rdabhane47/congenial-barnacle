'use client'

import React, { useState } from 'react';
import { Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import ReactPaginate from 'react-paginate';

const ProductList = ({ data1 }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8; // Adjust the number of items per page as needed

    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedData = data1.slice(startIndex, endIndex);

    const pageCount = Math.ceil(data1.length / itemsPerPage);

    return (
        <div className='max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 py-10'>
            {displayedData.map((profile) => (
                <Link href={`/products/${profile.id}`} key={profile.id}>
                    <div className="border-[1px] border-gray-300 rounded-md overflow-hidden hover:border-gray-950 duration-300 h-70 w-70">
                        <Image srcset={profile.images[0]} alt={`First Image`} width="500" height="500" decoding="async" data-nimg="1" className="h-80 object-fill" />
                        <div className='px-4 pb-2 flex flex-col gap-2 w-100 h-80 p-4'>
                            <h1 className='font-bold text-2xl'>Title: {profile.title}</h1>
                            <h1 className='font-mono text-sm'>Description: {profile.description}</h1>
                            <h1 className='font-mono text-lg'>Price: ${profile.price}</h1>
                        </div>
                    </div>
                </Link>
            ))}
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                pageRangeDisplayed={5}
                className="flex gap-6 text- text-white py-3 justify-center f"
                previousClassName={"p-1 px-3 bg-gray-200 rounded-lg bg-green-600"}
                nextClassName={"p-1 rounded-lg px-5 rounded-full bg-green-600"}
                pageClassName={"rounded-full"}
                pageLinkClassName={"text-blue-700 mt-2 font-semibold block"}
                breakClassName={"px-4 py-2"}
            />
        </div>
    );
};

export default ProductList;
