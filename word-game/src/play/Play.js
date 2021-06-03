import React, { Component } from 'react';
import Board from './Board.js'
import TileBar from './TileBar.js'

export default class Play extends Component {
    render() {
        return (
            <div>
                <Board />
                <TileBar />
            </div>
        )
    }
}