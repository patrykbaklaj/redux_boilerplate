import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';

import ItemForm from './ItemForm';

class ItemAdd extends Component {
    onSubmit = formVals => {
        const newItem = {
            name: formVals.itemTitle,
            description: formVals.itemDescription
        };

        this.props.addItem(newItem);
    };

    render() {
        return (
            <Container className='mt-5'>
                <h1 className='text-center'>Add new item</h1>
                <hr />
                <ItemForm title='Add new item' onSubmit={this.onSubmit} />
            </Container>
        );
    }
}

export default connect(
    null,
    { addItem }
)(ItemAdd);
