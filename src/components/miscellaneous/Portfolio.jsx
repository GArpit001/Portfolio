import React, { useState } from 'react'

import { Routes, Route, Link, useLocation } from 'react-router-dom'

import Skills from './Skills'
import Project from './Project'
import Certificate from './Certificate'


const Portfolio = () => {

  const [check, setCheck] = useState(0)

  const handleClick0 = () => {

    setCheck(0)

  }

  const handleClick1 = () => {
    setCheck(1)

  }

  const handleClick2 = () => {
    setCheck(2)

  }



  return (
    <div className=' pb-10'>

      <div className='pt-6 pb-3'>
        <ul className='flex gap-12'>
          <li onClick={handleClick0} className={` cursor-pointer text-lg font-semibold ${check == 0 ? "text-[#ffdb70]" : ""}`}>Skills</li>
          <li onClick={handleClick1} className={` cursor-pointer text-lg font-semibold ${check == 1 ? "text-[#ffdb70]" : ""}`}>Project</li>
          <li onClick={handleClick2} className={` cursor-pointer text-lg font-semibold ${check == 2 ? "text-[#ffdb70]" : ""}`}>Certificate</li>
        </ul>
      </div>


      <div>
        {check == 0 ? <Skills /> : "" || check == 1 ? <Project /> : "" || check == 2 ? <Certificate /> : ""}
      </div>



    </div>
  )
}

export default Portfolio