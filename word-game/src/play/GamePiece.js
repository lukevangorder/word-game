import React, { Component } from 'react';

export default class GamePiece extends Component {

    constructor() {
        super()
        this.state = {
            col: props.col,
            row: props.row,
            pieceImage: props.pieceImage
        }
    }

    render() {
        return (
            <div class='gamepiece'>
                {this.state.pieceImage}
            </div>
        )
    }
}