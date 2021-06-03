import React, { Component } from 'react';

export default class BoardTile extends Component {

    constructor() {
        super()
        this.state = {
            boardPlace: this.props.boardPlace
        }
    }
    render() {
        return (
            <div class='boardtile'>
                
            </div>
        )
    }
}