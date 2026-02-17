import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';

const hobbyIcons = ['⚔️', '♟️', '📚', '🏋️'];

export const Passions = () => {
    const { t } = useTranslation();

    const items = t('passions.items', { returnObjects: true }) as Array<{
        title: string;
        subtitle: string;
        description: string;
    }>;

    return (
        <Section
            id="passions"
            title={t('passions.title')}
            subtitle={t('passions.subtitle')}
            className="bg-white dark:bg-gray-900"
        >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {Array.isArray(items) && items.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -6, transition: { duration: 0.2 } }}
                        className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 flex flex-col gap-4 group cursor-default"
                    >
                        <div className="text-5xl group-hover:scale-110 transition-transform duration-200">
                            {hobbyIcons[index]}
                        </div>
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                                {item.title}
                            </h3>
                            <p className="text-sm font-medium text-primary mb-3">
                                {item.subtitle}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};
