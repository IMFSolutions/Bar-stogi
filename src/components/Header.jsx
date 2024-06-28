"use client";
import React, { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from 'react-i18next';
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";
import Logo from "./Logo"
import Translator from "./Translator";

const Header = () => {

  const { t } = useTranslation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // detect scroll
      setActive(window.scrollY > 100);
    };

    // add event listener
    window.addEventListener("scroll", handleScroll);

    // clear event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        active ? "bg-beige py-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200`}
    >
      <div className="container mx-auto ">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-between ">
          {/* logo */}
          <Logo />

          {/* Nav bar */}
          <Nav
            containerStyles="hidden xl:flex gap-x-14 text-white font-poppins"
            linkStyles="capitalize"
          />

          {/* button */}
          <div className="flex items-center gap-16 ">
          <ScrollLink to="reservation" smooth={true}>
            <Button size="sm">
              {t('Kamerka Live')}
            </Button>
          </ScrollLink>
          <Translator/>
         
          </div>
          
          
          

          {/* mobile nav bar */}
          <NavMobile
            containerStyles="xl:hidden font-poppins"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
