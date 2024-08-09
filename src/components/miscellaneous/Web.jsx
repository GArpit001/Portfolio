import React from 'react'
import iNoteBook from "../../assets/img/iNotebook 2.jpg"

const Web = () => {
    return (
        <div className='w-[100%] h-[100vh]  p-5 flex gap-5'>

            <div>


                <div className="project w-[28vw] h-[45vh] p-2 border border-1 border-[#ffdb70a8] rounded-xl relative ">

                    <div className='flex justify-center items-center w-[27.8vw] h-[44.5vh] bg-black absolute top-0 left-0 rounded-xl z-10  hover:z-0 opacity-75 transition-all duration-100'>
                        <div className=' bg-[#ffdb70] p-2 flex justify-center items-center rounded-lg '>
                            <i className="fa-solid fa-eye text-red-500 "></i>
                        </div>

                    </div>

                    <a href="https://your-inote-book.netlify.app" target='_blank'>
                        <img src={iNoteBook} className='w-full h-full rounded-2xl p-2 absolute top-0 left-0 z-0 hover:z-10' alt="" />
                    </a>


                </div>

                <div>
                    <p>
                        {/* Hello This is a first iNoteBook Cloud project */}
                    </p>
                </div>

            </div>

            <div>


                <div className="project w-[28vw] h-[45vh] p-2 border border-1 border-[#ffdb70a8] rounded-xl relative ">

                    <div className='flex justify-center items-center w-[27.8vw] h-[44.5vh] bg-black absolute top-0 left-0 rounded-xl z-10  hover:z-0 opacity-75  transition-all duration-100'>
                        <div className=' bg-[#ffdb70] p-2 flex justify-center items-center rounded-lg '>
                            <i className="fa-solid fa-eye text-red-500 "></i>
                        </div>

                    </div>

                    <a href="https://your-inote-book.netlify.app" target='_blank'>
                        <img src={iNoteBook} className='w-full h-full rounded-2xl p-2 absolute top-0 left-0 z-0 hover:z-10' alt="" />
                    </a>


                </div>

                <div>
                    <p>
                        {/* Hello This is a first iNoteBook Cloud project */}
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Web