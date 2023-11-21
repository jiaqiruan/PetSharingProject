import './config.mjs';
import mongoose from 'mongoose';
//console.log(process.env.PORT);
mongoose.connect(process.env.DSN);
//mongoose.connect(process.env.LOCAL);
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
    hunger: {
        type:Number,
        min: [0, 'min hunger stat is 0'],
        max: [100, 'max hunger stat is 100'],
        default: 50,
    },
    mood: {
        type:Number,
        min: [0, 'min mood stat is 0'],
        max: [100, 'max mood stat is 100'],
        default: 50,
    },
    /*owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },*/
});
const petMessage = mongoose.model('Pet',PetSchema);

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


export default petMessage;