import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showMovies } from '../actions';
import SelectedMovie from './SelectedMovie';

class MovieList extends Component {

    constructor() {
        super() ;

        this.state = {
            showDeatils: false
        }
    }
    changeStats(){
        this.setState({showDeatils:true})
    }

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
                        <div onClick={()=>this.props.showMovies(movie.imdbId) & this.changeStats()}>+

                        </div>
                   </li>
                   
                        )
                    })
                    } 
                </ul>
                {
                            this.state.showDeatils ?
                            <SelectedMovie/>
                            :
                            <div></div>
                        }
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