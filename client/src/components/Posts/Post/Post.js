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
    const user = JSON.parse(localStorage.getItem('profile'));
    const handleFeed = ()=>{

        const oldProfile = JSON.parse(localStorage.getItem('profile'));
        oldProfile.result.coins--;
        console.log(oldProfile);
        localStorage.setItem('profile', JSON.stringify(oldProfile));
        window.location.reload(false);
        dispatch(feedPost(post._id))
    }
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.photo} title={post.name}/>
            <div className={classes.overlay}>
                <Typography variant="h6">{post.name}</Typography>
                <Typography variant="body2">Age: {post.age}</Typography>
                <Typography variant="body2">Category: {post.category}</Typography>
                <Typography variant="body2">Owner: {post.owner}</Typography>
            </div>
            {(user?.result?.googleId === post?.creatorId || user?.result?._id === post?.creatorId) && (
                <div className={classes.overlay2}>
                    <Button style={{color:'white'}} size="small" onClick={()=>{setCurrentId(post._id)}}>
                        <MoreHorizIcon fontSize="medium"></MoreHorizIcon>
                    </Button>
                </div>
            )}
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.name} {post.hunger>=70 ?"is Satisfied!" : "is Hungry"}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">Hunger Stat: {post.hunger}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">Mood Stat: {post.mood}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" disabled={!user?.result} onClick={handleFeed}><RestaurantIcon fontSize="small" /> Feed </Button>
                {(user?.result?.googleId === post?.creatorId || user?.result?._id === post?.creatorId) && (
                    <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}><PetsIcon fontSize="small" /> Delete</Button>
                )}
            </CardActions>
        </Card>
    );
}

export default Post;