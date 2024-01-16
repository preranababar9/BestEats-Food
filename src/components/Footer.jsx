import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col justify-between bg-[#ec8841] text-black font-bold text-lg h-[50vh] px-60 py-10">
        <div className='flex justify-between '>
        <ul className=''>
                <p className='font-w-700 font-bold text-2xl' >Company</p>
                <li className='text-grey'>About</li>
                <li>Career</li>
                <li>Team</li>
                <li>Work With Us</li>
                <li>Investor Relations</li>
                <li>Report Fraud</li>
        </ul>
        <ul>
                <p className='font-w-700 font-bold text-2xl'>Contact us</p>
                <li>Help & Support</li>
                <li>Partner With Us</li>
                <li>Ride With Us</li>
                <li>Sidemap</li>
        </ul>
        <ul>
                <p className='font-w-700 font-bold text-2xl'>Legal</p>
                <li>Terms & Conditions</li>
                <li>Cookie Policy</li>
                <li>Privacy Policy</li>
        </ul>
        <ul>
                <p className='font-w-700 font-bold text-2xl'>We deliever to:</p>
                <li>Mumbai</li>
                <li>Pune</li>
                <li>Gurgoan</li>
                <li>Hyderabad</li>
                <li>Bangalore</li>
                <li>Delhi</li>
        </ul>
        </div>
        <div className='text-lg font-semibold' >
        By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2024 © PreranaBabar. All rights reserved.
        </div>
    </div>
  )
}

export default Footer