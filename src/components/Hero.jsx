"use client";

import React from 'react';
import { useTranslation } from 'react-i18next'; // Upewnij się, że importujesz useTranslation z react-i18next
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';
import { Button } from './ui/button';
import { Link as ScrollLink } from 'react-scroll';
import i18n from '../i18n'; // Importuj i18n z pliku konfiguracyjnego

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/* text and image */}
        <div className="flex items-center xl:h-[960px]">
          {/* {text} */}
          <div className="w-full  xl:max-w-[460px] text-center xl:text-left">
            <motion.h1
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-black mb-7"
            >
              {t("Restauracja Plaża Stogi")} <br />
              <Image
              src="/hero/ryba4.png"
              width={400}
              height={400}
              alt=""
              className="xl:hidden max-w-[350px] mx-auto rounded-lg"
            />
            </motion.h1>
            

            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-black font-semibold mb-7"
            >
              {/* by: <span className="text-orange">IMF Solutions</span> */}
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-black mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0"
            >
              {t("Zapraszamy do nas na chwilę wytchnienia po pełnym dniu morskich atrakcji! Ciesz się wyśmienitą kuchnią oraz relaksującą atmosferą dla całej rodziny!")}
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <ScrollLink to="menu" smooth={true} duration={500}>
                <Button size="sm">{t("Zobacz Menu")}</Button>
              </ScrollLink>
            </motion.div>
          </div>
          {/* {image} */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
          >
            <Image src="/hero/ryba4.png" width={756} height={682} alt="" />
          </motion.div>
        </div>
      </div>
      {/* coffee img */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-36"
      >
        <Image src="/hero/coffee.png" width={386} height={404} alt="" />
      </motion.div>
    </section>
  );
};

export default Hero;
