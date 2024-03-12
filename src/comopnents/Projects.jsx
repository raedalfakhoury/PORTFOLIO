/* eslint-disable no-unused-vars */
import React from 'react'
import shop from "../assets/e-shop.png"
import Recipe from "../assets/food.png"
import Memory from "../assets/memory.png"
import Shopper from "../assets/projectPhoto.png"
import Talaqi from "../assets/TALAQI.png"

const Projects = () => {
  return (
    <div name="My Projects" className='bg-gradient-to-b from-gray-700 to-black w-full text-white md:h-screen   flex justify-center' >
      <div className='max-w-screen-lg p-4 mx auto flex flex-col justify-center w-full h-full '>
        <div className='pb-8 mobile:pb-1 flex flex-col  mobile:pl-0  w-full   '>
          <p className='lg:text-7xl lg:pb-10 font-bold mobile:text-xl mobile:pb-1 pl-16  '>MyProjects</p>
          
        </div>
        <div className='grid mobile:grid-cols-2 md:grid-cols-3 gap-8 px-12 mobile:px-0 mobile:pl-16 w-full lg:items-center justify-center pl-40'>
          <div>
            <img style={{height:"100px" , width:"250px"}} src={shop} alt="" />
            <div className='flex justify-center'>
              <p >E-shop </p>
              
            </div>
          </div>
          <div>
            <img   style={{height:"100px" , width:"250px"}} src={Recipe} alt="" />
            <div className='flex justify-center'>
              <p >Food Recipe</p>
              
            </div>
          </div>
          <div>
            <img style={{height:"100px" , width:"250px"}} src={Memory} alt="" />
            <div className='flex justify-center'>
              <p >Memory Game</p>
              
            </div>
          </div>
          <div>
            <img style={{height:"100px" , width:"250px"}} src={Shopper} alt="" />
            <div className='flex justify-center'>
              <p >Smart Shopper</p>
              
            </div>
          </div>
          <div>
            <img style={{height:"100px" , width:"250px"}} src={Talaqi} alt="" />
            <div className='flex justify-center'>
              <p >Talaqi Platform</p>
              
            </div>
          </div>
        
        </div>
      </div>
    </div>
  )
}

export default Projects