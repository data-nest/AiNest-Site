'use client';
import React, { useRef, useState } from 'react';
import Image from 'next/image';
import CustomerCareGirl from '@/public/images/ContactusImg.png';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const ContactUs: React.FC = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [feedback, setFeedback] = useState('');
  const [feedbackColor, setFeedbackColor] = useState('text-green-500');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    // Disable button and start loading
    setLoading(true);

    if (form.current) {
      emailjs
        .sendForm('service_svjdv95', 'template_k3bkfvb', form.current, 'B9DqXsw67CrADyO7n')
        .then(
          () => {
            console.log('SUCCESS!');
            toast("Thanks! Our team will reach you shortly");
            resetForm(); // Clear form fields after successful submission
            setLoading(false); // Re-enable the button after the process
          },
          (error) => {
            console.log('FAILED...', error.text);
            setLoading(false); // Re-enable the button even if there is an error
          }
        );
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setNameError(''); // Clear error on change
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError(''); // Clear error on change
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    setPhoneError(''); // Clear error on change
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);

    setMessageError(''); // Clear error on change
  };

  const validateEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePhone = (phone: string) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleSubmit = () => {
    let isValid = true;

    if (!name) {
      setNameError('Please enter your name.');
      isValid = false;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      isValid = false;
    }

    if (!validatePhone(phone)) {
      setPhoneError('Please enter a valid 10-digit phone number.');
      isValid = false;
    }

    if (!message) {
      setMessageError('Please enter your message.');
      isValid = false;
    }

    if (isValid) {
      setFeedbackColor('text-green-500');
      setFeedback('Thank you! Our team will reach out to you soon.');
      setSubmitted(true);
      setTimeout(() => resetForm(), 3000);
    }
  };

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setNameError('');
    setEmailError('');
    setPhoneError('');
    setMessageError('');
    setFeedback('');
    setSubmitted(false);
  };

  return (
    <div className="py-12 md:py-20 border-t border-gray-800 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          className="relative w-full md:max-w-4xl bg-gray-800 rounded-lg p-8 flex flex-col md:flex-row"
          style={{
            boxShadow: '0 4px 8px rgba(107, 70, 193, 0.3), 0 8px 16px rgba(253, 29, 29, 0.3)',
          }}
        >
          <div className="w-full md:w-1/2 pt-5">
            <Image src={CustomerCareGirl} alt="Customer Care Girl" className="h-auto w-full" />
          </div>
          <form onSubmit={sendEmail} ref={form} className="w-full md:w-1/2 pl-0 md:pl-8">
            {submitted ? (
              <p className={`${feedbackColor} mt-4 text-2xl font-bold`}>{feedback}</p>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-500">Contact Us</h2>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2">Name</label>
                  <input
                    type="text"
                    value={name}
                    placeholder="Enter your name"
                    onChange={handleNameChange}
                    name='name'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {nameError && <p className="text-red-500 text-sm mt-1">{nameError}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2">Email</label>
                  <input
                    type="email"
                    value={email}
                    name='email'
                    placeholder="Enter your email address"
                    onChange={handleEmailChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2">Phone Number</label>
                  <input
                    type="text"
                    name='phone'
                    value={phone}
                    placeholder="Enter your phone number"
                    onChange={handlePhoneChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
                </div>
                <div className="mb-4">
                  <label className="block text-gray-300 text-sm font-bold mb-2">Message</label>
                  <textarea
                    value={message}
                    placeholder="Enter your message here"
                    onChange={handleMessageChange}
                    name='message'
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24"
                  />
                  {messageError && <p className="text-red-500 text-sm mt-1">{messageError}</p>}
                </div>
                <button
                  type='submit'
                  disabled={loading}
                  className={`bg-gradient-to-r from-purple-600 via-fuchsia-700 to-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
