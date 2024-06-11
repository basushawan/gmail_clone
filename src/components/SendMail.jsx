import React, { useState } from 'react'
import { RxCross2 } from 'react-icons/rx'
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/appSlice';

const SendMail = () => {
  const [formData,setFormData]= useState({
    to:"",
    subject:"",
    textmessage:""
  })
    const open = useSelector(store=>store.appSlice.open);
    const dispatcher = useDispatch();

    const chnageHandler = (e) =>{
      setFormData({...formData,[e.target.name]:e.target.value})
    }
    const submitHandler = (e) => {
      e.preventDefault();
      console.log(formData);
    }
  return (
    <div className={`${open?'block':'hidden'} bg-white max-w-6xl shadow-xl shadow-slate-600 rounded-t-md`}>
        <div className="flex py-2 px-3 justify-between rounded-t-md bg-[#f2f6fc]">
            <h1>News Message</h1>
            <div className="p-2 rounded-full hover:bg-gray-200 cursor-pointer">
                <RxCross2 size={"10px"} onClick={()=>dispatcher(setOpen(false))}/>
            </div>
        </div>
      <form onSubmit={submitHandler} className='flex flex-col p-3 gap-2'>
        <input onChange={chnageHandler} value={formData.to} name='to' type="text" placeholder='To' className="outline-none py-1" />
        <input onChange={chnageHandler} value={formData.subject} name="subject" type="text" placeholder='Subject' className="outline-none py-1" />
        <textarea onChange={chnageHandler} value={formData.textmessage} name="textmessage" cols={"30"} rows={"10"} className='outline-none py-1'></textarea>
        <button className="rounded-full bg-[#0b57d0] w-fit px-4 text-white font-medium" type='submit'>Send</button>
      </form>
    </div>
  )
}

export default SendMail;
