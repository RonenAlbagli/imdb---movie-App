import React, { Component } from 'react';
import { connect } from 'react-redux';

class SelectedMovie extends Component {
 
title(){
    let title = "";
    // this.props.movieSelected;
    console.log("Hello from the ather side",this.props.movieSelected);
    return title;
}
    
    render(){
        return(
            <div>
                <h5>title</h5> {this.title()}
                <h5>rating</h5>
                <h5>title</h5>
                <h5>title</h5>
            </div>
        )
    }
}

function mapStateToProps (state) {
    console.log(state);
    return{
        movieSelected: state.movieSelected
    }
}

export default connect(mapStateToProps,null)(SelectedMovie);