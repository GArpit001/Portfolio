import React from 'react'
// import one from "../../assets/img/Google ADS.jpg"
// import Two from "../../assets/img/WordPress.jpg"

// import Google from "../../assets/pdf/Google Ads.pdf"
// import WordPress from "../../assets/pdf/Website using WordPress.pdf"


const Certificate = () => {
    return (
        <div className='flex gap-6 max-xl:flex-col'>

            <div className=''>

                <a href="https://res.cloudinary.com/mycodeworld/image/upload/v1722704590/rfiyjyyt70zx56vc1wtw.jpg" className='relative' target='_blank'>
                    <div className='w-[100%] h-[100%]  bg-transparent hover:bg-[#000000af] hover:transition-all ease-in duration-150  absolute flex justify-center items-center eyeBox'>
                        <div className=' eyeDiv'>
                            <i className="fa-solid fa-eye "></i>
                        </div>

                    </div>
                    <img src="https://res.cloudinary.com/mycodeworld/image/upload/v1722704590/rfiyjyyt70zx56vc1wtw.jpg" className='hover:scale-110 transition-all ease-in duration-100' alt="" />
                </a>

                <div className='relative'>
                    <a href="https://res.cloudinary.com/mycodeworld/image/upload/v1722704590/rfiyjyyt70zx56vc1wtw.jpg" download="Google Ads Certificate" title='Download Google Ads Certificate' className='bg-blue-600 inline-block w-14 text-center p-4 rounded-full absolute bottom-4  right-4'>
                        <i className="fa-solid fa-download"></i>
                    </a>
                </div>

                <div className='pt-5'>
                    <h1 className='text-xs text-gray-400'>Google Ads</h1>
                    <h1 className='text-sm text-gray-700'>Developing and Managing Google Ads</h1>
                </div>

            </div>

            <div className=''>

                <a href="https://res.cloudinary.com/mycodeworld/image/upload/v1722704617/zjnvoyjpm3zo3d9iisub.jpg" className='relative' target='_blank'>
                    <div className='w-[100%] h-[100%]  bg-transparent hover:bg-[#000000af] hover:transition-all ease-in duration-150  absolute flex justify-center items-center eyeBox'>
                        <div className=' eyeDiv'>
                            <i className="fa-solid fa-eye "></i>
                        </div>

                    </div>

                    {/* <img src={Two} className='hover:scale-110 transition-all ease-in duration-100' alt="" /> */}

                    <img src=" https://res.cloudinary.com/mycodeworld/image/upload/v1722704617/zjnvoyjpm3zo3d9iisub.jpg" className='hover:scale-110 transition-all ease-in duration-100' alt="" />

                   
                </a>

                <div className='relative'>
                    <a href="https://res.cloudinary.com/mycodeworld/image/upload/v1722704617/zjnvoyjpm3zo3d9iisub.jpg" download="Word Press Certificate" title='Download WordPress Certificate' className='bg-blue-600 inline-block w-14 text-center p-4 rounded-full absolute bottom-4  right-4 '>
                        <i className="fa-solid fa-download"></i>
                    </a>
                </div>

                <div className='mt-5'>
                    <h1 className='text-xs text-gray-400'>WordPress</h1>
                    <h1 className='text-sm text-gray-700'>WordPress Development and Optimization</h1>
                </div>

            </div>

        </div>
    )
}

export default Certificate