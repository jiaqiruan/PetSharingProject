import './config.mjs';
import './db.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';
import postRoutes from './routes/posts.mjs';
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
/*app.use(cors({
    origin: '*', // You can set this to a specific origin
    methods: 'GET,POST,PUT,DELETE,PATCH',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    exposedHeaders: 'X-Custom-Header',
    maxAge: 3600,
}));*/


app.use('/posts',postRoutes);


app.get('/', async (req,res)=>{
    const pets = await petMessage.find();
    res.render('home',{pets:pets});
});

app.get('/add',(req,res)=>{
    res.render('add');
});

app.post('/add',async (req,res)=>{
    const newPet = new Pet({
        name:req.body.petName,
        category:req.body.petCategory,
        age:req.body.petAge,
        photo:req.body.petPhoto,
    });
    const savedPet = await newPet.save();
    //console.log(savedPet);
    res.redirect('/');
});

//app.listen(3000);
app.listen(process.env.PORT ?? 3000);
