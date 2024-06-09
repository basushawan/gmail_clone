import React, { useState } from "react";
import { FaCaretDown, FaUserFriends } from "react-icons/fa";
import { GoTag } from "react-icons/go";
import { IoMdMore, IoMdRefresh } from "react-icons/io";
import { MdCropSquare, MdInbox } from "react-icons/md";

const mailType = [
  { icon: <MdInbox size={"20px"} />, text: "Primary" },
  { icon: <GoTag size={"20px"} />, text: "Promotions" },
  { icon: <FaUserFriends size={"20px"} />, text: "Social" },
];

const Inbox = () => {
  const [mailTypeSeleceted, setMailTypeSelected] = useState(0);
  return (
    <div className="flex-1 bg-white rounded-xl mx-5">
      <div className="flex items-center justify-between px-4">
        <div className="items-center flex gap-2 py-2 text-gray-700">
          <div className="flex items-center gap-1">
            <MdCropSquare size={"20px"} />
            <FaCaretDown size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdRefresh size={"20px"} />
          </div>
          <div className="p-2 rounded-full hover:bg-gray-100 cursor-pointer">
            <IoMdMore size={"20px"} />
          </div>
        </div>
      </div>
      <div className="h-[80vh] overflow-y-auto">
        <div className="flex items-center gap-1">
          {mailType.map((item, index) => {
            return (
              <button
                onClick={() => {
                  setMailTypeSelected(index);
                }}
                key={index}
                className={`${
                  mailTypeSeleceted === index
                    ? "text-blue-600 border-b-blue-600 border-b-4"
                    : "border-b-4 border-b-transparent"
                } w--60 hover:bg-gray-100 flex items-center gap-5 p-4`}
              >
                {item.icon}
                <span>{item.text}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Inbox;
