import React, { Component } from 'react';
import BoardTile from './BoardTile.js'

export default class Board extends Component {
    render() {
        let tiles = [];
        for (let i=1; i<=8; i++) {
            for (let j=1; j<=8; j++) {
                const tileProps = {key: i*j, col: i, row: j}
                tiles.push(<BoardTile {...tileProps} />)
        }}
        return (
            <div class='board'>{tiles}</div>
        )
    }
}