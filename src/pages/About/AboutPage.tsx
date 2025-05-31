import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';

const AboutPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-8 text-center"
                >
                    About <span className="text-primary">Us</span>
                </motion.h1>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    PS.IT - Empowering You to Thrive in the Modern Digital World
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="neo-box mb-8">
                            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                            <p className="mb-4">
                                At PS.IT, we believe technology should empower, not overwhelm. That’s why we’ve built a platform that helps businesses do more with less — and do it better.
                            </p>
                            <p>
                                We're committed to staying at the forefront of digital trends, technologies, and best practices to ensure our clients always receive cutting-edge solutions that keep them ahead of their competition.
                            </p>
                        </div>

                        <div className="neo-box">
                            <h2 className="text-2xl font-bold mb-4">Our Approach</h2>
                            <p className="mb-4">
                                We understand that each business is unique, which is why we take a personalized approach to every client. We begin by thoroughly understanding your business, goals, and target audience before crafting a custom digital strategy.
                            </p>
                            <p>
                                Our data-driven methodology ensures that every decision we make is backed by solid analytics and research, allowing us to continuously optimize campaigns for maximum ROI.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="relative h-full neo-box bg-card flex flex-col">
                            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
                            <p className="mb-6">
                                Driven by a passion for clean design and functional software, Huy Thomas started PS.IT with one goal: to help businesses save time through smart automation. With a background in software engineering and years of experience building tools for startups and enterprises, Huy brings both vision and execution to everything we do.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="border-2 border-black p-4 bg-white">
                                    <div className="w-16 h-16 mb-3 bg-secondary text-black flex items-center justify-center font-bold text-xl border-2 border-black">HCT</div>
                                    <h3 className="font-bold mb-1">Huy C. Thomas</h3>
                                    <p className="text-sm">Founder & CEO</p>
                                </div>

                                {/* <div className="border-2 border-black p-4 bg-white">
                                    <div className="w-16 h-16 mb-3 bg-secondary text-black flex items-center justify-center font-bold text-xl border-2 border-black">JB</div>
                                    <h3 className="font-bold mb-1">James Blake</h3>
                                    <p className="text-sm">Head of SEO</p>
                                </div>

                                <div className="border-2 border-black p-4 bg-white">
                                    <div className="w-16 h-16 mb-3 bg-accent text-white flex items-center justify-center font-bold text-xl border-2 border-black">EW</div>
                                    <h3 className="font-bold mb-1">Emily Watson</h3>
                                    <p className="text-sm">Content Director</p>
                                </div>

                                <div className="border-2 border-black p-4 bg-white">
                                    <div className="w-16 h-16 mb-3 bg-primary text-white flex items-center justify-center font-bold text-xl border-2 border-black">DM</div>
                                    <h3 className="font-bold mb-1">Daniel Miller</h3>
                                    <p className="text-sm">Social Media Lead</p>
                                </div> */}
                            </div>

                            <p className="mt-auto">
                                I built this product to solve the problems I faced myself — and I’m committed to making it even better every single day
                            </p>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="neo-box">
                            <div className="w-16 h-16 mb-4 bg-secondary text-black flex items-center justify-center border-2 border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Clarity Over Complexity</h3>
                            <p>
                                We believe the best tools are the ones that don’t need a manual. Simplicity in design and purpose is at the core of everything we create.
                            </p>
                        </div>

                        <div className="neo-box">
                            <div className="w-16 h-16 mb-4 bg-secondary text-black flex items-center justify-center border-2 border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Relentless Improvement</h3>
                            <p>
                                We’re never “done.” We iterate quickly, learn from feedback, and continuously release updates that make our platform smarter, faster, and more valuable.
                            </p>
                        </div>

                        <div className="neo-box">
                            <div className="w-16 h-16 mb-4 bg-secondary text-black flex items-center justify-center border-2 border-black">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Customer First, Always</h3>
                            <p>
                                We exist to serve our users. Every feature, update, and decision is guided by the question: "How does this help our customers succeed?"
                            </p>
                        </div>
                    </div>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
