import React ,{useState,useEffect} from "react";
import useStyles from "./styles";
import {TextField, Button, Typography, Paper, Select, MenuItem, InputLabel} from '@material-ui/core';
import FileBase from 'react-file-base64';

import {useDispatch} from 'react-redux';
import { createPost,updatePost } from "../../actions/posts";

import {useSelector} from 'react-redux';


const Form = ({currentId, setCurrentId})=>{
    const post = useSelector((state)=>currentId ? state.posts.find((p)=>p._id === currentId ):null);
    const [postData,setPostData] = useState({
        name:'', category:'', photo:'',age:0,owner:""
    });
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(()=>{
        if(post){
            //console.log(post);
            setPostData(post);
        }
    },[post]);

    const clear = () => {
        setCurrentId(null);
        setPostData({ name:'', category:'', photo:'',age:0 });
    };

    const handleSubmit = (e)=>{
        postData.owner = user.result.name;
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId,postData));
        }else{
            dispatch(createPost(postData));
        }
        clear();
    };


    if (!user?.result?.name) {
        return (
          <Paper className={classes.paper}>
            <Typography variant="h6" align="center">
              Please Sign In to create your own pets and play with others' pets.
            </Typography>
          </Paper>
        );
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Editing' : 'Adding'} a Pet!</Typography>
                <TextField 
                name="name" 
                variant="outlined" 
                label="name" 
                fullWidth
                value={postData.name}
                onChange={(e)=>setPostData({...postData, name:e.target.value})}
                />
                <TextField 
                name="age" 
                type="number"
                variant="outlined" 
                label="age" 
                fullWidth
                value={postData.age}
                onChange={(e)=>setPostData({...postData, age:e.target.value})}
                />
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select
                name="category"
                label="category"
                fullWidth
                value={postData.category}
                onChange={(e)=>setPostData({...postData,category:e.target.value})}
                inputProps={{
                    name: 'category',
                    id: 'category',
                }}
                >
                    <MenuItem value="Cat">
                        Cat
                    </MenuItem>
                    <MenuItem value="Dog">
                        Dog
                    </MenuItem>
                </Select>
                <InputLabel htmlFor="photo">Photo of Your Pet!</InputLabel>
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone = {({base64})=>setPostData({...postData,photo:base64})}  
                        inputProps={{
                            name: 'photo',
                            id: 'photo',
                        }}
                    />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color = "primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;