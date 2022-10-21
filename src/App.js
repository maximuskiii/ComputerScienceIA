import React , { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import Posts from './components/Posts/Posts.js';
import Form from './components/Form/Form.js';
import useStyles from './styles';
import { getPosts } from './actions/posts';
import memories from './images/memories.png';
import { useDispatch } from 'react-redux';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);


    return(
       <Container maxidth = "lg">
            <AppBar className={classes.appBar} position="static" color = "inherit">
                <Typography className={classes.heading} variant="h2" align= "center">Geolocation App</Typography>
                <img className = {classes.image} src={memories} alt = "GeolocationLogos" height = "60" />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justify="space-between" alignItems='stretch' spacing={3}>
                        <Grid item xs ={12} sm = {7}>
                            <Posts />
                        </Grid>
                        <Grid item xs ={12} sm = {4}>
                            <Form /> 
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
       </Container>
    );
}

export default App;


// double returned arrays without anything in them tells us that the data was successfully passed from the backend to the front end