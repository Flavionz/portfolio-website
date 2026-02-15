import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import { SendIcon, CheckCircleIcon, XCircleIcon } from 'lucide-react';

const sanitizeInput = (input: string): string => {
  return input
      .trim()
      .replace(/[<>]/g, '')
      .slice(0, 1000);
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email) && email.length <= 254;
};

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    const sanitizedValue = name === 'message'
        ? value.slice(0, 1000)
        : value.slice(0, 100);

    setFormState({
      ...formState,
      [name]: sanitizedValue
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      setErrorMessage('Please wait 1 minute before sending another message.');
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    const sanitizedName = sanitizeInput(formState.name);
    const sanitizedEmail = formState.email.trim().toLowerCase();
    const sanitizedMessage = sanitizeInput(formState.message);

    if (sanitizedName.length < 2 || sanitizedName.length > 100) {
      setErrorMessage('Name must be between 2 and 100 characters.');
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    if (!isValidEmail(sanitizedEmail)) {
      setErrorMessage('Please enter a valid email address.');
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    if (sanitizedMessage.length < 10 || sanitizedMessage.length > 1000) {
      setErrorMessage('Message must be between 10 and 1000 characters.');
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    const linkCount = (sanitizedMessage.match(/https?:\/\//g) || []).length;
    if (linkCount > 2) {
      setErrorMessage('Message contains too many links.');
      setFormStatus('error');
      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 3000);
      return;
    }

    setFormStatus('submitting');

    try {
      await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            from_name: sanitizedName,
            reply_to: sanitizedEmail,
            message: sanitizedMessage,
            to_name: 'Flavio Terenzi',
            sent_at: new Date().toISOString()
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus('success');
      setLastSubmitTime(now);
      setFormState({
        name: '',
        email: '',
        message: ''
      });

      setTimeout(() => {
        setFormStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setErrorMessage('Failed to send message. Please try again.');
      setFormStatus('error');

      setTimeout(() => {
        setFormStatus('idle');
        setErrorMessage('');
      }, 5000);
    }
  };

  return (
      <Section
          id="contact"
          title={t('contact.title')}
          subtitle={t('contact.description')}
          className="bg-white dark:bg-gray-900"
      >
        <div className="max-w-2xl mx-auto">
          <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              onSubmit={handleSubmit}
              className="space-y-6"
          >
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
                    minLength={2}
                    maxLength={100}
                    disabled={formStatus === 'submitting'}
                    autoComplete="name"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    placeholder="Jean Dupont"
                />
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
                    maxLength={254}
                    disabled={formStatus === 'submitting'}
                    autoComplete="email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    placeholder="jean.dupont@example.com"
                />
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
                  minLength={10}
                  maxLength={1000}
                  rows={6}
                  disabled={formStatus === 'submitting'}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed transition-colors resize-none"
                  placeholder={t('contact.form.message')}
              />
              <div className="mt-1 text-sm text-gray-500 dark:text-gray-400 text-right">
                {formState.message.length}/1000
              </div>
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4">
              <Button
                  type="submit"
                  size="lg"
                  className="flex items-center gap-2"
                  disabled={formStatus === 'submitting'}
              >
                {formStatus === 'submitting' ? (
                    <>
                      <svg
                          className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                      >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      {t('contact.form.send')}
                    </>
                ) : (
                    <>
                      <SendIcon className="h-4 w-4" />
                      {t('contact.form.send')}
                    </>
                )}
              </Button>

              {formStatus === 'success' && (
                  <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-green-600 dark:text-green-500 font-medium"
                  >
                    <CheckCircleIcon className="h-5 w-5" />
                    <span>{t('contact.form.success')}</span>
                  </motion.div>
              )}

              {formStatus === 'error' && (
                  <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-2 text-red-600 dark:text-red-500 font-medium"
                  >
                    <XCircleIcon className="h-5 w-5" />
                    <span>{errorMessage || t('contact.form.error')}</span>
                  </motion.div>
              )}
            </div>
          </motion.form>
        </div>
      </Section>
  );
};