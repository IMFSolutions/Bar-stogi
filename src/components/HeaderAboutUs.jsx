"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import { Button } from "../components/ui/button";
import Logo from "../components/Logo";

const HeaderAboutUs = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

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
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Logo />

          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
            isHomePage={false}
          />

          <Link href="/">
            
              <Button size="sm">Kamerka Live</Button>
            
          </Link>

          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="uppercase"
          />
        </div>
      </div>
    </header>
  );
};

export default HeaderAboutUs;
