import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import { connect } from 'react-redux';
import { addItem } from '../actions/itemsActions';

class ItemList extends Component {
    state = {
        itemName: ''
    };

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();

        const newItem = {
            name: this.state.itemName
        };

        this.props.addItem(newItem);
    };

    render() {
        return (
            <Container>
                <div className='col-md-6'>
                    <div className='mt-5 mb-5 shadow p-4'>
                        <h3 className='h3'>Add new item</h3>
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
                            <Button color='dark' size='sm' type='submit'>
                                Submit
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
