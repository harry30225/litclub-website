import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import blog from './blog';

export default combineReducers({
    auth,
    event,
    blog
});