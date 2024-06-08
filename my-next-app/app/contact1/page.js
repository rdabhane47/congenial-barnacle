import React from 'react'

const page = () => {
    return (
        <div className='container  my-24 mx-auto md:px-6 '>
            <section className='mb-32'>

                <div className='flex flex-wrap'>
                    <div className='mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6'>
                        <h2>Contact Us</h2>
                        <p>dfgdgdty ghgghfgfgh hghghghg bvhhhh fhgfyfyu ssers jjkhukhu xsdgf tftfyu vcbcbcb</p>
                        <p>dfgdgdty ghgghfgfgh hghghghg bvhhhh fhgfyfyu ssers jjkhukhu xsdgf tftfyu vcbcbcb</p>
                    </div>
                    <div className='mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 container box-border'>
                        <form>
                            <div className='relative mb-6'>
                                <input type='text' id='fname' name='fname' placeholder='Enter your First Name : ' />
                                {/* <label>First Name</label> */}
                            </div>
                            <div className='relative mb-6' >
                                <input type='text' id='lname' name='lname' placeholder='Enter your Last Name : ' />
                                {/* <label>Last Name</label> */}
                            </div>
                            <button type="button" className='mb-6 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Send'> Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default page