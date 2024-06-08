
const Details = ({ data1 }) => {
    const list = data1;
    return (

        <div className="container mx-auto py-8 px-4">
            
            {

                list.map((profile) => (

                    <div className="bg-gray-800 shadow-md min-h-screen rounded-lg p-8 mb-8">
                         <img src={profile.image} className="w-24 h-24 rounded-full mr-4 "/>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
                     
                        <div className=" mr-7 ml-7">
                            <h2 className="font-semibold text-xl mb-4">Personal Information</h2>

                            <p><strong>Full Name: </strong> {profile.firstName} {profile.maidenName} {profile.lastName}</p>
                            <p><strong>Age:</strong>{profile.age}</p>
                            <p><strong>Age:</strong> {profile.age}</p>
                            <p><strong>Gender:</strong> {profile.gender}</p>
                            <p><strong>Email:</strong> {profile.email}</p>
                            <p><strong>Username:</strong> {profile.username}</p>
                            <p><strong>Password:</strong> {profile.password}</p>
                            <p><strong>Birth Date:</strong> {profile.birthDate}</p>
                            <p><strong>Blood Group:</strong> {profile.bloodGroup}</p>
                            <p><strong>Height:</strong> {profile.height}</p>
                            <p><strong>Weight:</strong> {profile.weight}</p>
                            <p><strong>Eye Color:</strong> {profile.eyeColor}</p>
                            <p><strong>Hair:</strong> 
                            {profile.hair && (
                                <div>
                                    <p><strong>Color:</strong>{profile.hair.color}</p>
                                    <p><strong>Type:</strong>{profile.hair.type}</p>
                                </div>
                            )}</p>
                        </div>
                        <div className="mr-7 ml-7">
                        <h2 className="font-semibold text-xl mb-4"> Contact Information </h2>
                       
                       <p><strong>Domain:</strong>{profile.domain}</p>
                       <p><strong>ip:</strong>{profile.ip}</p>   
                           
                           
                            
                            <p><strong>Address:</strong> 

                            {profile.address && (
                                <div>
                                    <p><strong>Address:</strong>{profile.address.address}</p>
                                    <p><strong>City:</strong>{profile.address.city}</p>
                                    <p><strong>Postal Code:</strong>{profile.address.postalCode}</p>
                                    <p><strong>State:</strong>{profile.address.state}</p>


                                </div>

                            )}</p>


                            

                            <p> <strong>Co-Ordinates :</strong>
                            {profile.address.coordinates && (

                                <div>
                                    <p><strong>Latitude:</strong>{profile.address.coordinates.lat}</p>
                                    <p><strong>Longitude:</strong>{profile.address.coordinates.lng}</p>
                                </div>



                            )}</p>
            
                        
                            <p><strong>Mac Address: </strong>{profile.macAddress}</p>
                            <p><strong>University:</strong> {profile.university}</p>
                            </div>
                            <div>
                            <h2 className="text-xl font-semibold mb-4">Bank Information</h2>

                            <p><strong>Bank :</strong> {profile.bank && (
                                <div>
                                    <p><strong>Card Expiry:</strong> {profile.bank.cardExpire}</p>
                                    <p><strong>Card Number:</strong> {profile.bank.cardNumber}</p>
                                    <p><strong>Card Type:</strong> {profile.bank.cardType}</p>
                                    <p><strong>Currency:</strong> {profile.bank.currency}</p>
                                    <p><strong>Iban:</strong> {profile.bank.iban}</p>
                                </div>

                            )}</p> 
                        </div>
                        <div className="mr-7 ml-7">
                        <h2 className="font-semibold text-xl mb-4"> Company Information </h2>
                            
                            {profile.company.address && (
                                <div>
                                    <p><strong>Address: </strong>{profile.company.address.address}</p>
                                    <p><strong>City: </strong>{profile.company.address.city}</p>
                                </div>
                            )}
                            {profile.company.address.coordinates && (
                                <div>
                                    <p><strong>Latitude:</strong> {profile.company.address.coordinates.lat}</p>
                                    <p><strong>Longitude:</strong> {profile.company.address.coordinates.lng}</p>
                                </div>
                            )}
                            {profile.company.address &&(<div>

                                <p><strong>Postal Code:</strong> {profile.company.address.postalCode}</p>
                            <p><strong>State: </strong>{profile.company.address.state}</p>
                            </div>)}
                            
                            <p> <strong>Department :</strong> {profile.company.department}</p>
                            <p><strong>Name: </strong> {profile.company.name}</p>
                            <p> <strong>Title:</strong> {profile.company.title}</p>
                            <p> <strong>EIN: </strong>{profile.ein}</p>
                            <p> <strong>ssn:</strong> {profile.ssn}</p>
                            <p> <strong>user agent:</strong> {profile.userAgent}</p>

                            </div>
                            <div>
                            <h2 className="text-xl font-semibold mb-4">Crypto Information</h2>
                           
                                {profile.crypto && (
                                    <div>
                                        <p><strong>Coin :</strong> {profile.crypto.coin}</p>
                                        <p><strong>Wallet :</strong> {profile.crypto.wallet}</p>
                                        <p><strong>Network :</strong> {profile.crypto.network}</p>
                                    </div>
                                )}

                         
                            

                        </div>
                    </div>
</div>

                ))
            }
        </div>
       

    )
}
export default Details