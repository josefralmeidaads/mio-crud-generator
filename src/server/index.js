import express from 'express';
import cors from 'cors';
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => console.log('servidor levantado na porta 3333 🚀'));