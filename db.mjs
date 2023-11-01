import './config.mjs';
import mongoose from 'mongoose';
//console.log(process.env.DSN);
mongoose.connect(process.env.DSN);
// my schema goes here!
const UserSchema = new mongoose.Schema({
    username: String,
    hash: String,
    matches: Array,
    comments: Array,
});
mongoose.model('User',UserSchema);

const MatchSchema = new mongoose.Schema({
    hometeam: String,
    awayteam: String,
    matchActions: Array,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
mongoose.model('Match',MatchSchema);

const CommentSchema = new mongoose.Schema({
    match:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Match',
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
mongoose.model('Comment',CommentSchema);

const MatchActionSchema = new mongoose.Schema({
    type:String,
    match:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Match',
    },
    time: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
});
mongoose.model('MatchAction',MatchActionSchema);

const TeamSchema = new mongoose.Schema({
    name: String,
    players: Array,
    totalGoals: Number,
    totalAssists: Number,
    totalBlockGoals: Number,
});
mongoose.model('Team',TeamSchema);

const PlayerSchema = new mongoose.Schema({
    name: String,
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    },
    birthday: Date,
    height: Number,
    weight: Number,
    matchActions: Array
});
mongoose.model('Player',PlayerSchema);

