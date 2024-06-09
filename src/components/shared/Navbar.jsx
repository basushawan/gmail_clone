import React from 'react'
import Avatar from 'react-avatar'
import { CiCircleQuestion, CiSettings } from 'react-icons/ci'
import { IoIosSearch } from 'react-icons/io'
import { PiDotsNineBold } from 'react-icons/pi'
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
                <CiCircleQuestion size={"20px"}/>
            </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-2 items-center">
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <CiSettings size={"20px"}/>
            </div>
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex gap-2 items-center">
            <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
                <PiDotsNineBold size={"20px"}/>
            </div>
            <div className="relative cursor-pointer">
                <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT3jxuUsThVHIIZeKkEQTBLIsBcTfg4yhE-Q&s" round={true} size={'40px'}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
