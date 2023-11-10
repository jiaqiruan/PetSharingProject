import './config.mjs';
import './db.mjs';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import mongoose from 'mongoose';

const Pet = mongoose.model('Pet');

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);
app.set('view engine', 'hbs');
app.use(express.urlencoded({ extended: false }));
app.use(cors({
    origin: '*', // You can set this to a specific origin
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true,
    exposedHeaders: 'X-Custom-Header',
    maxAge: 3600,
}));

app.get('/', async (req,res)=>{
    const pets = await Pet.find();
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
        hunger: 80,
        mood: 60,
    });
    const savedPet = await newPet.save();
    console.log(savedPet);
    res.redirect('/');
});

app.get('/api/data', (req, res) => {
    // Your API logic here
    console.log("Get!");
    res.json({ message: 'Hello from Express!' });
});

//app.listen(3000);
app.listen(process.env.PORT ?? 3000);
