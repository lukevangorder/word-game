import React, { Component } from 'react';

export default class BoardTile extends Component {

    handleHover = () => {
        console.log(this.props.index)
    }

    render() {
        return (
            <div class='boardtile' onClick={this.handleHover}>
                
            </div>
        )
    }
}