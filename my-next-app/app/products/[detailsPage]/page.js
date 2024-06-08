



import Details from './details'

async function getProfile() {
    const res = await fetch('https://dummyjson.com/products');
    
    const profile = await res.json();
    // console.log(profile,"data fetched");
    return profile;
}

 
 export default async function Page({params}) {
  const {detailsPage} = params;
  
const profiles = await getProfile()
const singledata= profiles.products.filter((ele)=>ele.id == detailsPage )

   
return (
        <div>
            <Details data1={singledata} />

        </div>
    );
}
// export default function Page({data2}) {
    
//     const router = useRouter();
//     const [filteredData, setFilteredData] = useState(null);
//     const list1 = data2;
//     console.log(list1);
//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const profile = await getProfile();
//                 if (router.list1.id) {
//                     const filteredData = profile.filter((profile) => profile.id === router.list1.id);
//                     setFilteredData(filteredData);
//                 } else {
//                     console.error("No id parameter provided.");
//                 }
//             } catch (error) {
//                 console.error("Error fetching data:", error);
//             }
//         };

//         fetchData();
//     }, [router.list1]);

//     return (
//         <div>
//             <h1>Details Page</h1>
//             {filteredData ? (
//                 <div>
//                     {/* Render your details using filteredData */}
//                     <pre>{JSON.stringify(filteredData, null, 2)}</pre>
//                 </div>
//             ) : (
//                 <p>Loading...</p>
//             )}
//         </div>
//     );
// }

