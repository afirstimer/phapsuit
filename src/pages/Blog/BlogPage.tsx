import { motion } from 'framer-motion';

const BlogPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-8 text-center"
                >
                    Our <span className="text-primary">Blog</span>
                </motion.h1>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    Useful articles and tech trends for software development
                </p>

                <div className="grid gap-8 mb-20">
                    {/* Подробное содержимое блога будет добавлено позже */}
                    <div className="neo-box">
                        <h2 className="text-2xl font-bold mb-4">Under construction</h2>
                        <p>
                            We are working on this page.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
