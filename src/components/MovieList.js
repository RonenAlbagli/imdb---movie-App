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
            <div className="list-middle" >
                <h3>Here you can find movie from 1930-2017 </h3>

                <ul className="list-group ">
                    {
                        this.props.movies.map(movie => {
                        return(
                    
                    <li className="list-group-item" key={movie.title}>
                        <div className="list-item">{movie.title}</div>
                        <div className="list-item right-button" onClick={()=>this.props.showMovies(movie.imdbId) & this.changeStats()}> <br/> +

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