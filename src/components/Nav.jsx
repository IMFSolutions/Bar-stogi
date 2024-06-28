import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useTranslation } from "react-i18next";

const links = [
  {
    path: "home",
    nameKey: "Strona Główna",
    offset: -50,
  },
  {
    path: "menu",
    nameKey: "Menu",
    offset: -50,
  },
  {
    path: "about",
    nameKey: "O nas",
    offset: -150,
  },
  {
    path: "about-details",
    nameKey: "Galeria",
    isExternal: true,
  },
  {
    path: "contact",
    nameKey: "Kontakt",
    offset: 0,
  },
];

const Nav = ({ containerStyles, linkStyles, isHomePage = true }) => {
  const { t } = useTranslation();

  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        link.isExternal ? (
          <Link key={index} href={`/${link.path}`} className={`${linkStyles}`}>
            {t(link.nameKey)}
          </Link>
        ) : (
          isHomePage ? (
            <ScrollLink
              key={index}
              to={link.path}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className={`${linkStyles}`}
            >
              {t(link.nameKey)}
            </ScrollLink>
          ) : (
            <Link key={index} href={`/#${link.path}`} className={`${linkStyles}`}>
              {t(link.nameKey)}
            </Link>
          )
        )
      ))}
    </nav>
  );
};

export default Nav;

