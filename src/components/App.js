import React , { Component } from 'react';

import MovieList from './MovieList';
import SelectedMovie from './SelectedMovie';

class App extends Component{
    render(){
        return(
            <div>
                <h2>IMDB - Movie List</h2>
        <div>
            <MovieList/>
        </div>
        <div>
                <SelectedMovie/>
        </div>

            </div>
        )
    }
}

export default App;