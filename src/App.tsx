import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

export function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <div className="flex flex-col min-h-[100dvh] w-full">
                    <Header />
                    <AppRoutes />
                    <Footer />
                </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}