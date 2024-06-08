import Details from './details'

async function getprofile()
{
    const res=await fetch('https://dummyjson.com/users')
    const profile=await res.json()
    // console.log(profile,'1234')
    return profile
}

export default async function Page({params}){

    const {userDetails}=params;
    const profiles=await getprofile();

    const singledata=profiles.users.filter((ele)=>ele.id==userDetails)
    return(

        <div>

            <Details data1={singledata}/>
        </div>
    );

}