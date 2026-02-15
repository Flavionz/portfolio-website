import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
// Add Tailwind CSS custom styles
import './index.css';
export function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
          <Header />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>);

}