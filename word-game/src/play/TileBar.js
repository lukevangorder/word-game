import React, { Component } from 'react';
import PlayerTile from './PlayerTile.js'

export default class TileBar extends Component {

    render() {
        return (
            <div class='tilebar'>
                <PlayerTile />
                <PlayerTile />
                <PlayerTile />
                <PlayerTile />
                <PlayerTile />
                <PlayerTile />
                <PlayerTile />
            </div>
        )
    }
}