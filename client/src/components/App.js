import React, { Component } from 'react';

import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';

class App extends Component {
    handleClick = () => {
        this.props.addItem();
    };

    render() {
        return (
            <div>
                <h1>Hello from App Component</h1>
                <button onClick={this.handleClick}>
                    Invoke action creator
                </button>
            </div>
        );
    }
}

export default connect(
    null,
    { addItem }
)(App);
