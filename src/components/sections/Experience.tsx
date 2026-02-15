import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { BriefcaseIcon, GraduationCapIcon } from 'lucide-react';
interface TimelineItemProps {
  role: string;
  company: string;
  period: string;
  description: string;
  isLast: boolean;
  delay: number;
}
const TimelineItem: React.FC<TimelineItemProps> = ({
  role,
  company,
  period,
  description,
  isLast,
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
      className="relative pl-8">

      {!isLast &&
      <div className="absolute left-3.5 top-5 -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
      }
      <div className="absolute left-3.5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-primary flex items-center justify-center">
        <BriefcaseIcon className="h-4 w-4 text-white" />
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold">{role}</h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium">{company}</span>
          <span className="hidden sm:inline">•</span>
          <span>{period}</span>
        </div>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>);

};
interface EducationTimelineItemProps {
  degree: string;
  institution: string;
  period: string;
  isLast: boolean;
  delay: number;
}
const EducationTimelineItem: React.FC<EducationTimelineItemProps> = ({
  degree,
  institution,
  period,
  isLast,
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
      className="relative pl-8">

      {!isLast &&
      <div className="absolute left-3.5 top-5 -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-secondary/50 to-primary/50 dark:from-secondary/30 dark:to-primary/30" />
      }
      <div className="absolute left-3.5 top-5 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center shadow-md">
        <GraduationCapIcon className="h-4 w-4 text-white" />
      </div>
      <div className="pb-8">
        <h3 className="text-xl font-bold bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
          {degree}
        </h3>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-gray-600 dark:text-gray-400 mb-2">
          <span className="font-medium">{institution}</span>
          <span className="hidden sm:inline">•</span>
          <span className="text-secondary dark:text-secondary-light font-medium">
            {period}
          </span>
        </div>
      </div>
    </motion.div>);

};
export const Experience: React.FC = () => {
  const { t } = useTranslation();
  const experienceItems = t('experience.items', {
    returnObjects: true
  }) as Array<{
    role: string;
    company: string;
    period: string;
    description: string;
  }>;
  const education = t('experience.education', {
    returnObjects: true
  }) as {
    title: string;
    items: Array<{
      degree: string;
      institution: string;
      period: string;
    }>;
  };
  return (
    <Section
      id="experience"
      title={t('experience.title')}
      className="bg-gray-50 dark:bg-gray-900">

      <div className="max-w-3xl mx-auto">
        <div className="mb-16">
          {experienceItems.map((item, index) =>
          <TimelineItem
            key={index}
            role={item.role}
            company={item.company}
            period={item.period}
            description={item.description}
            isLast={index === experienceItems.length - 1}
            delay={index} />

          )}
        </div>
        <motion.div
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.5
          }}
          className="mt-16">

          <h3 className="text-2xl font-bold mb-8 text-center">
            {education.title}
          </h3>
          <div>
            {education.items.map((item, index) =>
            <EducationTimelineItem
              key={index}
              degree={item.degree}
              institution={item.institution}
              period={item.period}
              isLast={index === education.items.length - 1}
              delay={index} />

            )}
          </div>
        </motion.div>
      </div>
    </Section>);

};