import express from 'express';
import dotenv from 'dotenv';

const app: express.Application = express();

dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(`${__dirname}/src/public`));

app.use('/api', (req, res) => res.send('hello world!'));

export default app;
