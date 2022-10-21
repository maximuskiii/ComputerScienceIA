import * as api from '../api';

//action creators are functions tha return actions
// to fetch all the posts, some time is going to pass, therefore, we are working with asynchronous data
export const getPosts = () => async (dispatch) => {
    try {
       const { data } = await api.fetchPosts(); 

       dispatch({type: 'FETCH_ALL', payload: data});
    } catch (error) {

        console.log(error.message);
    }
}

export const createPost = (post) => async (dispatch) =>{
    try {
        const { data } = await api.createPost();

        dispatch({ type: 'CREATE', payload: data});
    } catch (error) {
        console.long(error.message);
    }
}