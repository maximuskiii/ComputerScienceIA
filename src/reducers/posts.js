// a reducer is a function that accepts the state and accepts the action, then based on the action type based on the action type, logic will be executed 
// state always has to be somethig/
export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE': 
            return [...posts, action.payload]; //spreads out the existing posts, adds a new post by taking the data from the action dispatch (postData)
        default:
            return posts;
    }
}

//Yayyayayay, full stakc webapp works, kind of.
// First, the react application sent a post-request to the back-end application, then our application communicated it to the database and we now have our file saved in 