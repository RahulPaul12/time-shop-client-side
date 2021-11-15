import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Useauth from '../Hooks/Useauth';

const Register = () => {
    const [logindata, setlogindata]=useState({})
    const handleonchange =e=>{

        const field = e.target.name;
        const value = e.target.value;
        const newlogindata = {...logindata};
        newlogindata[field]=value;
        setlogindata(newlogindata);

    }
    const handleloginsubmit = e=>{
        if(logindata.password !== logindata.password2){
            alert('your password didnot match');
        }
        e.preventDefault();
    }
    const{handlegooglesignin} = Useauth();
    return (
        <div className="w-50 mx-auto">
            
                <h2 className="text-center">Register: Create Account</h2>
                <Form onSubmit={handleloginsubmit} className="w-50 mx-auto">
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Col sm="10">
                        <Form.Control type="email" placeholder="name@example.com" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                            Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Password" />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                        <Form.Label column sm="2">
                             Password
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="Retype Password" />
                        </Col>
                    </Form.Group>
                    <Button  style={{width:"75%" }} type="submit">Register</Button>
                </Form>
                <p className="text-center">New to MediCare? <Link to="/register">Create new</Link></p>
                <div className="text-center">----------or----------</div>
                <Button className="btn btn-success mb-3"
                    onClick={handlegooglesignin}
                    style={{
                        
                    }}
                >Google Sign In</Button>
        </div>
    );
};

export default Register;