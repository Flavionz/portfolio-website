import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { GlobeIcon, ChevronDownIcon, CheckIcon } from 'lucide-react';
export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const languages = [
  {
    code: 'en',
    label: 'English'
  },
  {
    code: 'fr',
    label: 'Français'
  },
  {
    code: 'it',
    label: 'Italiano'
  }];

  const currentLanguage =
  languages.find((lang) => lang.code === i18n.language) || languages[0];
  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };
  return (
    <div className="relative">
      <button
        className="flex items-center gap-2 text-sm font-medium py-1 px-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox">

        <GlobeIcon className="w-4 h-4" />
        <span>{currentLanguage.label}</span>
        <ChevronDownIcon className="w-4 h-4" />
      </button>
      <AnimatePresence>
        {isOpen &&
        <>
            <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)} />

            <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 10
            }}
            transition={{
              duration: 0.2
            }}
            className="absolute right-0 mt-1 w-40 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-20">

              <ul role="listbox">
                {languages.map((language) =>
              <li key={language.code}>
                    <button
                  className={`flex items-center justify-between w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 ${i18n.language === language.code ? 'font-medium' : ''}`}
                  onClick={() => changeLanguage(language.code)}>

                      {language.label}
                      {i18n.language === language.code &&
                  <CheckIcon className="w-4 h-4" />
                  }
                    </button>
                  </li>
              )}
              </ul>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </div>);

};