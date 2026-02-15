import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { ThemeToggle } from '../ui/ThemeToggle';
import { LanguageSwitcher } from '../ui/LanguageSwitcher';
import { MenuIcon, XIcon } from 'lucide-react';
export const Header: React.FC = () => {
  const {
    t
  } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{
    href: '#home',
    label: t('navigation.home')
  }, {
    href: '#about',
    label: t('navigation.about')
  }, {
    href: '#skills',
    label: t('navigation.skills')
  }, {
    href: '#projects',
    label: t('navigation.projects')
  }, {
    href: '#experience',
    label: t('navigation.experience')
  }, {
    href: '#contact',
    label: t('navigation.contact')
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
    <Container>
      <div className="flex items-center justify-between py-4">
        <Link to="/" className="text-2xl font-bold">
          FT
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navItems.map(item => <li key={item.href}>
              <a href={item.href} className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
                {item.label}
              </a>
            </li>)}
          </ul>
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </nav>
        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <ThemeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {mobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </Container>
    {/* Mobile Menu */}
    <AnimatePresence>
      {mobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: 'auto'
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <Container>
          <ul className="py-4 space-y-4">
            {navItems.map(item => <li key={item.href}>
              <a href={item.href} className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </a>
            </li>)}
          </ul>
        </Container>
      </motion.div>}
    </AnimatePresence>
  </header>;
};