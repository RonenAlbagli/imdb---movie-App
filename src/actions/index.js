export const LOAD_MOVIE_CLICK ='LOAD_MOVIE_CLICK';

export function showMovies(imdbId){
    const action = {
        type: LOAD_MOVIE_CLICK,
        imdbId,
        showDeatils: true
    }
return action;
}