import { combineReducers } from 'redux';

import posts from './posts';

export default combineReducers({
    posts,
    // if key and value are the same, just write it down once. e.g. posts,
    // But normally would be something like this: posts, state
});