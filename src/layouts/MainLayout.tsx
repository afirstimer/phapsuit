import type { ReactNode } from 'react';
import { Link, Outlet } from 'react-router-dom';

interface MainLayoutProps {
    children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <div className="flex min-h-screen flex-col">
            <header className="bg-accent py-4 border-b-2 border-black">
                <div className="neo-container flex justify-between items-center">
                    <Link to="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-primary flex items-center justify-center border-2 border-black shadow-neo">
                            <span className="text-white font-display font-bold">DB</span>
                        </div>
                        <span className="text-xl font-bold">PS.IT</span>
                    </Link>

                    <nav className="hidden md:flex gap-6">
                        <Link to="/" className="font-medium hover:text-primary transition-colors">
                            Home
                        </Link>
                        <Link to="/services" className="font-medium hover:text-primary transition-colors">
                            Services
                        </Link>
                        <Link to="/about" className="font-medium hover:text-primary transition-colors">
                            About
                        </Link>
                        <Link to="/how-we-work" className="font-medium hover:text-primary transition-colors">
                            How We Work
                        </Link>
                        <Link to="/blog" className="font-medium hover:text-primary transition-colors">
                            Blog
                        </Link>
                        <Link to="/resources" className="font-medium hover:text-primary transition-colors">
                            Resources
                        </Link>
                    </nav>

                    <div className="hidden md:block">
                        <Link
                            to="#contact-form"
                            className="neo-button-secondary bg-primary"
                        >
                            Contact Us
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <button className="md:hidden p-2 rounded-medium">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                {children || <Outlet />}
            </main>

            <footer className="bg-black text-white py-10 border-t-2 border-primary">
                <div className="neo-container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">PS.IT LTD</h3>
                            <p className="mb-2">2 Đ. Số 9, Hiệp Bình Phước, Thủ Đức, Hồ Chí Minh</p>
                            <p className="mb-2">Phone: <a href="tel:" className="text-primary">Đang cập nhật</a></p>
                            <p className="mb-2">Email: <a href="mailto:info@phapsuit.com" className="text-primary">info@phapsuit.com</a></p>
                            <p>Director: Mr Huy C. Thomas</p>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Navigation</h3>
                            <ul className="space-y-2">
                                <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
                                <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
                                <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
                                <li><Link to="/how-we-work" className="hover:text-primary transition-colors">How We Work</Link></li>
                                <li><Link to="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
                                <li><Link to="/resources" className="hover:text-primary transition-colors">Resources</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold mb-4">Legal Information</h3>
                            <ul className="space-y-2">
                                <li><Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                                <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            </ul>
                            <div className="mt-6">
                                <p className="text-sm text-gray-400">© {new Date().getFullYear()} PS.IT LTD. All rights reserved.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MainLayout;
