import './config.mjs';
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import cors from 'cors';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'build')));
console.log(__dirname);
app.set('view engine', 'hbs');

app.use(cors({
    origin: '*', // You can set this to a specific origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    exposedHeaders: 'X-Custom-Header',
    maxAge: 3600,
  }));

app.get('/api/data', (req, res) => {
    // Your API logic here
    console.log("Get!");
    res.json({ message: 'Hello from Express!' });
  });

//app.listen(3000);
app.listen(process.env.PORT ?? 3000);
