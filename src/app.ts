import * as express from 'express';
import { json, urlencoded } from 'body-parser';
import * as cors from 'cors';
import router from './routes';
import { eventContext } from 'aws-serverless-express/middleware';
import * as mongoose from 'mongoose';
import CONFIG from './config/config';

export function initializeApp() {
  const app = express();
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: true }));
  app.use(eventContext());

  app.get('/ping', (req, res) => {
    res.json({ message: 'pong' });
  });

  mongoose.connect(CONFIG.DB_URL);

  app.use('/api', router);

  return app;
}
