import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface Testimonial {
    id: string;
    name: string;
    company: string;
    position: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 'testimonial-1',
        name: 'Arjun P.',
        company: 'TechExpert Ltd',
        position: 'Product Manager',
        content: 'I love how easy it is to use your platform. It just works — no long training or manuals needed.',
        rating: 5,
    },
    {
        id: 'testimonial-2',
        name: 'Linda G',
        company: 'Urban Style',
        position: 'E-commerce Business Owner',
        content: 'We\'ve used multiple SaaS tools, but yours stands out for speed, simplicity, and support.',
        rating: 5,
    },
    {
        id: 'testimonial-3',
        name: 'Maria Johnson',
        company: 'Fintech Pulse',
        position: 'CTO',
        content: 'We scaled our operations with PS.IT and cut admin time by over 60% in just 3 months!',
        rating: 5,
    },
    {
        id: 'testimonial-4',
        name: 'Dmitry King',
        company: 'FitLife Center',
        position: 'Co-founder',
        content: 'PS.IT helped us attract clients during the pandemic when fitness centers were experiencing difficulties. Their creative approach and agility in adapting strategies to changing market conditions was exactly what we needed.',
        rating: 4,
    },
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    useEffect(() => {
        if (!autoplay) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [autoplay]);

    const handlePrev = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setAutoplay(false);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const handleDotClick = (index: number) => {
        setAutoplay(false);
        setCurrentIndex(index);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10 border-y-2 border-black">
            <div className="neo-container max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="neo-heading mb-6"
                    >
                        What our <span className="text-primary">clients</span> say
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Decorative elements */}
                    <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-black bg-secondary transform rotate-12 hidden md:block" />
                    <div className="absolute -bottom-10 -right-10 w-16 h-16 border-2 border-black bg-primary transform -rotate-12 hidden md:block" />

                    <div className="relative bg-white border-2 border-black shadow-neo p-8 md:p-12">
                        <motion.div
                            key={currentTestimonial.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            {/* Quotes */}
                            <div className="mb-6">
                                <svg className="w-12 h-12 text-primary/30" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                </svg>
                            </div>

                            <div className="mb-8">
                                <p className="text-xl md:text-2xl italic mb-6">{currentTestimonial.content}</p>
                                <div className="flex items-center">
                                    {[1, 2, 3, 4, 5].map((starNumber) => (
                                        <svg
                                            key={`star-${currentTestimonial.id}-${starNumber}`}
                                            className={`w-6 h-6 ${starNumber <= currentTestimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                        >
                                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="w-12 h-12 bg-primary text-black flex items-center justify-center font-bold border-2 border-black">
                                    {currentTestimonial.name.charAt(0)}
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                                    <p className="text-gray-600">{currentTestimonial.position}, {currentTestimonial.company}</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex justify-between mt-8">
                            <button
                                onClick={handlePrev}
                                className="neo-button-secondary px-4 py-2 text-sm"
                            >
                                Previous
                            </button>

                            <div className="flex space-x-2">
                                {testimonials.map((testimonial) => (
                                    <button
                                        key={`dot-${testimonial.id}`}
                                        onClick={() => handleDotClick(testimonials.indexOf(testimonial))}
                                        className={`w-3 h-3 rounded-full border border-black ${testimonials.indexOf(testimonial) === currentIndex ? 'bg-primary' : 'bg-white'
                                            }`}
                                        aria-label={`Go to testimonial ${testimonials.indexOf(testimonial) + 1}`}
                                    />
                                ))}
                            </div>

                            <button
                                onClick={handleNext}
                                className="neo-button-secondary px-4 py-2 text-sm"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
