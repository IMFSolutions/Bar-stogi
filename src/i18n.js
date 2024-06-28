import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      // Hero component translations
      "Restauracja Plaża Stogi": "Beach Restaurant Stogi",
      "Zapraszamy do nas na chwilę wytchnienia po pełnym dniu morskich atrakcji! Ciesz się wyśmienitą kuchnią oraz relaksującą atmosferą dla całej rodziny!":
        "Welcome to our place, a moment of relaxation after a full day of seaside attractions! Enjoy delicious cuisine and a relaxing atmosphere for the whole family!",
      "Zobacz Menu": "See Menu",
      // About component translations
      "Restauracja Plaża Stogi zaprasza wszystkich plażowiczów!":
        "Beach Restaurant Stogi invites all beachgoers!",
      "Usytuowani zaledwie 50 metrów od piaszczystej plaży, nasza restauracja jest idealnym miejscem na chwilę wytchnienia po dniu pełnym morskich atrakcji. Zapraszamy do odkrycia smaków, które zaspokoją nawet najbardziej wymagające podniebienia, w sercu turystycznego raju.":
        "Located just 50 meters from the sandy beach, our restaurant is the perfect place to relax after a day full of seaside attractions. Discover flavors that will satisfy even the most demanding palates, in the heart of a tourist paradise.",
      "Na terenie obiektu znajduje się wiele atrakcji dla dzieci, w tym plac zabaw i stoiska z lodami, które sprawią, że najmłodsi będą się doskonale bawić. Po zachodzie słońca, nasza restauracja zamienia się w miejsce pełne życia. Zapraszamy na wieczorne dyskoteki, gdzie można tańczyć do białego rana przy rytmach ulubionej muzyki. To idealne miejsce na zakończenie dnia pełnego wrażeń.":
        "There are many attractions for children on the premises, including a playground and ice cream stalls that will ensure the youngest have a great time. After sunset, our restaurant turns into a lively place. Join us for evening parties where you can dance until dawn to the rhythms of your favorite music. It's the perfect place to end a day full of experiences.",
      "Zobacz galerię!": "See the gallery!",
      // Nav component translations
      "Strona Główna": "Home",
      "Menu": "Menu",
      "O nas": "About Us",
      "Galeria": "Gallery",
      "Kontakt": "Contact",
      // Menu component translations
      "Szef kuchni poleca": "Chef's Recommendations",
      "Pokaż menu": "Show menu",
      "Dorsz z frytkami i surówką": "Cod with fries and salad",
      "Łosoś z pieca": "Baked salmon",
      "De volaille z frytkami i surówką": "De volaille with fries and salad",
      "Zupa rybna": "Fish soup",
      //Footer translation
      "Kontakt":"Contact",
      "Godziny otwarcia":"Opening Hours",
      "Poniedziałek - Piątek": "Monday - Friday",
      "Sobota - Niedziela":"Saturday - Sunday",
      "Nasze social-media":"Our social-media",
      //Header button
      "Kamerka Live":"Live Cam",
    },
  },
  pl: {
    translation: {
      // Hero component translations
      "Restauracja Plaża Stogi": "Restauracja Plaża Stogi",
      "Zapraszamy do nas na chwilę wytchnienia po pełnym dniu morskich atrakcji! Ciesz się wyśmienitą kuchnią oraz relaksującą atmosferą dla całej rodziny!":
        "Zapraszamy do nas na chwilę wytchnienia po pełnym dniu morskich atrakcji! Ciesz się wyśmienitą kuchnią oraz relaksującą atmosferą dla całej rodziny!",
      "Zobacz Menu": "Zobacz Menu",
      // About component translations
      "Restauracja Plaża Stogi zaprasza wszystkich plażowiczów!":
        "Restauracja Plaża Stogi zaprasza wszystkich plażowiczów!",
      "Usytuowani zaledwie 50 metrów od piaszczystej plaży, nasza restauracja jest idealnym miejscem na chwilę wytchnienia po dniu pełnym morskich atrakcji. Zapraszamy do odkrycia smaków, które zaspokoją nawet najbardziej wymagające podniebienia, w sercu turystycznego raju.":
        "Usytuowani zaledwie 50 metrów od piaszczystej plaży, nasza restauracja jest idealnym miejscem na chwilę wytchnienia po dniu pełnym morskich atrakcji. Zapraszamy do odkrycia smaków, które zaspokoją nawet najbardziej wymagające podniebienia, w sercu turystycznego raju.",
      "Na terenie obiektu znajduje się wiele atrakcji dla dzieci, w tym plac zabaw i stoiska z lodami, które sprawią, że najmłodsi będą się doskonale bawić.Po zachodzie słońca, nasza restauracja zamienia się w miejsce pełne życia. Zapraszamy na wieczorne dyskoteki, gdzie można tańczyć do białego rana przy rytmach ulubionej muzyki. To idealne miejsce na zakończenie dnia pełnego wrażeń.":
        "Na terenie obiektu znajduje się wiele atrakcji dla dzieci, w tym plac zabaw i stoiska z lodami, które sprawią, że najmłodsi będą się doskonale bawić. Po zachodzie słońca, nasza restauracja zamienia się w miejsce pełne życia. Zapraszamy na wieczorne dyskoteki, gdzie można tańczyć do białego rana przy rytmach ulubionej muzyki. To idealne miejsce na zakończenie dnia pełnego wrażeń.",
      "Zobacz galerię!": "Zobacz galerię!",
      // Nav component translations
      "Strona Główna": "Strona Główna",
      "Menu": "Menu",
      "O nas": "O nas",
      "Galeria": "Galeria",
      "Kontakt": "Kontakt",
      // Menu component translations
      "Szef kuchni poleca": "Szef kuchni poleca",
      "Pokaż menu": "Pokaż menu",
      "Dorsz z frytkami i surówką": "Dorsz z frytkami i surówką",
      "Łosoś z pieca": "Łosoś z pieca",
      "De volaille z frytkami i surówką": "De volaille z frytkami i surówką",
      "Zupa rybna": "Zupa rybna",
      //Footer translations
      "Kontakt":"Kontakt",
      "Godziny otwarcia":"Godziny otwarcia",
      "Poniedziałek - Piątek": "Poniedziałek - Piątek",
      "Sobota - Niedziela":"Sobota - Niedziela",
      "Nasze social-media":"Nasze social-media",
      //Header Button
      "Kamerka Live":"Kamerka Live",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;