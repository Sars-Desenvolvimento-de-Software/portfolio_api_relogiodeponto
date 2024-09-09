import express from 'express';
import rotas from './routes/rotas.js';

const app = express();
const porta = 3000;

app.use(express.json());
app.use('/api', rotas.apresentacao);
app.use('/api/usuario', rotas.usuario);

app.listen(porta, () => {
  console.log(`App na URL http://localhost:${porta}`);
});
