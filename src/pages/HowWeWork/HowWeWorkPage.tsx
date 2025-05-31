import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';

const HowWeWorkPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-8 text-center"
                >
                    How We <span className="text-primary">Work</span>
                </motion.h1>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    We make it simple, efficient, and transparent — from your first click to full-scale success. Here's how we bring your business to the next level:
                </p>

                <div className="grid gap-8 mb-20">
                    {/* Подробное содержимое страницы будет добавлено позже */}
                    <div className="neo-box">
                        <h2 className="text-2xl font-bold mb-4">Understand Your Needs</h2>
                        <p>
                            We start by learning about your business goals, pain points, and current workflows. Whether you're looking to automate tasks, analyze data, or integrate tools, we tailor our solution to your unique needs.
                        </p>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    <ContactForm title="Ready to start working with us?" subtitle="Fill out the form below and we will contact you to discuss your project." />
                </div>
            </div>
        </div>
    );
};

export default HowWeWorkPage;
