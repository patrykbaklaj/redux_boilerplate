import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';

class ItemList extends Component {
    state = {
        itemName: '',
        itemDesc: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.itemName,
            description: this.state.itemDesc
        };

        this.props.addItem(newItem);
    };

    render() {
        return (
            <Container className='d-flex justify-content-center'>
                <div className='col-md-6'>
                    <div className='mt-5 mb-5 shadow p-4'>
                        <h3 className='h3 text-center'>Add new item</h3>
                        <Form onSubmit={e => this.handleSubmit(e)}>
                            <FormGroup>
                                <Label for='itemName'>Item name</Label>
                                <Input
                                    type='text'
                                    name='itemName'
                                    id='itemName'
                                    placeholder='Item name'
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label for='itemDesc'>Item description</Label>
                                <Input
                                    type='text'
                                    name='itemDesc'
                                    id='itemDesc'
                                    placeholder='Item description'
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <Button color='dark' size='sm' block type='submit'>
                                Add
                            </Button>
                        </Form>
                    </div>
                </div>
            </Container>
        );
    }
}

export default connect(
    null,
    { addItem }
)(ItemList);
