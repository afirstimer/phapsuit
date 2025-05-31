/**
 * Эта утилита используется для программной генерации favicon.
 * Мы создаем логотип программно, чтобы сделать его уникальным и соответствующим стилю необрутализма.
 */

const generateFavicon = () => {
  // Создаем элемент canvas
  const canvas = document.createElement('canvas');
  canvas.width = 64;
  canvas.height = 64;

  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  // Рисуем основной фон
  ctx.fillStyle = '#FF5A5F';
  ctx.fillRect(0, 0, 64, 64);

  // Рисуем рамку
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 4;
  ctx.strokeRect(2, 2, 60, 60);

  // Рисуем буквы DB
  ctx.strokeStyle = 'white';
  ctx.lineWidth = 4;

  // Буква D
  ctx.beginPath();
  ctx.moveTo(18, 42);
  ctx.lineTo(18, 22);
  ctx.lineTo(27, 22);
  ctx.arc(27, 27, 5, -Math.PI/2, Math.PI/2);
  ctx.lineTo(18, 32);
  ctx.stroke();

  // Буква B
  ctx.beginPath();
  ctx.moveTo(34, 22);
  ctx.lineTo(34, 42);
  ctx.lineTo(43, 42);
  ctx.arc(43, 37, 5, Math.PI/2, -Math.PI/2);
  ctx.lineTo(43, 27);
  ctx.arc(43, 27, 5, Math.PI/2, -Math.PI/2, true);
  ctx.lineTo(34, 22);
  ctx.stroke();

  // Добавляем декоративные элементы
  ctx.fillStyle = '#FFDE59';
  ctx.fillRect(50, 8, 6, 6);

  ctx.fillStyle = '#53A6FA';
  ctx.fillRect(8, 50, 6, 6);

  // Конвертируем canvas в PNG
  return canvas.toDataURL('image/png');
};

export default generateFavicon;
