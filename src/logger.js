import fs from 'node:fs';

// Создайте функцию `logMessage`, которая принимает сообщение и записывает его в файл `log.txt`.

const logMesaage = (message) => {
  const filePath = 'src/log.txt';
  const logEntry = `${message}`;

  fs.appendFile(filePath, logEntry, (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
    } else {
      console.log('Сообщение записано в лог-файл.');
    }
  });
}

export default logMesaage;