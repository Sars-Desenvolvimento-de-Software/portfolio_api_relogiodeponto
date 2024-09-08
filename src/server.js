import express from 'express';
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
  res.send('Olá mundo!');
});

app.listen(porta, () => {
  console.log(`App na URL http://localhost:${porta}`);
});
