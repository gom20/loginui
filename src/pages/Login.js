
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';

function Login(){
    return (
        <div>
            <Container className="panel">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="UserID" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" type="submit" >
                            Sign In
                        </Button>
                    </div>
                </Form>
                <br/>
                <div class="box">
                    <div><Link to="/find" className="link">Forgot Password?</Link></div>
                    <div><Link to="/join" className="link">Sign Up</Link></div>
                </div>               
            </Container>
           
        </div>
    );
}

export default Login