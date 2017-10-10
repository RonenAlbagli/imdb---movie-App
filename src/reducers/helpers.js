import movies_json from '../data/movies.json';

export function createMovie(imdbId){
    let movie = movies_json.find( m => m.imdbId === imdbId);
    return movie;
}