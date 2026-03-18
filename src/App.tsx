import { BrowserRouter, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppRoutes } from './routes';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

export function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <ScrollToTop />
                <div className="flex flex-col min-h-[100dvh] w-full">
                    <Header />
                    <AppRoutes />
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}