import React from 'react'
import { MdCropSquare } from 'react-icons/md'
import { RiStarLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

const Message = () => {
    const navigate = useNavigate();
    let id = 5;
    const openMail =()=>{
        navigate(`/mail/${id}`)
    }

  return (
    <div onClick={openMail} className='flex items-start justify-between border-b border-gray-200 px-4 text-sm hover:cursor-pointer hover:shadow-md'>
      <div className="flex items-center gap-3">
        <div className="flex-none text-gray-300">
            <MdCropSquare className='w-5 h-5'/>
        </div>
        <div className="flex-none text-gray-300">
            <RiStarLine className='w-5 h-5'/>
        </div>
      </div>
      <div className="flex-1 ml-4">
        <p className="truncate inline-block max-w-full text-gray-600">
            text
        </p>
      </div>
      <div className="flex-none text-gray-400 text-sm">
        texttetx
      </div>
    </div>
  )
}

export default Message
