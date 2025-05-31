import Hero from '../../components/Hero';
import AiAssistant from '../../components/AiAssistant';
import FeaturedServices from '../../components/FeaturedServices';
import Testimonials from '../../components/Testimonials';
import ContactForm from '../../components/ContactForm';

const HomePage = () => {
    return (
        <>
            <Hero />
            <FeaturedServices />
            <AiAssistant />
            <Testimonials />
            <section className="py-20 bg-card">
                <div className="neo-container max-w-5xl mx-auto">
                    <h2 className="neo-heading mb-12 text-center">Contact Us</h2>
                    <ContactForm />
                </div>
            </section>
        </>
    );
};

export default HomePage;
