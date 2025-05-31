import { motion } from 'framer-motion';

const TermsPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-12 text-center"
                >
                    Terms of Service
                </motion.h1>

                <div className="neo-box prose prose-lg max-w-none">
                    <h2>1. Introduction</h2>
                    <p>
                        Welcome to PS.IT LTD. These Terms of Service govern your use of our website located at
                        phapsuit.com (the "Service") and any related services provided by PS.IT LTD.
                    </p>
                    <p>
                        By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the
                        terms, then you may not access the Service.
                    </p>

                    <h2>2. Communications</h2>
                    <p>
                        By using our Service, you agree to subscribe to newsletters, marketing or promotional materials, and other
                        information we may send. However, you may opt out of receiving any, or all, of these communications from us by
                        following the unsubscribe link or instructions provided in any email we send.
                    </p>

                    <h2>3. Content</h2>
                    <p>
                        Our Service allows you to post, link, store, share and otherwise make available certain information, text,
                        graphics, videos, or other material. You are responsible for the content that you post on or through the Service,
                        including its legality, reliability, and appropriateness.
                    </p>

                    <h2>4. Prohibited Uses</h2>
                    <p>
                        You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
                    </p>
                    <ul>
                        <li>In any way that violates any applicable national or international law or regulation.</li>
                        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way.</li>
                        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail",
                            "chain letter," "spam," or any other similar solicitation.</li>
                    </ul>

                    <h2>5. Updates to Terms</h2>
                    <p>
                        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is
                        material, we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a
                        material change will be determined at our sole discretion.
                    </p>

                    <h2>6. Contact Us</h2>
                    <p>
                        If you have any questions about these Terms, please contact us:
                    </p>
                    <ul>
                        <li>By email: info@phapsuit.com</li>
                        <li>By phone: Đang cập nhật</li>
                        <li>By mail: 2 Đ. Số 9, Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh</li>
                    </ul>

                    <p className="mt-8">
                        Last updated: April 15, 2025
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TermsPage;
