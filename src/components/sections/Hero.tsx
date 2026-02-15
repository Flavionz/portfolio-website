import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { ArrowDownIcon } from 'lucide-react';
export const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">

      <Container>
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto py-16 md:py-24">
          <motion.span
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5
            }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-2">

            {t('hero.greeting')}
          </motion.span>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">

            {t('hero.name')}
          </motion.h1>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.2
            }}
            className="text-xl md:text-2xl lg:text-3xl font-medium mb-6 text-gray-800 dark:text-gray-200">

            {t('hero.title')}
          </motion.h2>
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.3
            }}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">

            {t('hero.description')}
          </motion.p>
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.5,
              delay: 0.4
            }}
            className="flex flex-wrap gap-4 justify-center">

            <Button
              size="lg"
              onClick={() =>
              document.getElementById('contact')?.scrollIntoView({
                behavior: 'smooth'
              })
              }>

              {t('hero.cta')}
            </Button>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{
              duration: 1,
              delay: 1
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2">

            <motion.div
              animate={{
                y: [0, 10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 2
              }}>

              <a href="#about" aria-label="Scroll down">
                <ArrowDownIcon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>);

};