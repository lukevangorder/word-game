import React, { Component } from 'react';
import BoardTile from './BoardTile.js'

export default class Board extends Component {
    render() {
        let tiles = [];
        for (let i=0; i<16; i++) {
            for (let j=0; j<16; j++) {
                const props = {col:i, row:j}
                tiles.push(<BoardTile {...props} />)
        }}
        return (
            <div class='board'>{tiles}</div>
        )
    }
}