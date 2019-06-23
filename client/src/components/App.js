import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemAdd from './ItemAdd';
import ItemList from './ItemList';
import { addItem } from '../actions/itemsActions';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Hello from App Component</h1>
                <ItemAdd />
                <ItemList />
            </div>
        );
    }
}

export default connect(
    null,
    { addItem }
)(App);
