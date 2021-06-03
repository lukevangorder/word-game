import React, { Component } from 'react';
import BoardTile from './BoardTile.js'

export default class Board extends Component {
    render() {
        let tiles = [];
        for (let i=0; i<256; i++) {
            const tileProps = {key: i, index: i}
            tiles.push(<BoardTile {...tileProps} />)
        }
        return (
            <div class='board'>{tiles}</div>
        )
    }
}