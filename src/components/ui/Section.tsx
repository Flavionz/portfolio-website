import React from 'react';
import { Container } from './Container';
import { motion } from 'framer-motion';
interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  title?: string;
  subtitle?: string;
}
export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  title,
  subtitle
}) => {
  return (
    <section id={id} className={`py-16 md:py-24 w-full ${className}`}>
      <Container>
        {(title || subtitle) &&
        <div className="mb-12 md:mb-16 text-center">
            {title &&
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}
            className="text-3xl md:text-4xl font-bold mb-4">

                {title}
              </motion.h2>
          }
            {subtitle &&
          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: 0.1
            }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">

                {subtitle}
              </motion.p>
          }
          </div>
        }
        {children}
      </Container>
    </section>);

};