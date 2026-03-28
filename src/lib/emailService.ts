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

  const templateParams = {
    from_name: data.name,
    from_email: data.email,
    subject: data.subject,
    message: data.message,
  };

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID);
};
