import React, { Component } from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

class Main extends Component {
    render() {
        return (
            <div>
                <Jumbotron className="pt-5 text-center">
                    <Container>
                        <h1 className='display-3 mb-5'>Home Page</h1>
                        <p className='lead'>
                            This is a simple hero unit, a simple Jumbotron-style
                            component for calling extra attention to featured
                            content or information.
                        </p>
                        <hr className='my-2' />
                        <p>
                            It uses utility classes for typography and spacing
                            to space content out within the larger container.
                        </p>
                        <p className='lead'>
                            <Button outline color='dark' className="mt-5">Learn More</Button>
                        </p>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}

export default Main;
