import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { MapPinIcon, ClockIcon } from 'lucide-react';

export const About: React.FC = () => {
  const {
    t
  } = useTranslation();

  return (
      <Section id="about" title={t('about.title')} className="bg-white dark:bg-gray-900">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Blocco Immagine */}
          <motion.div
              initial={{
                opacity: 0,
                x: -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.5
              }}
              className="relative rounded-2xl overflow-hidden max-h-[500px] md:max-h-[700px]"
          >
            <img
                src="https://i.postimg.cc/wBYtkY7J/dffe6b4d-5244-4a75-8422-d49c3a091ace.jpg"
                alt="Profile"
                className="w-full h-full object-cover object-top rounded-2xl"
            />
          </motion.div>

          {/* Blocco Testo e Citazione */}
          <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5
          }}>
            <div className="space-y-6">
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.paragraph1')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.paragraph2')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.paragraph3')}
              </p>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                {t('about.paragraph4')}
              </p>

              {/* CITAZIONE DI RICHARD FEYNMAN */}
              <motion.blockquote
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="border-l-4 border-primary pl-4 py-2 italic text-xl font-semibold text-gray-800 dark:text-gray-200 mt-8"
              >
                "What I cannot create, I do not understand."
                <footer className="mt-2 text-sm text-gray-600 dark:text-gray-400 font-normal">
                  — Richard Feynman
                </footer>
              </motion.blockquote>

              {/* Dati di Località e Status */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <MapPinIcon className="h-5 w-5 text-primary" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <ClockIcon className="h-5 w-5 text-primary" />
                  <span>{t('about.status')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>
  );
};