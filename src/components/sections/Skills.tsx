import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';

interface SkillCategoryProps {
    title: string;
    items: string[];
    delay: number;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({
                                                         title,
                                                         items,
                                                         delay
                                                     }) => {
    return (
        <motion.div
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
                delay: delay * 0.1
            }}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700"
        >
            <h3 className="text-xl font-semibold mb-4">{title}</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
};

export const Skills: React.FC = () => {
    const { t } = useTranslation();

    const categories = [
        { key: 'frontend', delay: 0 },
        { key: 'backend', delay: 1 },
        { key: 'database', delay: 2 },
        { key: 'devops', delay: 3 },
        { key: 'tools', delay: 4 },
        { key: 'security', delay: 5 }
    ];

    return (
        <Section
            id="skills"
            title={t('skills.title')}
            className="bg-gray-50 dark:bg-gray-900"
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(({ key, delay }) => (
                    <SkillCategory
                        key={key}
                        title={t(`skills.${key}.title`)}
                        items={t(`skills.${key}.items`, {
                            returnObjects: true
                        }) as string[]}
                        delay={delay}
                    />
                ))}
            </div>
        </Section>
    );
};