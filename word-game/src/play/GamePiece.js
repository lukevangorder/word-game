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
            type: props.type,
            left: (props.col-1)*80,
            top: (props.row-1)*80,
            active: false
        }
    }

    clickHandler = () => {
        if (this.state.active) {
            this.setState({
                active: false
            })
            console.log(this.state)
        } else {
            this.setState({
                active: true
            })
            console.log(this.state)
            switch(this.type){
                case 'pawn':        
            }
        }
    }

    render() {
        const styleAlter = {left:this.state.left + 'px', top:this.state.top + 'px'}
        return (
            <div class='gamepiece' style={styleAlter} onClick={this.clickHandler}>
                {this.state.pieceImage}
            </div>
        )
    }
}