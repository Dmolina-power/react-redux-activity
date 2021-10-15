import counterReducer from './counter';
import todosReducer from './toDo';
import { combineReducers } from 'redux';
import visibilityFilter from './visibility_filter.js';



// index.js is combinging all reducers using redux combineReducers.

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
    visible: visibilityFilter
});

export default rootReducer;