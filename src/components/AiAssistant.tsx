import { useRef } from 'react';
import { motion } from 'framer-motion';
import ContactForm from './ContactForm';

const AiAssistant = () => {
    const formRef = useRef<HTMLDivElement>(null);

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="py-20 bg-gradient-to-br from-accent/10 to-secondary/20 border-y-2 border-black">
            <div className="neo-container grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="z-10 relative"
                    >
                        <h2 className="neo-heading mb-6 relative z-10">
                            AI-powered Promotion Strategy Assistant
                        </h2>
                        <p className="text-lg mb-8 max-w-xl">
                            Our AI will analyze your business and propose an effective strategy to increase your revenue through digital marketing.
                        </p>
                        <button
                            onClick={scrollToForm}
                            className="neo-button-secondary bg-secondary text-black"
                        >
                            Get Personalized Recommendations
                        </button>
                    </motion.div>

                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="absolute top-0 right-0 -translate-y-6 translate-x-6 w-24 h-24 bg-primary border-2 border-black shadow-neo md:block hidden text-white"
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="absolute bottom-0 left-10 translate-y-6 w-16 h-16 bg-secondary border-2 border-black shadow-neo md:block hidden"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative">
                        {/* Animated illustration with circles and waves, symbolizing AI work */}
                        <div className="w-full h-72 border-2 border-black shadow-neo bg-white overflow-hidden relative">
                            {/* AI Core */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.05, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatType: "reverse"
                                }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-accent border-2 border-black rounded-full flex items-center justify-center"
                            >
                                <span className="text-white font-bold text-lg">AI</span>
                            </motion.div>

                            {/* Concentric circles */}
                            {[40, 70, 100, 130].map((size) => (
                                <motion.div
                                    key={`circle-${size}`}
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{
                                        duration: 4,
                                        repeat: Number.POSITIVE_INFINITY,
                                        repeatType: "reverse",
                                        delay: size / 100
                                    }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-full"
                                    style={{
                                        width: size,
                                        height: size,
                                        opacity: 1 - (size / 200)
                                    }}
                                />
                            ))}

                            {/* Decorative "data" elements */}
                            {[...Array(5)].map((_, i) => {
                                const id = `data-element-${i}-${Date.now()}`;
                                return (
                                    <motion.div
                                        key={id}
                                        animate={{
                                            x: [0, Math.random() * 50 - 25],
                                            y: [0, Math.random() * 50 - 25]
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Number.POSITIVE_INFINITY,
                                            repeatType: "reverse",
                                            delay: i * 0.3
                                        }}
                                        className="absolute w-6 h-6 bg-secondary border-2 border-black"
                                        style={{
                                            top: `${20 + Math.random() * 60}%`,
                                            left: `${20 + Math.random() * 60}%`,
                                            transform: `rotate(${i * 45}deg)`
                                        }}
                                    />
                                );
                            })}

                            {/* Connection lines */}
                            {Array.from({ length: 8 }).map((_, i) => {
                                const angle = i * 45;
                                return (
                                    <motion.div
                                        key={`line-element-${angle}`}
                                        className="absolute top-1/2 left-1/2 h-1 bg-black origin-left"
                                        style={{
                                            width: '40%',
                                            transform: `rotate(${angle}deg)`
                                        }}
                                        animate={{ opacity: [0.3, 0.8, 0.3] }}
                                        transition={{
                                            duration: 1.5,
                                            repeat: Number.POSITIVE_INFINITY,
                                            delay: i * 0.2
                                        }}
                                    />
                                );
                            })}
                        </div>

                        {/* Caption under illustration */}
                        <p className="mt-4 text-center text-sm italic">
                            Our technology processes your business data and creates personalized recommendations
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Contact form for AI assistant */}
            <div className="neo-container mt-16" ref={formRef}>
                <ContactForm
                    title="Get Personalized Recommendations from AI"
                    subtitle="Complete the form, and our AI assistant will prepare a customized promotion strategy for you"
                    isAiAssistant
                />
            </div>
        </section>
    );
};

export default AiAssistant;
