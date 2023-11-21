import React, {useState, useEffect} from "react";

import { Container, AppBar, Typography, Grow , Grid } from '@material-ui/core';
import {getPosts} from './actions/posts';
import pets from './images/pet.png';
import {useDispatch} from "react-redux";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from "./styles";
const App = ()=>{
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts());
    },[currentId,dispatch]);

    return (
        <Container maxidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Pets!</Typography>
                <img className={classes.image} src={pets} alt="pets" height="60" width="90"/>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems="stretch" space={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;