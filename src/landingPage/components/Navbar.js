import React, { useState } from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar() {
  let [open, setOpen] = useState(false);

  return (
    <>
      <div className="bg-gradient-to-r from-dark-yellow to-light-yellow  w-11/12 mx-auto rounded-2xl h-16 px-4 md:flex md:items-center justify-between">
        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute cursor-pointer md:hidden block pt-3 z-10"
        >
          {open ? <AiOutlineClose /> : <BiMenu />}
        </div>
        <div className="text-3xl text-center md:pl-8 pl-14 absolute">
          <div className="font-semibold no-underline text-black">Magic</div>
        </div>

        <ul
          className={`md:flex md:items-center md:pl-80 pt-2 md:pb-0 pb-12 absolute md:static nav--background
                       w-11/12 rounded-2xl mt-2 right-4 md:p1-0 p1-9 transition-all duration-500 
                        ease-in ${open ? "top-20" : "top-[-490px]"}`}
        >
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-black">
            <div
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              About
            </div>
          </li>
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7 text-black">
            <div
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              Events
            </div>
          </li>
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
            <div
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              Tickets
            </div>
          </li>
          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
            <div
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              Livestream
            </div>
          </li>

          <li className="cursor-pointer md:ml-8 text-xl md:my-0 my-7">
            <div
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-black no-underline"
                  : "text-black no-underline"
              }
            >
              Merchandise
            </div>
          </li>
          <div className="ml-8  ">{/* <Search /> */}</div>
        </ul>

        <div className="flex items-center justify-end pt-4 md:pt-2">
          <div className="no-underline text-black font-semibold mb-3 md:mr-2 cursor-pointer ">
            SignIn/
          </div>

          <div className="no-underline text-black font-semibold mb-3 mr-4 cursor-pointer">
            SignUp
          </div>

          <BsFillPersonCheckFill className="text-2xl mb-3" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
