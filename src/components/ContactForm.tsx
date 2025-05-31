import { useState, type FormEvent } from 'react';

interface ContactFormProps {
    title?: string;
    subtitle?: string;
    isAiAssistant?: boolean;
}

const ContactForm = ({
    title = 'Contact Us',
    subtitle = 'Fill out the form below, and we will get back to you as soon as possible',
    isAiAssistant = false,
}: ContactFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        // Simulating form submission
        setTimeout(() => {
            try {
                // In a real application, this would be an API call
                console.log('Form data:', formData);
                setIsSubmitted(true);
                setIsSubmitting(false);
                // Reset form
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    company: '',
                    message: '',
                });
            } catch (error) {
                setIsSubmitting(false);
                setError('An error occurred while submitting the form. Please try again.');
            }
        }, 1000);
    };

    return (
        <div className={`neo-box ${isAiAssistant ? 'bg-accent/10' : 'bg-white'}`} id="contact-form">
            <div className="mb-6">
                <h3 className="neo-subheading mb-2">{title}</h3>
                <p className="text-gray-600">{subtitle}</p>
            </div>

            {isSubmitted ? (
                <div className="bg-green-100 border-2 border-green-500 p-6 rounded-medium">
                    <h4 className="font-bold text-xl mb-2">Message Sent!</h4>
                    <p>Thank you for reaching out. We will contact you shortly.</p>
                    <button
                        onClick={() => setIsSubmitted(false)}
                        className="mt-4 neo-button bg-secondary text-black"
                    >
                        Send Another
                    </button>
                </div>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block mb-2 font-medium">
                                Name <span className="text-primary">*</span>
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="neo-input"
                                placeholder="Your name"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block mb-2 font-medium">
                                Email <span className="text-primary">*</span>
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="neo-input"
                                placeholder="your@email.com"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="phone" className="block mb-2 font-medium">
                                Phone
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="neo-input"
                                placeholder="+44 (___) ___-__-__"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block mb-2 font-medium">
                                Company
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="neo-input"
                                placeholder="Your company name"
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 font-medium">
                            Message <span className="text-primary">*</span>
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="neo-input resize-none"
                            placeholder="Please describe your inquiry in detail..."
                        />
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-100 border-2 border-red-500 text-red-700 rounded-medium">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`neo-button-secondary w-full ${isAiAssistant ? 'bg-secondary text-black' : 'bg-primary'} ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : isAiAssistant ? 'Get Personalized Recommendations' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;
