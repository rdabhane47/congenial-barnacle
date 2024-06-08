import React from 'react'
import Image from 'next/image';

const Details = ({ data1 }) => {
   
    const list = data1;
    // console.log(list,'1234');
    return(
        
        // list.map((profile) => ( 
            
    
    <div className='container px-4 py-8 mx-auto bg-white'  >

        {
            list.map((profile, index) => (
                <div key={index} className='mb-8'>
                    <div className=" flex flex-wrap items-center justify-center mb-4 ">
                    {/* Mapping over the array of images for each profile */}
                    {profile.images.map((image, imageIndex) => (
                        <div key={imageIndex} className='w-48 h-48 mr-4 mb-4 overflow-hidden rounded-lg shadow-lg shadow-black '>
                            <Image className='object-fill'
                                src={image} 
                                alt={`Image ${imageIndex + 1}`} 
                                width={300} 
                                height={300} 
                                
                            />
                        </div>
                    ))}
                    </div>
                <div className='text-lg font-semibold mb-2'>
                {profile.title}</div>

                <div className="text-gray-700 mb-2"> {profile.description}</div>
                <div className="flex flex-wrap items-center justify-between text-gray-700 mb-2">
                        <div>
                            <p>Price: ${profile.price}</p>
                            <p>Discount: {profile.discountPercentage}%</p>
                        </div>
                        <div>
                            <p>Rating: {profile.rating}</p>
                            <p>Stock: {profile.stock}</p>
                        </div>
                    </div>

                    <div className="text-gray-700 mb-2">
                        <p>Brand: {profile.brand}</p>
                        <p>Category: {profile.category}</p>
                    </div>
                    <div className="text-gray-700 mb-2"> Thumbnail:
                        {/* Display thumbnail image */}
                        <img 
                            src={profile.thumbnail} 
                           
                            width={100} 
                            height={100} 
                        />
                    </div>

                {/* <h1> thumbnail: <img src={profile.thumbnail} width={100} height={100}/></h1>
                 */}
                </div>
                

            ))
        }
         
           
                            </div>
                        
        
    ) 
}

export default Details