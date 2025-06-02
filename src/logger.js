import fs from 'node:fs';

const filePath = 'src/log.txt';

const logMesaage = (message) => {
  const logEntry = message;

  fs.appendFile(filePath, logEntry, (err) => {
    if (err) {
      console.error('Ошибка при записи в файл:', err);
    } else {
      console.log('Сообщение записано в лог-файл.');
    }
  });
}

export default logMesaage;