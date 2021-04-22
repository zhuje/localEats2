import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style/style.login.css";

function Login2() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0 && confirmPassword.length === password.length;
    }

    function handleSubmit(event) {
        if (password !== confirmPassword) {
            alert("Passwords do not match! Please enter your password twice to confirm it.")
        } else {
            event.preventDefault();
            alert("Sign up successful! Returning to Login screen.")
            window.location.href = "/login";
        }
    }

    return (

        <div className="Login" style={{width: "100%"}}>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default class Signup extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-9">
                <div className="dev_search_title">
                    <div className="jumbotron-fluid dev_background_login">
                        <div className="dev_transbox_searchResults">
                            <div className="container">
                                <h1 className="display-6"> Sign Up </h1>
                                <p className="lead"> Use the following form in order to sign up
                                    for a LocalEats account.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Login2/>
            </div>
        )
    }
}