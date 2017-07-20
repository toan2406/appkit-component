import React, {Component} from 'react';
export default class MovieList extends Component {
    render(){
        return <h1>Movie: {this.props.data[0].title}</h1>
    }
}
