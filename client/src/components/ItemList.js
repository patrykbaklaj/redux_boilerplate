import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems, deleteItem } from '../actions/itemsActions';
import {
    Container,
    ListGroup,
    ListGroupItem,
    ListGroupItemHeading,
    ListGroupItemText,
    Row,
    Col,
    Button
} from 'reactstrap';

class ItemList extends Component {
    componentDidMount() {
        this.props.fetchItems();
    }

    handleDelete = (e) => {
        // console.log(e.target.dataset.id);
        this.props.deleteItem(e.target.dataset.id)
    };

    renderItem = () => {
        return this.props.items.map(item => {
            return (
                <div key={item._id}>
                    <ListGroupItem >
                        <ListGroupItemHeading>{item.name}</ListGroupItemHeading>
                        <ListGroupItemText>
                            {item.description}
                        </ListGroupItemText>
                        <Row>
                            <Col md='6'>
                                <em>{new Date(item.date).toLocaleDateString()} {new Date(item.date).toLocaleTimeString()}</em>
                            </Col>
                            <Col md='6' className='text-right'>
                                <Button className='mr-2' color='warning'>
                                    Edit
                                </Button>
                                <Button data-id={item._id} className='mr-2' color='danger' onClick={this.handleDelete}>
                                    Delete
                                </Button>
                            </Col>
                        </Row>
                    </ListGroupItem>
                </div>
            );
        });
    };

    render() {
        return (
            <div>
                <Container className="mt-5">
                    <ListGroup>{this.renderItem()}</ListGroup>
                </Container>
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log(state);
    return { items: state.items.items };
};

export default connect(
    mapStateToProps,
    { fetchItems, deleteItem }
)(ItemList);
