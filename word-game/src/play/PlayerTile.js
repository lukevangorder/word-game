import React, { Component } from 'react';

export default class PlayerTile extends Component {

    constructor(){
        super();
        this.state = {
           highlight: false
        }
    }

    handleClick = () => {
        this.setState({
            highlight: !this.state.highlight
        })
    }

    render() {
        let tileClass = this.state.highlight ? "highlight" : "playertile"
        return (
            <div class={tileClass} onClick={this.handleClick}>
                
            </div>
        )
    }
}