import React from 'react'
import Re from "../../assets/pdf/Resume.pdf"

const Resume = () => {
  return (
    <>

      <div className=' my-10 pl-[5px] pr-16'>

        <div className='flex flex-col gap-6'>

          <div className='flex relative items-center '>
            <div className='ed after:max-md:h-[400px]  after:max-sm:h-[120vh]  bg-[#141414c1] w-[50px] h-[50px] flex justify-center items-center rounded-xl border border-1 border-r-0 border-b-0 border-[#60606094]'>
              <i className="fa-solid fa-book-open text-[#ffdb70] "></i>
            </div>
            <div className='ml-8'>
              <h1 className='text-2xl font-semibold'>
                Education
              </h1>
            </div>
          </div>


          <div className='flex  items-baseline '>
            <div className=' w-[50px] h-[50px] flex justify-center items-baseline ml-[2px] max-xl:ml-[2px] max-md:ml-[16px] max-sm:ml-[18px] '>
              <div className='flex justify-center items-center w-4 h-4 bg-[#5959595d] rounded-full'>
                <span className='inline-block z-10 w-2 h-2 bg-[#ffdb70cd]  rounded-full'>
                </span>
              </div>
            </div>
            <div className='ml-8'>
              <h1 className='text-lg font-semibold'>
                Gradution (CSJMU Kanpur University)
              </h1>
              <h1 className='font-normal text-[#ecc756]'>
                2020 - 2023
              </h1>
              <p >
                "Education is not the learning of facts, but the training of the mind to think.
              </p>
            </div>
          </div>



          <div className='flex  items-baseline '>
            <div className=' w-[50px] h-[50px] flex justify-center items-baseline ml-[2px]  max-xl:ml-[2px] max-md:ml-[16px] max-sm:ml-[18px]'>
              <div className='flex justify-center items-center w-4 h-4 bg-[#5959595d] rounded-full'>
                <span className='inline-block z-10 w-2 h-2 bg-[#ffdb70cd] rounded-full'>
                </span>
              </div>
            </div>
            <div className='ml-8'>
              <h1 className='text-lg font-semibold'>
                Intermediate (U.P. Board)
              </h1>
              <h1 className='font-normal text-[#ecc756]'>
                2019 - 2020
              </h1>
              <p>
                "Education is not the learning of facts, but the training of the mind to think.
              </p>
            </div>
          </div>



          <div className='flex  items-baseline '>
            <div className=' w-[50px] h-[50px] flex justify-center items-baseline ml-[2px] max-xl:ml-[2px] max-md:ml-[16px] max-sm:ml-[18px] '>
              <div className='flex justify-center items-center w-4 h-4 bg-[#5959595d] rounded-full'>
                <span className='inline-block z-10 w-2 h-2 bg-[#ffdb70cd] rounded-full'>
                </span>
              </div>
            </div>
            <div className='ml-8'>
              <h1 className='text-lg font-semibold'>
                High School (U.P. Board)
              </h1>
              <h1 className='font-normal text-[#ecc756]'>
                2018 - 2019
              </h1>
              <p>
                "Education is not the learning of facts, but the training of the mind to think.
              </p>
            </div>
          </div>

        </div>




        <div className='flex flex-col gap-4 mt-10'>

          <div className='flex relative items-center '>
            <div className='ed2 bg-[#141414c1] w-[50px] h-[50px] flex justify-center items-center rounded-xl border border-1 border-r-0 border-b-0 border-[#60606094]'>

              <i className="fa-solid fa-business-time text-[#ffdb70]"></i>
            </div>
            <div className='ml-8'>
              <h1 className='text-2xl font-semibold '>
                Experience
              </h1>
            </div>
          </div>


          <div className='flex  items-baseline '>
            <div className=' w-[50px] h-[50px] flex justify-center  ml-[2px]  '>
              <div className='flex justify-center items-center w-4 h-4 bg-[#5959595d] rounded-full'>
                <span className='inline-block z-10 w-2 h-2 bg-[#ffdb70cd]  rounded-full'>
                </span>
              </div>
            </div>
            <div className='ml-8'>
              <h1 className='text-xl font-semibold'>
                Fresher
              </h1>

            </div>
          </div>


        </div>




        <div className='flex flex-col gap-4 mt-10'>

          <div className='flex relative items-center '>
            <div className='ed2 bg-[#141414c1] w-[50px] h-[50px] flex justify-center items-center rounded-xl border border-1 border-r-0 border-b-0 border-[#60606094]'>
              <i className="fa-solid fa-dice-d20 text-[#ffdb70]"></i>
            </div>
            <div className='ml-8'>
              <h1 className='text-2xl font-semibold'>
                Hobbies
              </h1>
            </div>
          </div>


          <div className='flex  items-baseline '>
            <div className=' w-[50px] h-[50px] flex justify-center items-baseline ml-[2px] '>
              <div className='flex justify-center items-center w-4 h-4 bg-[#5959595d] rounded-full'>
                <span className='inline-block z-10 w-2 h-2 bg-[#ffdb70cd]  rounded-full'>
                </span>
              </div>
            </div>
            <div className='ml-8'>
              <h1 className='text-lg font-semibold'>
                Traveling
              </h1>
              <h1 className='font-normal text-[#ecc756]'>
                Coding
              </h1>

            </div>
          </div>


        </div>



      </div>
      <div className='flex justify-end'>
        <a href={Re} download="Arpit's Resume">

          <button className='border border-1 bg-[#14141437] border-[#60606094] border-r-0 border-b-0 py-3 px-6 rounded-lg my-8 text-[#ffdb70]' title='Downlaod Resume'>
            <i className="fa-solid fa-download"></i>  Download Resume
          </button>
        </a>
      </div>

    </>
  )
}

export default Resume