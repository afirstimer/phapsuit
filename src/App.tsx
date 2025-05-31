import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/Home/HomePage';
import ServicesPage from './pages/Services/ServicesPage';
import AboutPage from './pages/About/AboutPage';
import BlogPage from './pages/Blog/BlogPage';
import HowWeWorkPage from './pages/HowWeWork/HowWeWorkPage';
import ResourcesPage from './pages/Resources/ResourcesPage';
import TermsPage from './pages/Terms/TermsPage';
import PrivacyPage from './pages/Privacy/PrivacyPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'services', element: <ServicesPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'how-we-work', element: <HowWeWorkPage /> },
      { path: 'blog', element: <BlogPage /> },
      { path: 'resources', element: <ResourcesPage /> },
      { path: 'terms', element: <TermsPage /> },
      { path: 'privacy', element: <PrivacyPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
