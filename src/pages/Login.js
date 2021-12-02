
import React, { useState } from 'react';
import Form from "react-bootstrap/Form"; 
import Button from "react-bootstrap/Button";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Popup from '../components/Popup';
import { useNavigate } from 'react-router-dom';


function Login(){
    const navigate  = useNavigate();
    const [popup, setPopup] = useState({open: false, title: "", message: "", callback: false});
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");

    const onChangeUserId = (e) => {
        setUserId(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const validation = () => {
        if(userId && password ) return true;
        else return false;
    }

    const onSubmit = (e) => {
        if(!validation()) {
            setPopup({
                open: true,
                title: "Error",
                message: "Please make sure all fields are filled in correctly."
            });
            return;
        }
        axios.post("http://localhost:8080/login", {
            userId: userId,
            password: password
        }).then(function (response) {
            console.log(response);
            if(response.data.code == 0){
                navigate("/");
            } else {
                let message = response.data.message;
                setPopup({
                    open: true,
                    title: "Error",
                    message: message
                });
            }
        }).catch(function (error) {
            setPopup({
                open: true,
                title: "Error",
                message: "Server Internl Error"
            });
        });

    }

    return (
        <div>
            <Popup open = {popup.open} setPopup = {setPopup} message = {popup.message} title = {popup.title} callback = {popup.callback}/>
            <Container className="panel">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="input" placeholder="UserID" value={userId} onChange={onChangeUserId} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Col sm>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={onChangePassword} />
                        </Col>
                    </Form.Group>
                    <br/>

                    <div className="d-grid gap-1">
                        <Button variant="secondary" onClick={onSubmit} >
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