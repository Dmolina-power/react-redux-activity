
import { configureStore } from '@reduxjs/toolkit'; 
import rootReducer from '../reducers';


//A friendly abstraction over the standard Redux createStore function that adds good defaults to the store setup for a better development experience. When using reduxjs/toolkit!
const store = configureStore({
    reducer: rootReducer
    
})

export default store;