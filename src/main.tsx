import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Загрузка шрифтов
const loadFonts = () => {
  const linkInter = document.createElement('link');
  linkInter.rel = 'stylesheet';
  linkInter.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap';
  document.head.appendChild(linkInter);

  const linkArchivo = document.createElement('link');
  linkArchivo.rel = 'stylesheet';
  linkArchivo.href = 'https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap';
  document.head.appendChild(linkArchivo);
};

loadFonts();

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
