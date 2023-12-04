import './config.mjs';
import mongoose from 'mongoose';
//console.log(process.env.PORT);
mongoose.connect(process.env.DSN);
//mongoose.connect(process.env.LOCAL);
// my schema goes here!
const UserSchema = new mongoose.Schema({
    name: {type: String,required:true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    coins: {type: Number, default: 100},
    pets:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pet',
    },
    id: String,
});
export const userMessage = mongoose.model('User',UserSchema);

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
    owner: {
        type: String,
    },
    creatorId: String,
});

const petMessage = mongoose.model('Pet',PetSchema);

export default petMessage;