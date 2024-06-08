// import {profile} from 'console'
import React from 'react'
import Image from 'next/image'
// import './styles.css'


async function getprofile()
{
     //const res=await fetch('https://reqres.in/api/users?page=2')
   const res=await fetch('https://jsonplaceholder.typicode.com/users')
    const profile=await res.json()
    
    

    return profile
}

export default async function Page() {
    const profiles = await getprofile()
    return (<div>

        {
        profiles.map((profile) => (
           
            <div  key={profile.id} className=' bg-slate-900 w-full  m-2'>
                <span>
                    <h1>1.Name:{profile.name}</h1>
               
                   <h1> 2.Username:{profile.username}</h1>
                   <h1> 3.Email:{profile.email}</h1>
                   </span>
                   <span>
                   <h2>4.Address:</h2>
                   </span>
                   {profile.address && (
                   
                        <div className='addressSection'>
                             <span>
                    <p>4.1 Street:{profile.address.street}</p>
                   <h1> 4.2 Suite:{profile.address.suite}</h1>
                    <h1>4.3 City:{profile.address.city}</h1>
                    <h1>4.4 Zipcode:{profile.address.zipcode}</h1>
                    </span>
                    <h2>5.Geo:</h2>
                    {profile.address.geo && (
                        <div className='nestedSection'>
                           <h1>5.1 Latitude: {profile.address.geo.lat}</h1>
                           <h1> 5.2 Longitude:{profile.address.geo.lng}</h1>
                        </div>
                    )}
                    </div>
                     )}
                   
                    <h1>6. Phone:{profile.phone}</h1>
                    <h1>7. Website:{profile.website}</h1>
                    <br></br>
                   
                     
                   
                   
                    
                    
                </div>
        ))}
            </div>
        );
}

