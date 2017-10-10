import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMovies } from '../actions';

class MovieList extends Component {
    render(){
        return(
            <div>
                <h3>Here you can find movie from 1930-2017 </h3>

                <ul>
                    {
                        this.props.movies.map(movie => {
                        return(
                    
                    <li key={movie.title}>
                        <div>{movie.title}</div>
                        <div onClick={()=>this.props.showMovies(movie.imdbId)}>+</div>
                   </li>
                        )
                    })
                    } 
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log('state',state);
    return{
        movies: state.movies
    }
}

export default connect(mapStateToProps,{showMovies})(MovieList);