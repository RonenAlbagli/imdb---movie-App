import { createMovie } from './helpers';
import { LOAD_MOVIE_CLICK } from '../actions';



function movieSelected (state ="",action) {
            switch(action.type){
                case LOAD_MOVIE_CLICK:
                  let movieSelected = createMovie(action.imdbId);
                  console.log('selected Movie',movieSelected);
                     return movieSelected;
                default:
                    return state;
            }
        }
        
    export default movieSelected;