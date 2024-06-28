import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

const Translator = () => {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('pl');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'pl' ? 'en' : 'pl';
    setCurrentLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="translator">
  {currentLanguage === 'pl' ? (
    <Image
      src="/translator/pl.png"
      alt="Polish Flag"
      width={60}
      height={40}
      onClick={toggleLanguage}
      style={{ cursor: 'pointer', borderRadius: '10px' }} // Zwiększono rozmiar i dodano zaokrąglenie
    />
  ) : (
    <Image
      src="/translator/en.png"
      alt="English Flag"
      width={60}
      height={40}
      onClick={toggleLanguage}
      style={{ cursor: 'pointer', borderRadius: '10px' }} // Zwiększono rozmiar i dodano zaokrąglenie
    />
  )}
</div>
  );
};

export default Translator;
