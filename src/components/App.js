import React , { Component } from 'react';

import MovieList from './MovieList';

import '../styles/index.css';


class App extends Component{
    render(){
        return(
            <div>
                <h2>IMDB - Movie List</h2>
        <div>
            <MovieList/>
        </div>
        <div>
             
        </div>

            </div>
        )
    }
}

export default App;