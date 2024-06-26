"use client";
import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "./ui/button";
import Link from "next/link";
import { fadeIn } from "../../variants";

const About = () => {
  return (
    <section
      className="grid grid-cols-1 xl:grid-cols-2 gap-x[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9 text-5xl xl:text-7xl">
          Restauracja Plaża Stogi zaprasza wszystkich plażowiczów!
        </h1>
        <p className="mb-4 text-justify p-8">
          Usytuowani zaledwie 50 metrów od piaszczystej plaży, nasza restauracja
          jest idealnym miejscem na chwilę wytchnienia po dniu pełnym morskich
          atrakcji. Zapraszamy do odkrycia smaków, które zaspokoją nawet
          najbardziej wymagające podniebienia, w sercu turystycznego raju.{" "}
        </p>
        <p className="mb-10 text-justify p-8">
          Na terenie obiektu znajduje się wiele atrakcji dla dzieci, w tym plac
          zabaw i stoiska z lodami, które sprawią, że najmłodsi będą się
          doskonale bawić.Po zachodzie słońca, nasza restauracja zamienia się w
          miejsce pełne życia. Zapraszamy na wieczorne dyskoteki, gdzie można
          tańczyć do białego rana przy rytmach ulubionej muzyki. To idealne
          miejsce na zakończenie dnia pełnego wrażeń.
        </p>
        <Image
          src="/gallery/IMG_5157.jpg"
          width={705}
          height={771}
          alt=""
          className=" rounded-lg xl:hidden mb-6"
        />
        <div className=" flex justify-center xl:justify-normal"> 
          <Link href="/about-details" passHref>
            <Button as="a">Zobacz galerię!</Button>
          </Link>
        </div>
      </motion.div>
      {/* img */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/gallery/IMG_5157.jpg"
          width={705}
          height={771}
          alt=""
          className="  rounded-lg hidden xl:flex"
        />
      </motion.div>
    </section>
  );
};

export default About;
