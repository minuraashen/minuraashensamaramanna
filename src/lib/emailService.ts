import emailjs from '@emailjs/browser';

export const sendEmail = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  // Replace these with your actual EmailJS service/template/user IDs
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  // Validate environment configuration early to fail fast with a clear error
  const missing: string[] = [];
  if (!SERVICE_ID) missing.push('VITE_EMAILJS_SERVICE_ID');
  if (!TEMPLATE_ID) missing.push('VITE_EMAILJS_TEMPLATE_ID');
  if (!USER_ID) missing.push('VITE_EMAILJS_USER_ID');

  if (missing.length > 0) {
    throw new Error(
      `Missing EmailJS environment variables: ${missing.join(', ')}. ` +
        'Set them in your environment (e.g. .env) and restart the dev server.'
    );
  }

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  };

  return emailjs.send(SERVICE_ID as string, TEMPLATE_ID as string, templateParams, USER_ID as string);
};
