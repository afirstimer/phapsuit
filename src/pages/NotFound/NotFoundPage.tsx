import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFoundPage = () => {
    return (
        <div className="min-h-[80vh] flex flex-col items-center justify-center py-20">
            <div className="text-center max-w-xl mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative mb-8 mx-auto">
                        <div className="w-32 h-32 bg-primary text-white flex items-center justify-center text-5xl font-bold border-2 border-black shadow-neo">
                            404
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-secondary border-2 border-black" />
                    </div>

                    <h1 className="neo-heading mb-4">Страница не найдена</h1>

                    <p className="text-xl mb-8">
                        К сожалению, запрашиваемая страница не существует или была перемещена.
                    </p>

                    <Link to="/" className="neo-button bg-primary inline-flex items-center">
                        Вернуться на главную
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-5 h-5 ml-2"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                            />
                        </svg>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFoundPage;
