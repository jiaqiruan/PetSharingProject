import './config.mjs';
import mongoose from 'mongoose';
//console.log(process.env.DSN);
mongoose.connect(process.env.DSN);
// my schema goes here!
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    coins: Number,
    pets:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
    },
    foods:Array,
    toys:Array,
    comments: Array,
});
mongoose.model('User',UserSchema);

const PetSchema = new mongoose.Schema({
    name: String,
    category: String,
    age: Number,
    photo: String,
    hunger: Number,
    mood: Number,
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
mongoose.model('Pet',PetSchema);

const FoodSchema = new mongoose.Schema({
    name: String,
    price: Number,
    fullness: Number,
});
mongoose.model('Food',FoodSchema);

const ToySchema = new mongoose.Schema({
    name: String,
    price: Number,
    joyness: Number,
});
mongoose.model('Toy',ToySchema);


