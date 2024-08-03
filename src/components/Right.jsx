import React from 'react'
import About from './miscellaneous/About'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import Resume from './miscellaneous/Resume'
import Portfolio from './miscellaneous/Portfolio'
import Contact from './miscellaneous/Contact'
import { useEffect } from 'react'

// import Skills from '../components/miscellaneous/Skills'
// import Project from '../components/miscellaneous/Project'
// import Certificate from '../components/miscellaneous/Certificate'


const Right = () => {

  const location = useLocation()


  useEffect(() => {
    // console.log(location.pathname)
  }, [location])





  return (
    <div className='text-white pl-8 bg-[#1e1e1f] border border-1 border-[#383838] rounded-3xl w-[75vw] max-xl:w-[100%] max-xl:mb-20'>

      <div className='flex justify-between'>
        <div className='pt-8 '>
          <h1 className='text-3xl font-bold'>
            {location.pathname === "/" ? "ABOUT" : location.pathname.slice(1).toUpperCase()}
          </h1>


        </div>

        <div className='bg-[#383838d4] border border-1 border-[#383838] px-8 max-xl:px-6 rounded-tr-3xl rounded-bl-3xl z-20 max-xl:fixed max-xl:rounded-none max-xl:rounded-tl-3xl max-xl:rounded-tr-3xl max-xl:w-[100%]   bottom-0 left-0'>
          <ul className='flex  gap-14 p-5 max-xl:w-[100%]  max-xl:gap-10 max-xl:justify-center z-20' >
            <Link to="/" className={`${location.pathname === "/" ? "text-[#ffdb70]" : ""} font-bold`}>About</Link>
            <Link to="/resume" className={`${location.pathname === "/resume" ? "text-[#ffdb70]" : ""} font-bold`}>Resume</Link>
            <Link to="/portfolio" className={`${location.pathname === "/portfolio" ? "text-[#ffdb70]" : ""} font-bold`}>Portfolio</Link>
            <Link to="/contact" className={`${location.pathname === "/contact" ? "text-[#ffdb70]" : ""} font-bold`} >Contact</Link>
          </ul>
        </div>
      </div>
      <span className='w-10 inline-block border-2 border-[#ffdb70] rounded-2xl'>
      </span>

      <div className=' pr-6'>

        <Routes>


          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />


        </Routes>
      </div>

    </div>
  )
}

export default Right