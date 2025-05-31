import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="neo-container flex flex-col lg:flex-row justify-between items-center gap-10 lg:gap-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 relative z-10"
                >
                    <h1 className="neo-heading mb-6">
                        Transforming your business with
                        <span className="text-primary block"> PS.IT</span>
                    </h1>
                    <p className="text-xl mb-10 max-w-2xl">
                        All-in-one cloud solution to streamline operations, boost productivity, and accelerate growth. Let us help you <span className="font-bold">actually work</span>.
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a href="#contact-form" className="neo-button-secondary bg-primary">
                            Discuss Project
                        </a>
                        <a href="/services" className="neo-button-secondary">
                            Our Services
                        </a>
                    </div>

                    {/* Decorative elements */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                        className="hidden lg:block absolute -bottom-12 -left-6 w-20 h-20 bg-secondary border-2 border-black shadow-neo transform rotate-12"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 relative w-full max-w-lg"
                >
                    {/* Neo-brutalist animated illustration */}
                    <div className="w-full aspect-square border-2 border-black shadow-neo relative bg-white overflow-hidden">
                        {/* Growth charts in neo-brutalism style */}
                        <div className="absolute inset-0 p-6">
                            {/* Grid */}
                            <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                                {Array.from({ length: 36 }, (_, i) => {
                                    const row = Math.floor(i / 6);
                                    const col = i % 6;
                                    const cellId = `grid-cell-${row}-${col}`;
                                    return (
                                        <div key={cellId} className="border border-gray-200" />
                                    );
                                })}
                            </div>

                            {/* Charts */}
                            <motion.div
                                animate={{ height: ['60%', '80%', '70%'] }}
                                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse' }}
                                className="absolute left-10 bottom-10 w-12 bg-primary border-2 border-black"
                            />
                            <motion.div
                                animate={{ height: ['40%', '65%', '55%'] }}
                                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse', delay: 0.2 }}
                                className="absolute left-[calc(10px+4rem)] bottom-10 w-12 bg-secondary border-2 border-black"
                            />
                            <motion.div
                                animate={{ height: ['50%', '75%', '60%'] }}
                                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, repeatType: 'reverse', delay: 0.4 }}
                                className="absolute left-[calc(10px+8rem)] bottom-10 w-12 bg-accent border-2 border-black"
                            />

                            {/* Trend line */}
                            <motion.svg
                                viewBox="0 0 300 200"
                                className="absolute inset-0 w-full h-full"
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: 1 }}
                                transition={{ duration: 2, delay: 0.5 }}
                            >
                                <motion.path
                                    d="M 30,150 Q 90,50 150,100 T 270,50"
                                    fill="none"
                                    stroke="#000"
                                    strokeWidth="4"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 2, delay: 0.5 }}
                                />
                            </motion.svg>

                            {/* Decorative data points */}
                            {[
                                { x: 30, y: 150, id: 'point-start' },
                                { x: 90, y: 70, id: 'point-up' },
                                { x: 150, y: 100, id: 'point-middle' },
                                { x: 210, y: 60, id: 'point-down' },
                                { x: 270, y: 50, id: 'point-end' },
                            ].map((point) => (
                                <motion.div
                                    key={point.id}
                                    className="absolute w-4 h-4 bg-white border-2 border-black rounded-full"
                                    style={{ left: point.x, top: point.y }}
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + (point.x / 100) }}
                                />
                            ))}

                            {/* Axis labels */}
                            <div className="absolute bottom-0 left-8 transform -translate-x-1/2 font-bold">
                                2023
                            </div>
                            <div className="absolute bottom-0 right-8 transform translate-x-1/2 font-bold">
                                2024
                            </div>
                            <div className="absolute top-8 left-8 transform -translate-y-full font-bold text-primary">
                                +75%
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute top-5 right-5 w-12 h-12 border-2 border-black"
                        />
                        <motion.div
                            animate={{
                                x: [0, 10, 0],
                                y: [0, -10, 0],
                            }}
                            transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
                            className="absolute bottom-5 right-5 w-8 h-8 bg-accent border-2 border-black transform rotate-45"
                        />
                    </div>

                    {/* Caption under illustration */}
                    <div className="bg-white border-2 border-l-2 border-r-2 border-b-2 border-black p-4 shadow-neo transform -translate-y-2 translate-x-4">
                        <p className="font-bold text-center">
                            Average growth metrics of clients after working with us
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
