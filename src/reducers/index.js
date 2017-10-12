import { combineReducers } from 'redux';
import movies from './movie_reducer';
import movieSelected from './Selected_reducer';


const rootReducer = combineReducers({
    movies,
    movieSelected,
    
})

export default rootReducer;