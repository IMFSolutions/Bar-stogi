import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const links = [
  {
    path: "home",
    name: "Strona Główna",
    offset: -50,
  },
  {
    path: "menu",
    name: "Menu",
    offset: -50,
  },
  {
    path: "about",
    name: "O nas",
    offset: -150,
  },
  {
    path: "about-details",
    name: "Galeria",
    isExternal: true,
  },
  {
    path: "contact",
    name: "Kontakt",
    offset: 0,
  },
  
];

const Nav = ({ containerStyles, linkStyles, isHomePage = true }) => {
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => (
        link.isExternal ? (
          <Link key={index} href={`/${link.path}`} className={`${linkStyles}`}>
            {link.name}
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
              {link.name}
            </ScrollLink>
          ) : (
            <Link key={index} href={`/#${link.path}`} className={`${linkStyles}`}>
              {link.name}
            </Link>
          )
        )
      ))}
    </nav>
  );
};

export default Nav;
