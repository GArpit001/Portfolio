import React from 'react'
import Dev from "../../assets/img/icon-design.svg"
import Develop from "../../assets/img/icon-dev.svg"




const About = () => {
    return (
        <div className='py-6'>

            <div className='pr-8'>

                <p className='tracking-wider leading-6 pb-5 text-xl'>
                    Hey! I' am Arpit Verma and I am a Web Developer.
                </p>


                <p className='tracking-wider leading-6 pb-5 text-justify'>
                    Highly motivated frontend developer with proficiency in HTML, CSS, JavaScript, React.js, and Tailwind CSS. Eager to tackle challenging projects and contribute innovative solutions. Possesses a foundational understanding of MongoDB. Committed to delivering exceptional user experiences through clean, efficient code and continuous learning in dynamic environments

                </p>


            </div>

            <div className='pt-6'>

                <h1 className='py-6 text-2xl font-bold'>
                    What I'm Doing
                </h1>

                <div className='flex  gap-8 flex-wrap max-xl:flex-col'>

                    <div className='flex bg-[#141414] p-6 rounded-2xl w-[45%] max-xl:w-[100%] border border-b-0 border-r-0 border-[#60606094]'>
                        <div className='w-[80px] '>
                            <img src={Dev} alt="" />
                        </div>

                        <div className='pl-6'>
                            <h1 className='text-xl font-bold'>
                                Web Design
                            </h1>

                            <p className='tracking-wide'>
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>

                    </div>


                    <div className='flex bg-[#141414] p-6 rounded-2xl w-[45%] max-xl:w-[100%] border border-b-0 border-r-0 border-[#60606094] '>
                        <div className='w-[80px] '>
                            <img src={Develop} alt="" />
                        </div>

                        <div className='pl-6'>
                            <h1 className='text-xl font-bold'>
                                Web Development
                            </h1>

                            <p className='tracking-wide'>
                                High-quality development of sites at the professional level.
                            </p>
                        </div>

                    </div>


                    <div className='flex bg-[#141414] p-6 rounded-2xl w-[45%] max-xl:w-[100%] border border-b-0 border-r-0 border-[#60606094] '>
                        <div className='w-[80px] '>
                            <img src={Develop} alt="" />
                        </div>

                        <div className='pl-6'>
                            <h1 className='text-xl font-bold'>
                                Web Development
                            </h1>

                            <p className='tracking-wide'>
                                High-quality development of sites at the professional level.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default About