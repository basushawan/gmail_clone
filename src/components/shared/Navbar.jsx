import React from 'react'
import { CiCircleQuestion } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between mx-3 h-16'>
        <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
                <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                    <RxHamburgerMenu size={"20px"}/>
                </div>
                <img src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png" alt="" className='w-8'/>
                <h1 className="text-2xl font-medium text-gray-500">Gmail</h1>
            </div>
        </div>
      <div className="hidden md:block w-[50%] mr-60">
        <div className="flex items-center bg-[#eaf1fb] px-2 py-3 rounded-full">
            <IoIosSearch size={"24px"} className='text-gray-700'/>
            <input type='text' placeholder='Search Mail' className='rounded-full w-full bg-transparent outline-none px-1'/>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-2 items-center">
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <CiCircleQuestion/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
