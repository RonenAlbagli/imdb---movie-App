import movies_json from '../data/movies.json';
import { createMovie } from './helpers';
import { LOAD_MOVIE_CLICK } from '../actions';

function movies (state =movies_json,action) {
    switch(action.type){

        default:
            return state;
    }
}
export default movies;