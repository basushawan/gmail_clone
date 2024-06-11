import React from "react";
import { BiArchiveIn } from "react-icons/bi";
import { IoMdArrowBack, IoMdMore } from "react-icons/io";
import {
  MdDeleteOutline,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdOutlineAddTask,
  MdOutlineDriveFileMove,
  MdOutlineMarkEmailUnread,
  MdOutlineReport,
  MdOutlineWatchLater,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Mail = () => {
  const navigate = useNavigate();

  const keyCode = [
    { icon: <IoMdArrowBack size={"20px"} />, onclick: () => navigate("/") },
    {
      icon: <BiArchiveIn size={"20px"} />,
      onclick: () => console.log("Archive clicked"),
    },
    {
      icon: <MdOutlineReport size={"20px"} />,
      onclick: () => console.log("Report clicked"),
    },
    {
      icon: <MdDeleteOutline size={"20px"} />,
      onclick: () => console.log("Delete clicked"),
    },
    {
      icon: <MdOutlineMarkEmailUnread size={"20px"} />,
      onclick: () => console.log("Mark as unread clicked"),
    },
    {
      icon: <MdOutlineWatchLater size={"20px"} />,
      onclick: () => console.log("Watch later clicked"),
    },
    {
      icon: <MdOutlineAddTask size={"20px"} />,
      onclick: () => console.log("Add task clicked"),
    },
    {
      icon: <MdOutlineDriveFileMove size={"20px"} />,
      onclick: () => console.log("Move file clicked"),
    },
    {
      icon: <IoMdMore size={"20px"} />,
      onclick: () => console.log("More options clicked"),
    },
  ];
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="flex gap-2 py-2 text-gray-700 items-center">
          {keyCode.map((item, index) => {
            return (
              <div
                key={index}
                onClick={item.onclick}
                className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                {item.icon}
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowLeft size={"24px"} />
          </button>
          <button className="hover:rounded-full hover:bg-gray-100">
            <MdKeyboardArrowRight size={"24px"} />
          </button>
        </div>
      </div>
      <div className="overflow-y-auto h-[90vh] p-4">
        <div className="flex items-center justify-between bg-white gap-1">
          <div className="flex items-center gap-2">
            <h1>Subject</h1>
            <span className="text-sm bg-gray-200 rounded-md px-2">Inbox</span>
          </div>
          <div className="flex-none text-gray-400 my-5 text-sm">
            <p>12-08-2023</p>
          </div>
        </div>
        <div className="text-sm text-gray-500">
          <h1>shawanbasu@personal.com</h1>
          <span>to me</span>
        </div>
        <div className="my-10">
          <p>message</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
