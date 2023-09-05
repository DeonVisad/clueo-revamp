import React from 'react';
import {MdEmail} from 'react-icons/md'

const ContactForm = () => {
    return(
        <div className='md:flex justify-center items-center md:m-10'>
            <div className='pb-8 md:w-[50%] flex flex-col justify-center items-center'>
                <p className='text-4xl font-bold text-black mt-4'>Let us help.</p>
                <p className='text-black py-4 font-semibold text-sm'>Have an issue with your order or just want to leave a review?</p>
                <div className='hidden md:flex md:items-center md:bg-[#f5f4f1] md:py-2 md:px-6 md:rounded-md md:shadow-sm md:shadow-black/50'>

                    <span className='mx-2 text-xl md:bg-[#540b0d46] md:p-[.3rem] rounded-md'><MdEmail /></span>
                    <div className='flex flex-col mx-2'>
                        <p className='text-xs font-semibold flex '>Email us:</p>
                        <span className='text-[#540b0e] text-sm font-semibold'>clueocandles@gmail.com</span>
                    </div>

                </div>
            </div>
            <div className='md:w-[500px] md:h-[550px] md:border-2 md:border-black md:bg-[#f5f4f1] md:rounded-xl flex justify-center items-center p-2 md:shadow-sm md:shadow-black'>
                <form method='POST' action='https://getform.io/f/684865ed-3436-4de2-b830-b8c2f658b0f0' className='flex flex-col max-w-[400px] w-full h-full md:w-[75%]'>
                    <input className='mt-2 p-1 bg-[#540b0d46] placeholder:text-black rounded-md' type='text' placeholder='Name' name='name' required />
                    <input className='my-4 p-2 bg-[#540b0d46] placeholder:text-black rounded-md' type='email' placeholder='Email' name='email' required />
                    <input className='mb-4 p-2 bg-[#540b0d46] placeholder:text-black rounded-md' type='text' placeholder='Subject' name='subject' required />
                    <p className='flex text-sm font-semibold my-2'>Tell us more*</p>
                    <textarea className='bg-[#540b0d46] placeholder:text-black text-black rounded-md p-2' name='message' rows='10' placeholder='Message' required></textarea>
                    <button className='text-white w-full bg-[#540b0e] shadow-lg px-4 py-3 my-8 mx-auto flex justify-center items-center rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-black'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;