import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Row,
    Col
} from 'reactstrap';

class ItemForm extends Component {
    renderInput = ({ input, label, meta, type }) => {
        // console.log(meta);
        return (
            <FormGroup className='mb-4'>
                <Label for={input.name}>
                    <strong>{label}</strong>
                </Label>
                <Input
                    {...input}
                    type={type}
                    id={input.name}
                    placeholder={`Enter ${label}`}
                />
            </FormGroup>
        );
    };

    handleSubmit = formVals => {
        this.props.onSubmit(formVals);
    };

    render() {
        return (
            <Row className='d-flex justify-content-center'>
                <Col md='6'>
                    <div className='mt-5 mb-5 shadow p-4'>
                        <Form
                            onSubmit={this.props.handleSubmit(
                                this.handleSubmit
                            )}
                        >
                            <Field
                                label='Item title'
                                name='itemTitle'
                                type='text'
                                component={this.renderInput}
                            />
                            <Field
                                label='Item description'
                                name='itemDescription'
                                type='text'
                                component={this.renderInput}
                            />
                            <Button
                                color='dark'
                                block
                                size='sm'
                                className='mt-4'
                            >
                                Add item
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}
export default reduxForm({
    form: 'itemForm'
})(ItemForm);
