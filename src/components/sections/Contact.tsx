import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { SendIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';
export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'>(
    'idle');
  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate form submission
    setTimeout(() => {
      // For demo purposes, let's assume the form submission is successful
      setFormStatus('success');
      setFormState({
        name: '',
        email: '',
        message: ''
      });
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1000);
  };
  return (
    <Section
      id="contact"
      title={t('contact.title')}
      subtitle={t('contact.description')}
      className="bg-white dark:bg-gray-900">

      <div className="max-w-2xl mx-auto">
        <motion.form
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
            duration: 0.5
          }}
          onSubmit={handleSubmit}
          className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent" />

            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent" />

            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary focus:border-transparent" />

          </div>
          <div className="flex items-center justify-between">
            <Button
              type="submit"
              size="lg"
              className="flex items-center gap-2"
              disabled={formStatus === 'submitting'}>

              {formStatus === 'submitting' ?
              <>
                  <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">

                    <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4">
                  </circle>
                    <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                  </path>
                  </svg>
                  {t('contact.form.send')}
                </> :

              <>
                  <SendIcon className="h-4 w-4" />
                  {t('contact.form.send')}
                </>
              }
            </Button>
            {formStatus === 'success' &&
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="flex items-center gap-2 text-green-600 dark:text-green-500">

                <CheckCircleIcon className="h-5 w-5" />
                <span>{t('contact.form.success')}</span>
              </motion.div>
            }
            {formStatus === 'error' &&
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              className="flex items-center gap-2 text-red-600 dark:text-red-500">

                <XCircleIcon className="h-5 w-5" />
                <span>{t('contact.form.error')}</span>
              </motion.div>
            }
          </div>
        </motion.form>
      </div>
    </Section>);

};