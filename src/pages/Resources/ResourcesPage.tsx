import { motion } from 'framer-motion';

const ResourcesPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-8 text-center"
                >
                    Useful <span className="text-primary">Resources</span>
                </motion.h1>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    Checklists, guides and materials for effective marketing
                </p>

                <div className="grid gap-8 mb-20">
                    {/* Подробное содержимое страницы будет добавлено позже */}
                    <div className="neo-box">
                        <h2 className="text-2xl font-bold mb-4">Page under construction</h2>
                        <p>
                            We are working on this page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
