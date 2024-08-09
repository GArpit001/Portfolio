import React, { useState } from 'react'
import Application from './Application'
import Web from './Web'

const Project = () => {

  const [pro, setPro] = useState(false)

  const handleClick0 = () => {
    setPro(false)
  }

  const handleClick1 = () => {
    setPro(true)
  }

  return (
    <div className=''>

      <div>
        <ul className='flex gap-12'>
          <li onClick={handleClick0} className={`cursor-pointer text-lg font-semibold ${pro === false ? "text-[#ffdb70]" : "" }`}>Web </li>
          <li onClick={handleClick1} className={`cursor-pointer text-lg font-semibold ${pro  ? "text-[#ffdb70]" : "" }`}>App</li>
        </ul>
      </div>


      {
        // pro === 0 ? <Application /> : "" || pro === 1 ? <Web /> : ""
        pro ?  <Application /> : <Web/>
      }




    </div>
  )
}

export default Project