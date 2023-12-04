import './config.mjs';
import './db.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.mjs';
import userRoutes from './routes/users.mjs';
import bodyParser from 'body-parser';
import petMessage from './db.mjs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//app.use(express.static(path.join(__dirname, 'client/public')));
//console.log(__dirname);

app.set('view engine', 'hbs');
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts',postRoutes);
app.use('/user',userRoutes);

app.use(express.static(path.join(__dirname, 'client/build')));


app.get('/', async (req,res)=>{
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(process.env.PORT ?? 3000);
