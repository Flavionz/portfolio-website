import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <Container className="text-center py-16">
          <h1 className="text-6xl font-bold mb-4 text-gray-900 dark:text-white">404</h1>
          <h2 className="text-2xl font-medium mb-6 text-gray-800 dark:text-gray-200">
            {t('notFound.title')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            {t('notFound.message')}
          </p>
          <Link to="/">
            <Button>{t('notFound.returnHome')}</Button>
          </Link>
        </Container>
      </div>
  );
};