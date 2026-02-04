import 'dotenv/config';
import cors from 'cors';
import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(PORT,"0.0.0.0", () =>
  console.log(`Example app listening on port ${PORT}!`),
);
