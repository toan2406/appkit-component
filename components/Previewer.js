import React, {Component} from 'react';
import MovieList from './MovieList';
export default class Previewer extends Component{
    renderPreview = (selectedItem) =>{
        if (!selectedItem) return null;
        switch (selectedItem.type){
            case 'movieList':
                return <MovieList data={this.props.data}/>
        }
    };

    render(){
        return(
            <div>{this.renderPreview(this.props.selectedItem)}</div>
        )
    }
}