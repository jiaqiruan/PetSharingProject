import React from "react";

import { Container} from '@material-ui/core';
import Navbar from "./components/Navbar/Navbar";
import useStyles from "./styles";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = ()=>{
    const classes = useStyles();
    return (
        <BrowserRouter>
            <Container maxidth="lg">
                <Navbar/>
                <Routes>
                    <Route path="/" exact element={<Home/>} />
                    <Route path="/auth" exact element={<Auth/>} />
                </Routes>
            </Container>
        </BrowserRouter>
        
    );
}

export default App;