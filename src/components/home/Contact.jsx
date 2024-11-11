import { contactData, profileData } from "@/constants/constant";
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef, useState } from "react";

const ContactForm = () => {
  const form = useRef();
  const captchaRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null); // Store the captcha value

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const captchaToken = captchaValue;


    // Run reCAPTCHA v3 to get the token
    // Use size="invisible" to handle automatic captcha
    // captchaToken = await captchaRef.current.executeAsync();

    if (!captchaToken) {
      setIsLoading(false);
      setResponseMessage('Please complete the reCAPTCHA.');
      return;
    }

    setIsSuccess(false);
    setResponseMessage('');

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      { 'g-recaptcha-response': captchaToken }
    )
      .then(() => {
        setIsLoading(false);
        setIsSuccess(true);
        setResponseMessage('Your message has been sent. Thank you!');
        form.current.reset();
        captchaRef.current.reset();
      })
      .catch((error) => {
        setIsLoading(false);
        setIsSuccess(false);
        setResponseMessage('Failed to send email. Please try again later.');
        captchaRef.current.reset();
        console.error('Error sending email:', error);
      });
  };

  // useEffect to hide responseMessage after 5 seconds
  useEffect(() => {
    if (responseMessage) {
      const timer = setTimeout(() => {
        setResponseMessage('');
      }, 5000); // Hide the message after 5 seconds

      return () => clearTimeout(timer); // Cleanup timeout on component unmount or before running the effect again
    }
  }, [responseMessage]); // Runs when responseMessage changes

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); // Store the captcha response value
  };


  return (
    <form ref={form} onSubmit={handleSubmit} className="php-email-form">
      <div className="row gy-4">
        <div className="col-md-6">
          <input
            type="text"
            name="from_name"
            className="form-control"
            placeholder="Your Name"
            required
          />
        </div>

        <div className="col-md-6">
          <input
            type="email"
            name="from_email"
            className="form-control"
            placeholder="Your Email"
            required
          />
        </div>

        <div className="col-md-12">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            required
          />
        </div>

        <div className="col-md-12">
          <textarea
            name="message"
            className="form-control"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
        </div>

        {/* Google reCAPTCHA */}
        <div className="col-md-12 text-center">
          <ReCAPTCHA
            ref={captchaRef}
            className="g-recaptcha"
            theme="light"
            style={{ display: "inline-block" }}
            sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
            size="normal"
            onChange={handleCaptchaChange} // Store the reCAPTCHA token
          />
        </div>

        <div className="col-md-12 text-center">
          {isLoading && <div className="loading d-block">Loading...</div>}
          {responseMessage && (<div className={`${isSuccess ? 'sent-message' : 'error-message'} d-block`}>{responseMessage}</div>)}
          <button type="submit" disabled={isLoading}>Send Message</button>
        </div>
      </div>
    </form>
  );
};


const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>{contactData.mainSummary}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">

        <div className="row gy-4">

          <div className={contactData.phone ? "col-lg-4" : "col-lg-6"} >
            <div className="box-shadow info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-geo-alt"></i>
              <h3>Address</h3>
              <p>{profileData.city}</p>
            </div>
          </div>

          {contactData.phone && <div className="col-lg-4">
            <div className="box-shadow info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-telephone"></i>
              <h3>Call</h3>
              <p>{contactData.phone}</p>
            </div>
          </div>}

          <div className={contactData.phone ? "col-lg-4" : "col-lg-6"} >
            <div className="box-shadow info-item d-flex flex-column justify-content-center align-items-center" data-aos="fade-up" data-aos-delay="200">
              <i className="bi bi-envelope"></i>
              <h3>Email</h3>
              <p>{contactData.email}</p>
            </div>
          </div>

        </div>

        <div className="row gy-4 mt-1">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="400">
            <div className="box-shadow">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};



export default Contact;
