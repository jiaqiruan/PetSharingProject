import React ,{useState,useEffect}from 'react';
import { useDispatch } from 'react-redux';
import{ jwtDecode }from 'jwt-decode';
import { Link , useLocation} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {AppBar, Avatar, Button, Toolbar, Typography} from '@material-ui/core';
import useStyles from "./styles";
import pets from '../../images/pet.png';

const Navbar = () =>{
    const classes = useStyles();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(()=>{
        const token = user?.token;
        if (token) {
            const decodedToken = jwtDecode(token);
      
            if (decodedToken.exp * 1000 < new Date().getTime()) logout();
          }
        setUser(JSON.parse(localStorage.getItem('profile')));
    },[location])

    const logout = ()=>{
        window.location.reload(false);
        dispatch({type:"LOGOUT"});
        navigate('/');
        setUser(null);
    }

    return(
        <AppBar className={classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to="/" className={classes.heading} variant="h2" align="center">Raising Pets!</Typography>
                <img className={classes.image} src={pets} alt="pets" height="60" width="90"/>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ?(
                    <div className={classes.profile}>
                        <Typography className={classes.coins} variant='h6'>Remaining Coins: {user.result.coins}</Typography>
                        <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Log out</Button>
                    </div>
                ):(
                    <div>
                        <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
