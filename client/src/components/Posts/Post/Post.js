import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from "@material-ui/core";
import RestaurantIcon from '@material-ui/icons/Restaurant';
import PetsIcon from '@material-ui/icons/Pets';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import useStyles from "./styles";
import {useDispatch} from 'react-redux';

import { deletePost ,feedPost} from "../../../actions/posts";

const Post = ({post,setCurrentId})=>{
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.photo} title={post.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">Age: {post.age}</Typography>
                <Typography variant="body2">Category: {post.category}</Typography>
            </div>
            <div className={classes.overlay2}>
                <Button style={{color:'white'}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                    <MoreHorizIcon fontSize="default"></MoreHorizIcon>
                </Button>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.name} is Hungry!</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Hunger Stat: {post.hunger}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Mood Stat: {post.mood}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(feedPost(post._id))}><RestaurantIcon fontSize="small" /> Feed </Button>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><PetsIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Post;