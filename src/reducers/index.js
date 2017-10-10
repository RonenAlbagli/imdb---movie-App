import { combineReducers } from 'redux';
import movies from './movie_reducer';
import selectedMovie from './Selected_reducer';

const rootReducer = combineReducers({
    movies,
    selectedMovie
})

export default rootReducer;