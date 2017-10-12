import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class SelectedMovie extends Component {  
    render(){
        return(
            <div className="list-middle">
           <ul className="list-group"> <h3  >Selected Movie:</h3></ul>
           {
            this.props.movieSelected.map(m => {
                return (
          <li className="list-group-item" key={m.imdbId}>
            
               <div className="list-item"><b>Movie Title:</b>{m.title}</div> <br/>
               <div className="list-item"> <b>Release Date:</b>{m.releaseDate}</div><br/>
               <div className="list-item"> <b>Country:</b>{m.releaseCountry}</div><br/>
               <div className="list-item"> <b>Release Year:</b> {m.releaseYear}</div><br/>
               <div className="list-item"> <b>Release Mouth:</b> {m.releaseMonth}</div><br/>
               <div className="list-item"> <b>Release Day:</b>{m.releaseDay}</div><br/>
           
            </li>
                )
              }
             
              )
           }
           </div>)
    }
}

function mapStateToProps(state) {
    return{
        movieSelected: state.movieSelected
    }
}

export default connect(mapStateToProps)(SelectedMovie);