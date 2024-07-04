import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa';

const languages = [
  { code: 'pl', flag: '/translator/pl.png' },
  { code: 'en', flag: '/translator/en.png' },
  { code: 'de', flag: '/translator/de.png' },
];

const Translator = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pl');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const changeLanguage = (code) => {
    setCurrentLanguage(code);
    i18n.changeLanguage(code);
    setDropdownOpen(false);
  };

  return (
    <div className="translator relative">
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <Image
          src={languages.find(lang => lang.code === currentLanguage).flag}
          alt={`${currentLanguage} Flag`}
          width={60}
          height={40}
          style={{ cursor: 'pointer', borderRadius: '10px' }}
        />
        <FaChevronDown className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
      </div>
      {dropdownOpen && (
        <div className="absolute top-full mt-2 flex flex-col items-center space-y-2 transition-all duration-300">
          {languages
            .filter(lang => lang.code !== currentLanguage)
            .map((language) => (
              <div
                key={language.code}
                className="cursor-pointer p-1 hover:scale-105 transition-transform"
                onClick={() => changeLanguage(language.code)}
              >
                <Image
                  src={language.flag}
                  alt={`${language.code} Flag`}
                  width={60}
                  height={40}
                  style={{ borderRadius: '10px' }}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Translator;
