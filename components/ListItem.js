import React, { Component} from 'react';

export default class ListItem extends Component{
    selectItem = () => {
        this.props.onClick(this.props.data);
    };

    render(){
        return(
            <div style={{float: "left"}} className="list-item" onClick={this.selectItem}>
                <div className="thumnail">
                    <img src={this.props.data.thumbnail} alt=""/>
                </div>
                <div className="type">{this.props.data.type}</div>
                <div className="label">{this.props.data.label}</div>
            </div>
        );
    }
}