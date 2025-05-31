import type React from 'react';

/**
 * Компонент SVG для логотипа/favicon в стиле необрутализма
 */
const Favicon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            {/* Фон */}
            <rect width="64" height="64" fill="#FF5A5F" />

            {/* Обводка */}
            <rect x="2" y="2" width="60" height="60" stroke="black" strokeWidth="4" />

            {/* Буквы DB */}
            <path
                d="M18 42V22H27C29.7614 22 32 24.2386 32 27V27C32 29.7614 29.7614 32 27 32H18"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="square"
            />

            <path
                d="M34 22V42H43C45.7614 42 48 39.7614 48 37V37V27C48 24.2386 45.7614 22 43 22H34Z"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="square"
            />

            {/* Декоративная тень */}
            <rect x="6" y="46" width="52" height="4" fill="rgba(0,0,0,0.3)" />

            {/* Декоративные элементы в стиле необрутализм */}
            <rect x="50" y="8" width="6" height="6" fill="#FFDE59" />
            <rect x="8" y="50" width="6" height="6" fill="#53A6FA" />
        </svg>
    );
};

export default Favicon;
