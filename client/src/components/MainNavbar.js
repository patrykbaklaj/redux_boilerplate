import React from 'react';
import { Link } from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class MainNavbar extends React.Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return (
            <div>
                <Navbar color='dark' dark expand='md'>
                    <Container>
                        <NavbarBrand to='/' tag={Link}>
                            React/Redux boilerplate
                        </NavbarBrand>

                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className='ml-auto' navbar>
                                <NavItem>
                                    <NavLink tag={Link} to='/list/'>
                                        List
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/add/'>
                                        New item
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default MainNavbar;
