import React, {Component} from 'react';
import ListItem from './ListItem';
export default class ListComponent extends Component{
    renderList = (listData) => {

        return <ListItem key={listData.thumbnail} data={listData} onClick={this.props.onItemClick} />
    };
    render(){
        return(
            <div>
                {this.props.list.map(this.renderList)}
            </div>
        )
    }
}