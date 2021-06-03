import React, { Component } from 'react';
import BoardTile from './BoardTile.js'
import GamePiece from './GamePiece.js'

export default class Board extends Component {
    render() {
        let piecesData = this.props.pieces;
        let pieces = Object.keys(piecesData);
        let tiles = [];
        for (let i=1; i<=8; i++) {
            for (let j=1; j<=8; j++) {
                const tileProps = {key: `${i}${j}`, col: i, row: j}
                tiles.push(<BoardTile {...tileProps} />)
        }}
        let storeArray = [];
        for (let i = 0; i < 32; i++) {
            let piece = piecesData[pieces[i]]
            let pieceProps = {key: i, col: piece.col, row: piece.row, color: piece.color, captured: piece.captured, type: piece.type, pieceImage: piece.pieceImage}
            storeArray.push(<GamePiece {...pieceProps}/>)
        }
        console.log(storeArray);
        return (
            <div class='board'>{tiles}{storeArray}</div>
        )
    }
}