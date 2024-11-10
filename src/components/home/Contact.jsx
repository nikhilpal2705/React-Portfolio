import { contactData } from "@/constants/constant";
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { useEffect, useRef, useState } from "react";

// const ContactOld = () => {
//   return (
//     <section id="contact" className="contact section">
//       <div className="container section-title" data-aos="fade-up">
//         <h2>Contact</h2>
//         <p>{contactData.mainSummary}</p>
//       </div>

//       <div className="container" data-aos="fade" data-aos-delay="100">
//         <div className="row gy-4">
//           <div className="col-lg-4">
//             <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
//               <i className="bi bi-geo-alt flex-shrink-0"></i>
//               <div>
//                 <h3>Address</h3>
//                 <p>{contactData.address}</p>
//               </div>
//             </div>

//             {contactData.phone && <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
//               <i className="bi bi-telephone flex-shrink-0"></i>
//               <div>
//                 <h3>Call</h3>
//                 <p>{contactData.phone}</p>
//               </div>
//             </div>}

//             <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
//               <i className="bi bi-envelope flex-shrink-0"></i>
//               <div>
//                 <h3>Email</h3>
//                 <p>{contactData.email}</p>
//               </div>
//             </div>
//           </div>
//           <div className="col-lg-8" data-aos="fade-up" data-aos-delay="200">
//             <ContactForm />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


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

      <div className="container" data-aos="fade" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="row gy-5">
            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>{contactData.address}</p>
                </div>
              </div>
            </div>

            {contactData.phone && <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call</h3>
                  <p>{contactData.phone}</p>
                </div>
              </div>
            </div>}

            <div className="col-lg-4">
              <div className="info-item d-flex align-items-center">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email</h3>
                  <p>{contactData.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="email-form-shadow" data-aos="fade-up" data-aos-delay="300" >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};



export default Contact;
