import React from 'react'

const Footer = () => {
    return (
        <footer className=' brand h-30 bg-yellow-600 justify-end'>
            {/* <div className='mx-auto gap-10 flex p-10'>
                <div className=' justify-start grid-cols-2'>
                    <h1>Made with 💖 by RAHI</h1>
                </div>

                <div className=' p-5 justify-end'>
                    <ul className='flex gap-3 p-3'>

                        <li><a href='www.instagram.com'><img src='./instagram.jpg' alt='Instagram' width={20} height={20} /></a></li>
                        <li><a href='www.facebook.com'><img src='./facebook.jpg' alt='Facebook' width={20} height={20} /></a></li>
                        <li><a href='www.twitter.com'><img src='./twitter.jpg' alt='Twitter' width={20} height={20} /></a></li>
                    </ul>
                </div>
            </div> */}



            <div className='bg-stone-300 content-center grid justify-center items-center'>
                <div className='flex gap-5 p-5'>

                    <div className='mx-2 mt-5 text-black p-2 gap-5 items-center'>
                        <p >Made with 💖 by RAHI</p>
                    </div>

                    {/* <div className='mx-2 mt-5 text-black p-2 gap-5 items-center'>
                        <ul className='gap-2 p-2 flex'>
                            <li><a href='www.instagram.com'><img src='./instagram.jpg' alt='Instagram' width={20} height={20} /></a></li>
                            <li><a href='www.facebook.com'><img src='./facebook.jpg' alt='Facebook' width={20} height={20} /></a></li>
                            <li><a href='www.twitter.com'><img src='./twitter.jpg' alt='Twitter' width={20} height={20} /></a></li>
                        </ul>
                    </div> */}
                    <div className='justify-end text-black p-2 flex gap-5 mx-2 mt-5 items-center'>
                        <a href='./' >HOME</a>
                        <a href='./about' >About</a>
                        <a href='./contactus' >Contact Us</a>
                        <a href='./courses' >Courses</a>
                       
</div>
                </div>
            </div>

        </footer>
    )
}


export default Footer

