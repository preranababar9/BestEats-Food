import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-[#ec8841] text-black font-bold text-lg h-full md:px-60 px-6 py-10
     gap-10">
        <div className='flex justify-between md:flex-row flex-col gap-4 '>
        <ul className=''>
                <p className='font-w-700 font-bold text-2xl' >Company</p>
                <li className='font-semibold'>About</li>
                <li className="font-semibold">Career</li>
                <li className="font-semibold">Team</li>
                <li className="font-semibold">Work With Us</li>
                <li className="font-semibold">Investor Relations</li>
                <li className="font-semibold">Report Fraud</li>
        </ul>
        <ul>
                <p className='font-w-700 font-bold text-2xl'>Contact us</p>
                <li className= "font-semibold">Help & Support</li>
                <li className= "font-semibold">Partner With Us</li>
                <li className= "font-semibold">Ride With Us</li>
                <li className= "font-semibold">Sidemap</li>
        </ul>
        <ul>
                <p className='font-w-700 font-bold text-2xl'>Legal</p>
                <li className="font-semibold">Terms & Conditions</li>
                <li className="font-semibold">Cookie Policy</li>
                <li className="font-semibold">Privacy Policy</li>
        </ul>
        <ul>
                <p className='font-w-700 font-bold text-2xl'>We deliever to:</p>
                <li className="font-semibold">Mumbai</li>
                <li className="font-semibold">Pune</li>
                <li className="font-semibold">Gurgoan</li>
                <li className="font-semibold">Hyderabad</li>
                <li className="font-semibold">Bangalore</li>
                <li className="font-semibold">Delhi</li>
        </ul>
        </div>
        
        <div className='md:text-lg text-sm font-semibold text-justify' >
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2024 © PreranaBabar. All rights reserved.
        </div>
    </div>
  )
}

export default Footer