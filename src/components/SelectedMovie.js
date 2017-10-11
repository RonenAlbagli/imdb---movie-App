import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class SelectedMovie extends Component {  
    render(){
        return(
            <div>
           {
            this.props.movieSelected.map(movie => {
                return (
          
            <div>
                <h5 key={movie.imdbId}>{movie.title}</h5>
                <h5>rating</h5>
                <h5>title</h5>
                <h5>title</h5>
            </div>
                )
              }
             
              )
           }
           </div>)
    }
}

function mapStateToProps (state) {
    return{
        movieSelected: state.movieSelected
    }
}

export default connect(mapStateToProps)(SelectedMovie);