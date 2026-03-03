import React, { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { GithubIcon, MenuIcon, XIcon } from 'lucide-react';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#home', label: t('navigation.home') },
    { href: '#about', label: t('navigation.about') },
    { href: '#skills', label: t('navigation.skills') },
    { href: '#projects', label: t('navigation.projects') },
    { href: '#experience', label: t('navigation.experience') },
    { href: '#passions', label: t('navigation.passions') },
    { href: '#contact', label: t('navigation.contact') }
  ];

  const executeScroll = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => executeScroll(targetId), 300);
    } else {
      const delay = mobileMenuOpen ? 350 : 0;
      setTimeout(() => executeScroll(targetId), delay);
    }
  };

  return (
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center gap-3">
              <Link to="/" className="text-2xl font-bold">FT</Link>
              <a
                  href="https://github.com/Flavionz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <ul className="flex items-center gap-6">
                {navItems.map((item) => (
                    <li key={item.href}>
                      <a
                          href={item.href}
                          onClick={(e) => handleNavClick(e, item.href)}
                          className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
                      >
                        {item.label}
                      </a>
                    </li>
                ))}
              </ul>
              <div className="flex items-center gap-4">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </nav>

            {/* Mobile UI */}
            <div className="flex items-center gap-4 md:hidden">
              <LanguageSwitcher />
              <ThemeToggle />
              <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 relative z-[70]"
                  aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {mobileMenuOpen && (
              <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 overflow-hidden"
              >
                <Container>
                  <ul className="py-6 space-y-4">
                    {navItems.map((item) => (
                        <li key={item.href}>
                          <a
                              href={item.href}
                              onClick={(e) => handleNavClick(e, item.href)}
                              className="block py-3 text-lg text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors"
                          >
                            {item.label}
                          </a>
                        </li>
                    ))}
                  </ul>
                </Container>
              </motion.div>
          )}
        </AnimatePresence>
      </header>
  );
};