import React, { Component } from 'react';

export default class Highlight extends Component {
    render() {
        const styleAlter = {left:this.props.left + 'px', top:this.props.top + 'px'}
        return (
            <div class='highlight' style={styleAlter}>
            </div>
        )
    }
}