export default (posts = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload; 
        case 'CREATE':
            return posts; 
        default:
            return posts;
    }
}

// state =[] -> In reducers the state always needs to be equal to something. The posts are going to be an array so we are going to equal the state to an empty array.
// a reducer is a function or more specifically it is equal to a function that accepts the state and also it accepts the action. Then based on the action type, if it is equal to CREATE we want to return something like either the action or the state changed by the action. Usually will have a lot of if statements for loads of different things so better to use a SWITCH statement instead. 
// if(action.type === 'CREATE') {
    //     return action;
    // }
    
    // Once action is dispatched we need to immediately fetch our action.payload which is our data/ actual posts.
    // This is redux data passing. Now to actually retrieve the data from within our components. Our Posts.js Post component. 
    // Now we have to fetch our data from the global redux store. And we can do that with the help of useSelectors.
    // Go to Components/Posts/Posts.js and import useSelector
    
    // Normally like this:
    // export default (state = [], action) => {
    
    //     switch (action.type) {
    //         case 'FETCH_ALL':
    //             return action.payload; 
    //         case 'CREATE':
    //             return state; 
    //         default:
    //             return state;
    //     }
    // }