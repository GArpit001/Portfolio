import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { useToast } from '@chakra-ui/react'

const Contact = () => {

    const [data, setData] = useState({ name: "", email: "", text: "" })
    const { name, email, text } = data

    const toast = useToast()
    let success = false

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()


    const onChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })

    }


    const onSubmit = async () => {

        if (name == "" || email == "" || text == "") {
            toast({
                title: 'Please fill the all details.',
                description: "Name , Email , Message",
                status: 'warning',
                duration: 2000,
                isClosable: true,
                position: 'top-right'
            })
            return
        }


        try {
            const responce = await fetch("http://localhost:1254/api/userContact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, text })
            })

            const getData = await responce.json()
            // console.log(getData._id)

            setData({
                name: "",
                email: "",
                text: ""
            })


            if (getData._id) {

                toast({
                    title: 'Thanks Your for Contact us.',
                    description: "Thank You",
                    status: 'success',
                    duration: 2000,
                    isClosable: true,
                })
            }
            else {

                toast({
                    title: 'Error',
                    description: "Email has been already registered",
                    status: 'error',
                    duration: 2000,
                    isClosable: true,
                })
                return
            }



        } catch (error) {
            console.log({ error: error.message })
        }

    }

    return (
        <div>
            <div className='py-5 relative z-10'>


                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d589.467118271318!2d79.02275770353545!3d26.779132935632948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3975e077a6a7024d%3A0x88573001db6a904f!2sH.M.S.ISLAMIA%20COLLEGE!5e1!3m2!1sen!2sin!4v1722501587579!5m2!1sen!2sin" className='rounded-2xl text-black border border-1  max-xl:w-[100%]' width="850" height="400" loading="lazy" ></iframe>





            </div>

            <div className='py-3'>
                <h1 className='font-bold text-2xl'>
                    Contact Form
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className='flex justify-between w-[100%] gap-6 my-6 max-md:flex-col max-md:gap-6 '>
                        <input type="text" className='border border-1 border-[#383838] w-[100%]  px-5 py-4 rounded-2xl bg-transparent focus:border focus:border-red-500 outline-none  transition-all ease-in' placeholder='Enter Your Name' name="name" value={data.name} onChange={onChange} />

                        <input type="mail" className='border border-1 border-[#383838] w-[100%]  px-5 py-4 rounded-2xl bg-transparent focus:border focus:border-red-500 outline-none  transition-all ease-in' placeholder='Email Address' name="email" value={data.email} onChange={onChange} />
                    </div>

                    <div>
                        <textarea className='border border-1 border-[#383838] w-full h-[100px] px-5 py-4 rounded-2xl bg-transparent focus:border focus:border-red-500 outline-none  transition-all ease-in' placeholder='Your Message' name="text" id="text" value={data.text} onChange={onChange}></textarea>
                    </div>


                    <div className='flex justify-end'>
                        <button type='submit' className='border border-1 bg-[#14141437] border-[#60606094] border-r-0 border-b-0 py-3 px-6 rounded-lg my-8  text-[#ffdb70]'>
                            <i className="fa-solid fa-paper-plane"></i>  Send Message
                        </button>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Contact