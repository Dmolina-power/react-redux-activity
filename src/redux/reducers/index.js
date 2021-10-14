import counterReducer from './counter';
import todosReducer from './toDo';
import { combineReducers } from 'redux';
import visibilityFilter from './visibility_filter.js';

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer,
    visible: visibilityFilter
});

export default rootReducer;