import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import ItemAdd from './ItemAdd';
import ItemList from './ItemList';
import Main from './Main';
import { addItem } from '../actions/itemsActions';
import MainNavbar from './MainNavbar';

class App extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <MainNavbar />
                        <Route path="/" exact component={Main}/>
                        <Route path='/list' component={ItemList} />
                        <Route path='/add' component={ItemAdd} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default connect(
    null,
    { addItem }
)(App);
