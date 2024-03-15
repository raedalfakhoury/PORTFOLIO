/* eslint-disable no-unused-vars */
import React from 'react'
import surv from "../assets/sur.jpg"
import civil from "../assets/civil.jpg"
import coding from "../assets/meracicertificate.jpg"
 

const Mycertificates = () => {
  return (
    <div name="My certificates" className='bg-gradient-to-b from-gray-700 to-black w-full text-white md:h-screen   flex justify-center' >
      <div className='max-w-screen-lg p-4 mx auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 mobile:pb-1 flex flex-col  mobile:pl-0  w-full   '>
          <p className='lg:text-7xl lg:pb-10 font-bold mobile:text-xl mobile:pb-1 pl-16  '>My certificates</p>
          
        </div>
        <div className='grid mobile:grid-cols-2 md:grid-cols-3 gap-8 px-12 mobile:px-0 mobile:pl-16 w-full lg:items-center justify-center pl-40'>
          <div>
            <img  style={{height:"500px" , width:"600px"}} src={surv} alt="" />
            <div className='flex justify-center'>
              <p >Survey engineering </p>
              
            </div>
          </div>
          <div>
            <img   style={{height:"500px" , width:"600px"}} src={civil} alt="" />
            <div className='flex justify-center'>
              <p >Civil engineering</p>
              
            </div>
          </div>
          <div>
            <img style={{height:"500px" , width:"600px"}} src={coding} alt="" />
            <div className='flex justify-center'>
              <p >Programming certification</p>
              
            </div>
          </div>
           
        
        </div>
      </div>
    </div>
  )
}

export default Mycertificates