import React from 'react'



  async function getprofile()
  {
    const res=await fetch('https://dummyjson.com/users');
    const profile=await res.json();
    // console.log(profile,'12')
    return profile;

  }
  export default async function Page()
  {
    
    const profiles=await getprofile()
    return (<div className='flex m-3'>
    
{
          profiles.users.map((profile)=>(

            <div key={profile.id} > 
            <img src={profile.image} className='w-10 h-10'/>
           <h2>Full Name:  {profile.firstName} {profile.maidenName} {profile.lastName}</h2>
           
           <h1>Age: {profile.age}</h1>
           <h1>Gender: {profile.gender}</h1>
           <h1>Email: {profile.email}</h1>
           <h1>UserName: {profile.username}</h1>
           <h1>PassWord: {profile.password}</h1>
           <h1>BirthDate: {profile.birthDate}</h1>
           <h1> BloodGroup:{profile.bloodGroup}</h1>
           <h1>Height: {profile.height}</h1>
           <h1>Weight: {profile.weight}</h1>

          
           </div>
          ))
        }
        
      </div>
    )
  }
 


