import React from 'react'
import HTML from "../../assets/img/HTML5.svg.png"
import JS from "../../assets/img/js2.png"
import CSS from "../../assets/img/css-3.png"
import REACT from "../../assets/img/react.jpeg"
import TAILWINDCSS from "../../assets/img/tailwindcss.jpg"
import EXPRESS from "../../assets/img/express.jpeg"

const Skills = () => {
  return (
    <div className='skills flex justify-center items-center gap-28 flex-wrap'>

      <div className='inline-block'>
        <div>
          <img src={HTML} alt="HTML LOGO" />
        </div>
        <div className='bg-white inline-block w-full p-3'>
          <h1 className='text-gray-600 tracking-wider font-extrabold text-center'>
            HTML
          </h1>
        </div>
      </div>

      <div className='inline-block'>
        <div>
          <img src={CSS} className='w-[180px]' alt="CSS LOGO" />
        </div>
        <div className='bg-white inline-block w-full p-3'>
          <h1 className='text-gray-600 tracking-wider font-extrabold text-center'>
            CSS
          </h1>
        </div>
      </div>

      <div className='inline-block'>
        <div className='text-black font-extrabold text-5xl text-center'>
          <h1>
            JS
          </h1>
        </div>
        <div>
          <img src={JS} className='w-[160px]' alt="JS LOGO" />
        </div>
        <div className='bg-white inline-block w-full p-3'>
          <h1 className='text-gray-600 tracking-wider font-extrabold text-center'>
            JAVA SCRIPT
          </h1>
        </div>
      </div>


      <div className='inline-block'>
        <div className='text-black font-extrabold text-3xl text-center'>
          <h1>
            REACT
          </h1>
        </div>
        <div>
          <img src={REACT} className='w-[160px]' alt="REACT LOGO" />
        </div>
        <div className='bg-white inline-block w-full p-3'>
          <h1 className='text-gray-600 tracking-wider font-extrabold text-center'>
            REACT JS
          </h1>
        </div>
      </div>


      <div className='inline-block'>
        <div className='text-black font-extrabold text-3xl text-center'>
          <h1>
            TAILWIND
          </h1>
        </div>
        <div className='w-[160px]'>
          <img src={TAILWINDCSS} className='' alt="TAILWIND LOGO" />
        </div>
        <div className='bg-white inline-block w-[160px] p-3'>
          <h1 className='text-gray-600 tracking-wider font-extrabold text-center'>
            TAILWIND
          </h1>
        </div>
      </div>


      <div className='inline-block'>
        <div className='text-black font-extrabold text-3xl whitespace-nowrap w-[170px] text-center'>
          <h1>
            EXPRESS 
          </h1>
        </div>
        <div className='w-[170px] '>
          <img src={EXPRESS} className=' h-[150px]' alt="EXPRESS LOGOG" />
        </div>
        <div className='bg-white inline-block border-t border-gray-300 w-[170px]  p-3'>
          <h1 className='text-gray-600  tracking-wider font-extrabold text-center'>
            EXPRESS JS
          </h1>
        </div>
      </div>

    </div>
  )
}

export default Skills