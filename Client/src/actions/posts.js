import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {

    try {
        const {data} = await api.fetchPosts();
        dispatch ({ type: 'FETCH_ALL', payload: data })

    } catch (error) {
        console.log (error.message);
    }

}

// make use of api file - we import everything from the actions as api. This means we will be able to use the fetch Posts like this api.fetchPosts. We do this because we will have a lot of calls exported from the API.

// Action Creators - are functions that return actions. Actions must have the type property and some payload which is usually the data where we store all of our posts. Finally we have to return it.  

// Since we are working with asynchronous data it will take some time to actually fetch all the data. And so we use redux thunk - which allows us to in here specify an additional arrow function - crazy syntax but just have to deal with it. 
// async (dispatch) - async with property dispatch. 
// Now we have a function that returns another function and now can use the async await capabilities. 

//  instead of actually returning the action, with redux thunk you have to dispatch the action dispatch(action).

// Use try and catch block - in the try, try to fetch all the data from api. 
// const {data} = await api.fetchPosts();
// response = {data}; in the response we always have the data object which we are returning from the backend. 
// data represents the posts. 
// We can immediately dispatch an action which is an object that includes: the type which will be FETCH_ALL and the payload which will be our data.
// Now we are successfully using redux to actually pass or dispatch an action from the data from the backend. 
// we actually imported this action in App.js so we have to export it.
// As soon as this action gets dispatched we need to go to our posts.js in reducers and handle the logic for fetching our posts.