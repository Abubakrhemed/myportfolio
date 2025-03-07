import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './FormStyles.css';

const ContactForm = () => {
  const form = useRef();
  const [result, setResult] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setResult('Sending...');

    emailjs.sendForm('service_4laxu12', 'template_t0m5gw5', form.current, '7Qy_GJsBkWVFEaL-0')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
        setResult('Form Submitted Successfully');
        e.target.reset();
      }, (error) => {
        console.log(error.text);
        alert('Failed to send email. Please try again later.');
        setResult('Failed to send email. Please try again later.');
      });
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
        <input type="text" name="from_name" required />

        <label>Your Email</label>
        <input type="email" name="from_email" required />

        <label>Subject</label>
        <input type="text" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="6" required />

        <button type="submit" className="btn">Submit</button>
      </form>
      {result && <p>{result}</p>}
    </div>
  );
};

export default ContactForm;
