"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
    variants={fadeIn("up", 0.2)}
    initial="hidden"
    whileInView={"show"}
    viewport={{ once: false, amount: 0 }}
     className="bg-footer bg-cover bg-no-repeat text-black pt-16">
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/upscaled_logo-removebg.png" width={180} height={36} alt="" />
            </Link>
          </div>
          {/* gird items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>
              <h4 className="font-semibold mb-5">Kontakt</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <h4>
                  503 005 728
                </h4>
                <h4>
                   Wydmy 1, 80-656 Gdańsk
                </h4>
                <h4>
                  plaza.sc@wp.pl
                </h4>
              </ul>
            </div>
            {/* item */}
            <div>
              <h4 className="font-semibold mb-5">Godziny otwarcia</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <h4>
                  Poniedziałek - Piątek
                </h4>
                <h4>
                  11:00-21:00
                </h4>
                <h4>
                  Sobota - Niedziela
                </h4>
                <h4>
                  10:00-21:00
                </h4>
              </ul>
            </div>
            {/* socials */}
            <div>
              <h4 className="font-semibold mb-5"> Nasze social-media</h4>
              <ul className="flex flex-col gap-y-6 text-sm">
                <h4>
                  Facebook
                </h4>
              </ul>
            </div>
          </div>
        </div>
        {/* copyright */}
        <div className="py-4 border-t border-white/10">
            <p className="text-black/60 text-center text-sm"> Copyright 2024 &copy; Restauracja Plaża Stogi</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
