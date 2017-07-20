/**
 * Created by Nhokchien on 7/20/2017.
 */
import React from 'react'
import ListComponent from "./ListComponent";
import Previewer from './Previewer';

export default class Demo extends React.Component {
    state = {
        selectedItem: null,
        data: null
    };

    list = [
        {
            thumbnail: 'https://unsplash.it/200/300/?image=0',
            type: 'movieList',
            label: 'Lorem ipsum dolor sit amet'
        },
        {
            thumbnail: 'https://unsplash.it/200/300/?image=1',
            type: 'movieList',
            label: 'Lorem ipsum dolor sit amet'
        },
        {
            thumbnail: 'https://unsplash.it/200/300/?image=3',
            type: 'movieList',
            label: 'Lorem ipsum dolor sit amet'
        },

        {
            thumbnail: 'https://unsplash.it/200/300/?image=23',
            type: 'movieList',
            label: 'Lorem ipsum dolor sit amet'
        },

        {
            thumbnail: 'https://unsplash.it/200/300/?image=8',
            type: 'movieList',
            label: 'Lorem ipsum dolor sit amet'
        },

        {
            thumbnail: 'https://unsplash.it/200/300/?image=56',
            type: 'movieList',
            label: 'Lorem ipsum dolor sit amet'
        },


    ];

    _handleClick = (item) => {
        console.log(item);
        setTimeout(() =>{

            this.setState({
                selectedItem: item,
                data: [
                    { title: 'starwars', cover: 'https://unsplash.it/200/300/?image=53', desc: '' },
                    { title: 'lord of the rings', cover: 'https://unsplash.it/200/300/?image=26', desc: '' },
                    { title: 'spiderman', cover: 'https://unsplash.it/200/300/?image=56', desc: '' }
                ]
            })
        }, 1000)
    };



    render () {
        return (
            <div>
                <ListComponent list={this.list} onItemClick={this._handleClick} />
                <hr/>
                <Previewer selectedItem={this.state.selectedItem} data={this.state.data} />
            </div>
        )
    }
}