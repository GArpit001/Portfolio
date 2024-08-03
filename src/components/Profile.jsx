import React, { useState } from 'react'
import Avtar from "../assets/img/avtar.jpeg"
import Gmail from "../assets/img/Gmail.png"
import Phone from "../assets/img/Phone.png"
import Birth from "../assets/img/birth.png"
import Location from "../assets/img/Location.png"

const Profile = () => {

    const [show, setShow] = useState(false)

    const handleContact = () => {
        setShow(!show)
    }


    return (
        <div className='relative max-xl:overflow-x-hidden'>
            <div className=' pro flex flex-col items-center border border-1 max-h-[700px] border-[#383838] text-white bg-[#1e1e1f] rounded-3xl  pt-10 pb-3 w-[25vw] max-xl:w-[100%] transition-all ease-in duration-150'>
                <div className='max-xl:flex max-xl:w-[100%] max-xl:px-8 relative'>

                    <div className='text-center'>
                        <img src={Avtar} className='w-40 rounded-3xl' alt="" />
                    </div>

                    <div className='text-center max-xl:ml-8 max-xl:flex max-xl:flex-col max-xl:gap-4 mt-2'>
                        <h1 className='text-3xl  font-semibold whitespace-nowrap'>
                            Arpit Verma
                        </h1>

                        <span className='bg-[#161617] max-2xl:text-base whitespace-nowrap p-1 rounded-lg text-[#ffdb70] mt-4 max-xl:mt-1 block'>
                            Web Developer
                        </span>
                    </div>

                    <div className='absolute right-[9px] top-[-40px]'>
                        <button className='border border-1 bg-[#14141437]  border-[#989797ca] border-r-0 border-b-0 rounded-tr-lg rounded-bl-xl py-2 px-4  text-[#ffdb70] max-md:hidden max-xl:block hidden' onClick={handleContact}>

                            {
                                show ? "Hide Content" : "Show Contact"
                            }

                        </button>
                        <button className='border border-1 bg-[#14141437] border-[#60606094] border-r-0 border-b-0 rounded-tr-lg rounded-bl-xl py-2 px-4  text-[#ffdb70] max-xl:hidden max-md:block hidden' onClick={handleContact}>

                            {
                                show ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>
                            }

                        </button>
                    </div>

                </div>


                <span className={`border-[1px] border-[#77797b] w-[15vw] my-6 px-2 max-xl:w-[80vw] block transition-all ease-in duration-150 ${show ? "max-xl:block" : "max-xl:hidden"}`}>

                </span>



                <div className={`max-xl:pt-4 block transition-all ease-in duration-150 ${show ? "max-xl:block " : "max-xl:hidden"} `}>


                    <div className='px-6 justify-between flex flex-col gap-2 overflow-y-scroll aniscroll max-xl:flex-row max-xl:flex-wrap   '>

                        <div className='flex  items-center '>
                            <div className='w-[60px]'>
                                <img src={Gmail} alt="" />
                            </div>

                            <div className=''>
                                <h1 className='text-base text-gray-400'>Email</h1>
                                <a href='mailto:arpitvermaetw@gmail.com'>
                                    <h1 className='text-sm'>arpitvermaetw@gmail.com</h1>
                                </a>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div className='w-[60px]'>
                                <img src={Phone} alt="" />
                            </div>

                            <div className=''>
                                <h1 className='text-base text-gray-400'>Phone</h1>
                                <a href="tel:+918864842661">
                                    <h1 className='text-sm'>(+91) 8864842661</h1>
                                </a>

                            </div>
                        </div>


                        <div className='flex items-center'>
                            <div className='w-[60px]'>
                                <img src={Birth} alt="" />
                            </div>

                            <div className=''>
                                <h1 className='text-base text-gray-400'>Birthday</h1>
                                <h1 className='text-sm'>January 5, 2023</h1>
                            </div>
                        </div>

                        <div className='flex items-center'>
                            <div className='w-[74px]'>
                                <img src={Location} alt="" />
                            </div>

                            <div className=''>
                                <h1 className='text-base text-gray-400'>Location</h1>
                                <a href="https://maps.app.goo.gl/cHdgzgJvnUVsw5nJ8">
                                    <h1 className='text-sm'>43, Shaha Mehmood Etawah, Uttar Pradesh ,India (206001)</h1>
                                </a>

                            </div>
                        </div>




                    </div>


                    <span className='  border-[1px] border-[#77797b] w-[15vw] my-4 ml-5 px-2 hidden max-xl:block max-xl:w-[80vw] '>

                    </span>

                    <div className=' flex justify-center gap-2'>
                        <span className='text-gray-400 p-3 rounded-full '>
                            <a href="https://www.instagram.com/princeverma2754/" target='_blank'>
                                <i className="fa-brands fa-instagram"></i>
                            </a>
                        </span>
                        <span className='text-gray-400 p-3 rounded-full '>
                            <a href="https://github.com/PRCreation001" target="_blank">
                                <i className="fa-brands fa-github"></i>
                            </a>
                        </span>
                        <span className='text-gray-400 p-3 rounded-full '><i className="fa-brands fa-facebook"></i></span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Profile