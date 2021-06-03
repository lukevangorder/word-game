import React, { Component } from 'react';

export default class GamePiece extends Component {

    constructor() {
        super()
        this.state = {
            // col: props.col,
            // row: props.row,
            // pieceImage: props.pieceImage,
            // color: props.color,
            // captured: props.captured,
            // type: props.type
        }
    }

    //Moving one row or column linear is an 80px change, starting at the bottom left hand corner with a px of 320 left and 640 top

    render() {
        const lefty = ((this.props.col - 1)*80);
        const toppy = ((this.props.row - 1)*80);
        const styleAlter = {left:lefty + 'px', top:toppy + 'px'}
        return (
            <div class='gamepiece' style={styleAlter}>
                {this.props.pieceImage}
            </div>
        )
    }
}