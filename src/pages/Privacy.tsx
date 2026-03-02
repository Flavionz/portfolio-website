import { useTranslation } from 'react-i18next';
import { Container } from '../components/ui/Container';
import { Link } from 'react-router-dom';

export const Privacy = () => {
    const { t } = useTranslation();

    const sections = t('privacy.sections', { returnObjects: true }) as Array<{
        title: string;
        content: string | string[];
    }>;

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 pt-24 pb-16">
            <Container>
                <div className="max-w-4xl mx-auto">

                    <div className="mb-8">
                        <Link
                            to="/"
                            className="text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-2"
                        >
                            ← {t('privacy.backToHome')}
                        </Link>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        {t('privacy.title')}
                    </h1>

                    <p className="text-gray-600 dark:text-gray-400 mb-2">
                        {t('privacy.lastUpdate')}: {t('privacy.date')}
                    </p>

                    <p className="text-lg text-gray-700 dark:text-gray-300 mb-12 leading-relaxed">
                        {t('privacy.intro')}
                    </p>

                    <div className="space-y-8">
                        {Array.isArray(sections) && sections.map((section, index) => (
                            <section key={index} className="border-l-4 border-primary pl-6">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                    {section.title}
                                </h2>
                                {Array.isArray(section.content) ? (
                                    <ul className="space-y-2">
                                        {section.content.map((item, i) => (
                                            <li key={i} className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                                • {item}
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                                        {section.content}
                                    </p>
                                )}
                            </section>
                        ))}
                    </div>

                    <div className="mt-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                            {t('privacy.contactTitle')}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-2">
                            {t('privacy.contactText')}
                        </p>
                        <a
                            href="mailto:flavionz@hotmail.it"
                            className="text-primary hover:text-primary-dark font-medium"
                        >
                            flavionz@hotmail.it
                        </a>
                    </div>

                </div>
            </Container>
        </div>
    );
};