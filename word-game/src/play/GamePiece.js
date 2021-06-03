import React, { Component } from 'react';

export default class GamePiece extends Component {

    constructor(props) {
        super()
        this.state = {
            col: props.col,
            row: props.row,
            pieceImage: props.pieceImage,
            color: props.color,
            captured: props.captured,
            type: props.type
        }
    }

    clickHandler = () => {
        switch(this.type){
            case 'pawn':
                
        }
    }

    render() {
        const lefty = ((this.state.col - 1)*80);
        const toppy = ((this.state.row - 1)*80);
        const styleAlter = {left:lefty + 'px', top:toppy + 'px'}
        return (
            <div class='gamepiece' style={styleAlter} onClick={this.clickHandler}>
                {this.state.pieceImage}
            </div>
        )
    }
}