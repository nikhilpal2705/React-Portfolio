import { useRef, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useTheme } from '@/hooks/useTheme';

const ContactForm = () => {
    const { isDarkMode, themeChangeKey } = useTheme(); // Access the current theme from context
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const captchaRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null); // Store captcha value

    useEffect(() => {
        setCaptchaValue(null);
    }, [isDarkMode]);

    const onSubmit = async (data) => {
        setIsLoading(true);
        // Run reCAPTCHA v3 to get the token
        // Use size="invisible" to handle automatic captcha
        // captchaToken = await captchaRef.current.executeAsync();

        if (!captchaValue) {
            setIsLoading(false);
            toast.warn('Please complete the reCAPTCHA.');
            return;
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                ...data,
                'g-recaptcha-response': captchaValue,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsLoading(false);
                toast.success('Your message has been sent. Thank you!');
                reset();
                captchaRef.current?.reset(); // Safely reset the reCAPTCHA widget
                setCaptchaValue(null);
            })
            .catch((error) => {
                setIsLoading(false);
                toast.error('Failed to send email. Please try again later.');
                console.error('Error sending email:', error?.text || error);
                captchaRef.current?.reset(); // Safely reset the reCAPTCHA widget
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
        <form onSubmit={handleSubmit(onSubmit)} className="php-email-form">
            <div className="row gy-4">
                <div className="col-md-6">
                    <input
                        type="text"
                        placeholder="Your Name"
                        {...register('from_name', { required: 'Your Name is required.' })}
                        className={`form-control ${errors.from_name && 'is-invalid'}`}
                        aria-invalid={!!errors.from_name}
                    />
                    {errors.from_name && (
                        <div className="invalid-feedback">{errors.from_name.message}</div>
                    )}
                </div>

                <div className="col-md-6">
                    <input
                        type="email"
                        placeholder="Your Email"
                        {...register('from_email', {
                            required: 'Your Email is required.',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Invalid email address.',
                            },
                        })}
                        className={`form-control ${errors.from_email && 'is-invalid'}`}
                        aria-invalid={!!errors.from_email}
                    />
                    {errors.from_email && (
                        <div className="invalid-feedback">{errors.from_email.message}</div>
                    )}
                </div>

                <div className="col-md-12">
                    <input
                        type="text"
                        placeholder="Subject"
                        {...register('subject', { required: 'Subject is required.' })}
                        className={`form-control ${errors.subject && 'is-invalid'}`}
                        aria-invalid={!!errors.subject}
                    />
                    {errors.subject && (
                        <div className="invalid-feedback">{errors.subject.message}</div>
                    )}
                </div>

                <div className="col-md-12">
                    <textarea
                        rows="6"
                        placeholder="Message"
                        {...register('message', {
                            required: 'Message is required.',
                            minLength: {
                                value: 10,
                                message: 'Message must be at least 10 characters long.',
                            },
                        })}
                        className={`form-control ${errors.message && 'is-invalid'}`}
                        aria-invalid={!!errors.message}
                    ></textarea>
                    {errors.message && (
                        <div className="invalid-feedback">{errors.message.message}</div>
                    )}
                </div>

                {/* Google reCAPTCHA */}
                <div className="col-md-12 text-center">
                    <ReCAPTCHA
                        ref={captchaRef}
                        className="g-recaptcha"
                        theme={isDarkMode ? 'dark' : 'light'} // Dynamically set the theme
                        key={themeChangeKey} // Force remount on theme change
                        style={{ display: 'inline-block' }}
                        sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_SITE_KEY}
                        size="normal"
                        onChange={handleCaptchaChange} // Set captcha value on change
                    />
                </div>

                <div className="col-md-12 text-center">
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? (<span><span className="loading-spinner"></span> Sending...</span>) : ('Send Message')}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
