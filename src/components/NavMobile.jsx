import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import { RiHomeFill, RiMenu2Line } from "react-icons/ri";
import { AiFillPicture } from "react-icons/ai";


import { Link as ScrollLink } from "react-scroll";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import Logo from "./Logo";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "Strona główna",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "Menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "O nas",
    offset: -50,
  },
  {
    icon: <AiFillPicture />,
    path: "about-details",
    name: "Galeria",
    offset: 0,
    isExternal: true,
  },
  {
    icon: <RiHomeFill />,
    path: "contact",
    name: "Kontakt",
    offset: 0,
  },
  
];

const NavMobile = ({ containerStyles, iconStyles, linkStyles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false); // Funkcja do zamknięcia NavMobile po kliknięciu w link
  };

  return (
    <div className={`${containerStyles}`}>
      {/* nav trigger bttn */}
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
          {/* nav close bttn */}
          <div
            onClick={() => setIsOpen(false)}
            className=" cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 top-8 bg-darkblue flex items-center justify-center"
          >
            <IoCloseOutline />
          </div>
          {/* logo */}
          <Logo />
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) =>
              link.isExternal ? (
                <Link
                  key={index}
                  href={`/${link.path}`}
                  className={`${linkStyles}`}
                  onClick={handleLinkClick} // Zamknięcie NavMobile po kliknięciu w link
                >
                  <div className="flex items-center gap-x-3">
                    <div className={`${iconStyles}`}>{link.icon}</div>
                    <div>{link.name}</div>
                  </div>
                </Link>
              ) : (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-3"
                  onClick={handleLinkClick} // Zamknięcie NavMobile po kliknięciu w link
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              )
            )}
          </div>
          {/* bttn */}
          <ScrollLink to="reservation" smooth offset={-150}>
            {/* <Button>Book a table</Button> */}
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;