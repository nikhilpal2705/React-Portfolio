import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useTheme } from '@/hooks/useTheme';

const ContactForm = () => {
    const { isDarkMode, themeChangeKey } = useTheme(); // Access the current theme from context
    const form = useRef();
    const captchaRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null); // Store captcha value

    useEffect(() => {
        setCaptchaValue(null);
    }, [isDarkMode])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        // Run reCAPTCHA v3 to get the token
        // Use size="invisible" to handle automatic captcha
        // captchaToken = await captchaRef.current.executeAsync();

        if (!captchaValue) {
            setIsLoading(false);
            toast.warn('Please complete the reCAPTCHA.');
            return;
        }

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
            { 'g-recaptcha-response': captchaValue }
        )
            .then(() => {
                setIsLoading(false);
                toast.success('Your message has been sent. Thank you!');
                form.current.reset();
                captchaRef.current.reset(); // Reset the reCAPTCHA widget
                setCaptchaValue(null);
            })
            .catch((error) => {
                setIsLoading(false);
                toast.error('Failed to send email. Please try again later.');
                console.error('Error sending email:', error);
                captchaRef.current.reset(); // Reset the reCAPTCHA widget
                setCaptchaValue(null);
            });
    };

    const handleCaptchaChange = (value) => {
        if (value) {
            toast.dismiss();
        }
        setCaptchaValue(value); // Store the captcha token on change
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
                        theme={isDarkMode ? 'dark' : 'light'}  // Dynamically set the theme
                        key={themeChangeKey}  // Force remount on theme change
                        style={{ display: "inline-block" }}
                        sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
                        size="normal"
                        onChange={handleCaptchaChange} // Set captcha value on change
                    />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? (<span><span className="loading-spinner"></span>Sending...</span>) : ("Send Message")}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
