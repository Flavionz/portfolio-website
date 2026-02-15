import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from '../ui/Container';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const socialLinks = [
  {
    icon: <GithubIcon className="h-5 w-5" />,
    href: 'https://github.com/Flavionz',
    label: 'GitHub'
  },
  {
    icon: <LinkedinIcon className="h-5 w-5" />,
    href: 'https://www.linkedin.com/in/flavioterenzi/',
    label: 'LinkedIn'
  },

  {
    icon: <MailIcon className="h-5 w-5" />,
    href: 'mailto:flavionz@hotmail.it',
    label: 'Email'
  }];

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t('footer.copyright')}
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) =>
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              aria-label={link.label}>

                {link.icon}
              </a>
            )}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {t('footer.madeWith')}
          </div>
        </div>
      </Container>
    </footer>);

};