import { motion } from 'framer-motion';

const PrivacyPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container max-w-4xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-12 text-center"
                >
                    Privacy Policy
                </motion.h1>

                <div className="neo-box prose prose-lg max-w-none">
                    <h2>1. Introduction</h2>
                    <p>
                        PS.IT LTD ("we", "our", or "us") respects your privacy and is committed to protecting your personal data.
                        This privacy policy will inform you about how we look after your personal data when you visit our website
                        (phapsuit.com) and tell you about your privacy rights and how the law protects you.
                    </p>

                    <h2>2. The Data We Collect About You</h2>
                    <p>
                        Personal data means any information about an individual from which that person can be identified. We may collect,
                        use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                    </p>
                    <ul>
                        <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data</strong> includes internet protocol (IP) address, browser type and version, time zone
                            setting and location, browser plug-in types and versions, operating system and platform, and other technology on
                            the devices you use to access this website.</li>
                        <li><strong>Usage Data</strong> includes information about how you use our website and services.</li>
                    </ul>

                    <h2>3. How We Use Your Personal Data</h2>
                    <p>
                        We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                    </p>
                    <ul>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal obligation.</li>
                    </ul>

                    <h2>4. Data Security</h2>
                    <p>
                        We have put in place appropriate security measures to prevent your personal data from being accidentally lost,
                        used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data
                        to those employees, agents, contractors and other third parties who have a business need to know.
                    </p>

                    <h2>5. Children's Privacy</h2>
                    <p>
                        Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable
                        information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child
                        has provided us with personal data, please contact us.
                    </p>

                    <h2>6. Your Legal Rights</h2>
                    <p>
                        Under certain circumstances, you have rights under data protection laws in relation to your personal data. These include the right to:
                    </p>
                    <ul>
                        <li>Request access to your personal data.</li>
                        <li>Request correction of your personal data.</li>
                        <li>Request erasure of your personal data.</li>
                        <li>Object to processing of your personal data.</li>
                        <li>Request restriction of processing your personal data.</li>
                        <li>Request transfer of your personal data.</li>
                        <li>Right to withdraw consent.</li>
                    </ul>

                    <h2>7. Contact Us</h2>
                    <p>
                        If you have any questions about this privacy policy or our privacy practices, please contact us:
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

export default PrivacyPage;
