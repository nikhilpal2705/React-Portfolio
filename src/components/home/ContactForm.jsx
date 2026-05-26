import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';
import { toast } from 'react-toastify';
import { useTheme } from '@/hooks/useTheme';

const ContactForm = () => {
    const { isDarkMode, themeChangeKey } = useTheme(); // Access the current theme from context
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const captchaRef = useRef();
    const [isLoading, setIsLoading] = useState(false);
    const [captchaValue, setCaptchaValue] = useState(null); // Store captcha value

    const onSubmit = async (data) => {
        setIsLoading(true);
        const captchaToken = captchaRef.current?.getValue() || captchaValue;
        // Run reCAPTCHA v3 to get the token
        // Use size="invisible" to handle automatic captcha
        // captchaToken = await captchaRef.current.executeAsync();

        if (!captchaToken) {
            setIsLoading(false);
            toast.warn('Please complete the reCAPTCHA.', {
                toastId: 'recaptchaWarning', // Fixed ID ensures seamless replacement
            });
            return;
        }

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
                ...data,
                'g-recaptcha-response': captchaToken,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setIsLoading(false);
                toast.success('Your message has been sent. Thank you!', {
                    toastId: 'successSent'
                });
                reset();
                captchaRef.current?.reset(); // Safely reset the reCAPTCHA widget
                setCaptchaValue(null);
            })
            .catch((error) => {
                setIsLoading(false);
                toast.error('Failed to send email. Please try again later.', {
                    toastId: 'failedSendError'
                });
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
        <form onSubmit={handleSubmit(onSubmit)} className="php-email-form" noValidate>
            <div className="contact-form-header">
                <span className="contact-form-kicker">Let&apos;s Connect</span>
                <h3>Send Me a Message</h3>
                <p>Have a role, project, or collaboration in mind? Share a few details and I&apos;ll get back to you soon.</p>
            </div>

            <div className="row gy-4 contact-form-body">
                <div className="col-md-6">
                    <div className="contact-input-wrap">
                        <label htmlFor="contact-name" className="contact-field-label">Your Name</label>
                        <input
                            id="contact-name"
                            type="text"
                            placeholder="Enter your full name"
                            autoComplete="name"
                            {...register('from_name', { required: 'Your Name is required.' })}
                            className={`form-control ${errors.from_name && 'is-invalid'}`}
                            aria-invalid={!!errors.from_name}
                        />
                        {errors.from_name && (
                            <div className="invalid-feedback">{errors.from_name.message}</div>
                        )}
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="contact-input-wrap">
                        <label htmlFor="contact-email" className="contact-field-label">Your Email</label>
                        <input
                            id="contact-email"
                            type="email"
                            placeholder="Enter your email address"
                            autoComplete="email"
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
                </div>

                <div className="col-md-12">
                    <div className="contact-input-wrap">
                        <label htmlFor="contact-subject" className="contact-field-label">Subject</label>
                        <input
                            id="contact-subject"
                            type="text"
                            placeholder="What would you like to discuss?"
                            autoComplete="off"
                            {...register('subject', { required: 'Subject is required.' })}
                            className={`form-control ${errors.subject && 'is-invalid'}`}
                            aria-invalid={!!errors.subject}
                        />
                        {errors.subject && (
                            <div className="invalid-feedback">{errors.subject.message}</div>
                        )}
                    </div>
                </div>

                <div className="col-md-12">
                    <div className="contact-input-wrap">
                        <label htmlFor="contact-message" className="contact-field-label">Message</label>
                        <textarea
                            id="contact-message"
                            rows="6"
                            placeholder="Tell me a bit about your requirement, role, or project."
                            autoComplete="off"
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
                </div>

                {/* Google reCAPTCHA */}
                <div className="col-md-12">
                    <div className="contact-form-actions">
                        <div className="contact-captcha-wrap">
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

                        <button type="submit" disabled={isLoading} className="download-btn contact-submit-btn" aria-busy={isLoading}>
                            {isLoading ? (<span><span className="loading-spinner"></span> Sending...</span>) : ('Send Message')}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;
