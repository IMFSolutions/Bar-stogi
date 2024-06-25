"use client";
import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import { RiHomeFill, RiMenu2Line } from "react-icons/ri";
import { Button } from "./ui/button";


import Link from "next/link";
import Logo from "./Logo";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "Strona główna",
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "Menu",
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "O nas",
  },
  {
    icon: <FaEnvelope />,
    path: "contact",
    name: "Kontakt",
  },
];

const NavMobileAboutUs = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger button */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer outline-none"
      >
        <RiMenu2Line className="text-3xl text-black transition-all duration-200" />
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-beige fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col items-center justify-between h-full">
          {/* nav close button */}
          <div
            onClick={() => setIsOpen(false)}
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-darkblue flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Logo />
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => (
              <Link key={index} href={`/#${link.path}`} className="flex items-center gap-x-3">
                <div className={`${iconStyles}`}>{link.icon}</div>
                <div className={`${linkStyles}`}>{link.name}</div>
              </Link>
            ))}
          </div>
          {/* button */}
           <Link href="/#reservation" className="flex items-center gap-x-3">
            {/* <Button>Book a table</Button> */}
          </Link> 
        </div>
      </aside>
    </div>
  );
};

export default NavMobileAboutUs;