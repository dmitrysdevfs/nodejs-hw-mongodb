import express from 'express';
import pino from 'pino-http';
import cors from 'cors';

import contactsRouter from './routers/contacts.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(getEnvVar('PORT', '3000'));

export function setupServer() {
  const app = express();

  app.use(express.json());
  app.use(cors());

  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
    }),
  );

  app.use(contactsRouter);

  app.get('/', (req, res) => {
    res.json({ message: 'Hello, Phonebook!' });
  });

  app.use(notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Server is running on port ${PORT}`);
  });
}
