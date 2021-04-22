import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../style/style.login.css";

function Login2() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }


    function handleSubmit(event) {
        event.preventDefault();
        alert("Login successful! Returning to home screen.")
        window.location.href = "/";
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
                    <Button block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </Form>
            </div>
    );
}

export default class Login extends React.Component {
    render() {
        return (
            <div className="col-sm-12 col-md-9">
                <div className="dev_search_title">
                <div className="jumbotron-fluid dev_background_login">
                    <div className="dev_transbox_searchResults">
                        <div className="container">
                            <h1 className="display-6"> Log In </h1>
                            <p className="lead"> Log in to your LocalEats account here, or <a href={"signup"}>sign up </a>
                            to create an account. This will allow you to store your preferences as well as
                            any saved promotions.</p>
                        </div>
                    </div>
                </div>
                </div>
            <Login2/>
            </div>
        )
    }
}