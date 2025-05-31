import { motion } from 'framer-motion';
import ContactForm from '../../components/ContactForm';

interface Service {
    id: string;
    title: string;
    description: string;
    features: string[];
    icon: React.ReactNode;
    color: string;
}

const services: Service[] = [
    {
        id: 'customizable-saas-solutions',
        title: 'Customizable SaaS Solutions',
        description: 'We provide scalable, cloud-based tools tailored to meet your specific business needs — whether you\'re a small startup or an enterprise.',
        features: [
            'Drag-and-drop interface for custom workflows',
            'Role-based access control',
            'Modular architecture to enable/disable features',
            'White-labeling options for branding',
            'API access for custom extensions',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
        ),
        color: 'bg-primary',
    },
    {
        id: 'analytics-insights',
        title: 'Analytics & Insights',
        description: 'Turn your data into decisions with powerful built-in analytics.',
        features: [
            'Real-time performance dashboards',
            'Custom report builder',
            'KPIs tracking and goal monitoring',
            'Export to CSV, PDF, or direct email',
            'Trend prediction using AI insights',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </svg>
        ),
        color: 'bg-secondary',
    },
    {
        id: 'third-party-integerations',
        title: 'Third-Party Integrations',
        description: 'Connect your favorite tools to streamline operations across your tech stack.',
        features: [
            'One-click integration with Slack, Zapier, Google Workspace, and more',
            'Webhooks and custom triggers',
            'Sync with CRMs, ERPs, and eCommerce platforms',
            'Data import/export via RESTful API',
            'OAuth2.0 secure connection',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
            </svg>
        ),
        color: 'bg-accent',
    },
    {
        id: 'top-tier-security',
        title: 'Top-Tier Security',
        description: 'Enterprise-grade security to keep your data safe and your team compliant.',
        features: [
            'End-to-end data encryption (AES-256)',
            'Multi-factor authentication (MFA)',
            'Single Sign-On (SSO) via Google, Microsoft, Okta',
            'Regular vulnerability scans and audits',
            'GDPR, HIPAA, and SOC-2 compliance ready',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
            </svg>
        ),
        color: 'bg-primary',
    },
    {
        id: 'automation-features',
        title: ' Automation Features',
        description: 'Save time and reduce human error by automating routine tasks.',
        features: [
            'Workflow automation with conditional logic',
            'Auto-scheduling and reminders',
            'Trigger-based actions (e.g., email, alerts, updates)',
            'Scheduled data backups',
            'AI-based task suggestions',
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
            </svg>
        ),
        color: 'bg-secondary',
    },
    {
        id: 'email-marketing',
        title: 'Email Marketing',
        description: 'Nurture leads and build lasting relationships with your customers through targeted email campaigns. Our email marketing services help you deliver the right message to the right person at the right time.',
        features: [
            'Email strategy development',
            'List segmentation and management',
            'Email template design and creation',
            'Automated email sequence setup',
            'A/B testing for optimization',
            'Performance analytics and reporting'
        ],
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </svg>
        ),
        color: 'bg-accent',
    },
];

const ServicesPage = () => {
    return (
        <div className="py-20">
            <div className="neo-container">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="neo-heading mb-8 text-center"
                >
                    Our <span className="text-primary">Services</span>
                </motion.h1>
                <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
                    We offer a full spectrum of digital marketing services to help your business grow and thrive in the digital landscape
                </p>

                <div className="grid gap-8 mb-20">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            id={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="neo-box"
                        >
                            <div className="md:flex items-start gap-8">
                                <div className={`${service.color} border-2 border-black p-4 min-w-max flex items-center justify-center mb-6 md:mb-0 text-black`}>
                                    {service.icon}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-bold mb-3">{service.title}</h2>
                                    <p className="mb-6 text-lg">{service.description}</p>

                                    <h3 className="text-xl font-semibold mb-3">What's included:</h3>
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={`${service.id}-feature-${idx}`} className="flex items-center">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 text-primary mr-2 flex-shrink-0">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                                </svg>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="neo-box mb-20">
                    <h2 className="text-3xl font-bold mb-6 text-center">Ready to Boost Your Digital Presence?</h2>
                    <p className="text-center text-lg mb-8">
                        Every business is unique, and we tailor our services to meet your specific needs and goals.
                        <br />Contact us today to discuss how we can help your business thrive in the digital world.
                    </p>
                    <div className="flex justify-center">
                        <a href="#contact-form" className="neo-button-secondary bg-primary">
                            Get A Free Consultation
                        </a>
                    </div>
                </div>

                <div id="contact-form" className="max-w-3xl mx-auto">
                    <ContactForm title="Let's Discuss Your Project" subtitle="Fill out the form below, and we'll get back to you to schedule a free consultation" />
                </div>
            </div>
        </div>
    );
};

export default ServicesPage;
