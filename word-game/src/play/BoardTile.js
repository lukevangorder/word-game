import React, { Component } from 'react';
import GamePiece from './GamePiece.js';

export default class BoardTile extends Component {
    render() {
        let classColor = ''
        if (this.props.row % 2 == 1 && this.props.col % 2 == 1) {
            classColor = 'boardtile whitetile'
        } else if (this.props.row % 2 == 0 && this.props.col % 2 == 0) {
            classColor = 'boardtile whitetile'
        } else {
            classColor = 'boardtile blacktile'
        }
        return (
            <div class={classColor} onClick={this.handleHover}>
            </div>
        )
    }
}