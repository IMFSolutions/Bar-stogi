"use client";
"use client";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useTranslation } from "react-i18next";

const menu = [
  {
    img: "/menu/image0.jpeg",
    titleKey: "Dorsz z frytkami i surówką",
    // price: "42.00 zł",
  },
  {
    img: "/menu/image3.jpeg",
    titleKey: "Łosoś z pieca",
    // price: "22.00 zł",
  },
  {
    img: "/menu/image4.jpeg",
    titleKey: "De volaille z frytkami i surówką",
    // price: "50.00 zł",
  },
  {
    img: "/menu/image5.jpeg",
    titleKey: "Zupa rybna",
    // price: "25.00 zł",
  },
  // {
  //   img: "/menu/item-1.png",
  //   titleKey: "Polędwica z morszczuka",
  //   price: "49.00 zł",
  // },
];

const Menu = () => {
  const { t } = useTranslation();

  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">{t("Szef kuchni poleca")}</h2>
          <a
            href="menu-plaza.jpg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkblue flex justify-center xl:justify-end items-center mb-16"
          >
            {t("Pokaż menu")}
            <IoIosArrowRoundForward className="text-3xl" />
          </a>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 "
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group"
              >
                {/* img */}
                <div className="overflow-hidden">
                  <Image
                    src={item.img}
                    width={270}
                    height={270}
                    alt=""
                    className="group-hover:scale-110 transition-all duration-300"
                  />
                </div>
                {/* title */}
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <h3 className="font-poppins text-black mb-[14px]">
                    {t(item.titleKey)}
                  </h3>
                  {/* Uncomment this if you want to show price */}
                  {/* <div className="text-xl font-poppins font-semibold text-darkblue">
                    {item.price}
                  </div> */}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;

