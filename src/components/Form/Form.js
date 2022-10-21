import React, { useState } from 'react'; //`
import{ TextField, Button, Typography, Paper} from '@material-ui/core';
import FileBase from 'react-file-base64';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const Form = () => {
    const [postData, setPostData] = useState({
        creator :'',
        title: '',
        message: '',
        tags: '',
        selectedFile: ''
    });
    const classes = useStyles(); //adds styles

    const dispatch = useDispatch(); // hooks the event dispatch

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData)); // once the action is dispatched we go to reducers
    }

    const clear = () => {

    }
    return(
        <Paper className={classes.paper}>
            <form autoComplete = "off" noValidate className={`${classes.root} ${classes.form}`} onSubmit= {handleSubmit}>
                <Typography variant ="h6">Creating a Geolocation</Typography>
                <TextField 
                name = "creator" 
                variant="outlined" 
                label = "Creator" 
                fullWidth
                value = {postData.creator} // all the data from the post will be stored in the post data object in the state, then each object is going to be a specific text field
                onChange={(e) => setPostData({
                    ...postData, creator: e.target.value //in every text field if we change the last property all the data will persist while only changing that specific property of that field
                })}
                />

                <TextField 
                name = "title" //title text field
                variant="outlined" 
                label = "Title" 
                fullWidth
                value = {postData.title} // all the data from the post will be stored in the post data object in the state, then each object is going to be a specific text field
                onChange={(e) => setPostData({
                    ...postData, title: e.target.value //in every text field if we change the last property all the data will persist while only changing that specific property of that field
                })}
                />

                <TextField 
                name = "message" 
                variant="outlined" 
                label = "Message" 
                fullWidth
                value = {postData.message} // all the data from the post will be stored in the post data object in the state, then each object is going to be a specific text field
                onChange={(e) => setPostData({
                    ...postData, message: e.target.value //in every text field if we change the last property all the data will persist while only changing that specific property of that field
                })}
                />

                <TextField 
                name = "tags" 
                variant="outlined" 
                label = "Tags" 
                fullWidth
                value = {postData.tags} // all the data from the post will be stored in the post data object in the state, then each object is going to be a specific text field
                onChange={(e) => setPostData({
                    ...postData, tags: e.target.value //in every text field if we change the last property all the data will persist while only changing that specific property of that field
                })}
                />

            <div className={classes.fileInput}> 
                <FileBase 
                type= "file"
                multiple = {false}
                onDone={(base64) => setPostData({...postData, selectedFile: base64})}
                />
            </div> 
            <Button 
            className = {classes.buttonSubmit} 
            variant = "contained" 
            color="primary" 
            size="large" 
            type ="sumbit"
            fullWidth
            >Submit</Button>

            <Button //clear form button
            variant = "contained" 
            color="secondary" 
            size="small" 
            onClick={clear}
            fullWidth
            >Clear</Button>
            </form>
        </Paper>
    ); // converts the image to a base 64 string
}

export default Form;