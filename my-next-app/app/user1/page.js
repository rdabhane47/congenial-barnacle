import React from 'react'
import UserList from './userList'

async function getprofile()
{
    const res=await fetch('https://dummyjson.com/users')
    const profile=await res.json()
    // console.log(profile)
    return profile;
}

export default async function Page() {
    const profiles=await getprofile();
  return (
   <div>
   <UserList data1={profiles.users}/>
   
   </div>
  );
}

