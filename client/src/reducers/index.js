import { combineReducers } from 'redux';
import auth from './auth';
import event from './event';
import blog from './blog';
import image from './image';

export default combineReducers({
    auth,
    event,
    blog,
    image
});