import React, { useState } from "react";
import "./LoginScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorScreen from "../../components/ErrorScreen";
import LoadingScreen from "../../components/LoadingScreen";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

    const handleLoginFormSubmit = async(e) => {

        e.preventDefault()

        try {
            const config = {
                header: {
                    "Content-Type": "application/json"
                }
            }

            setLoading(true)

            const { data } = await axios.post('/api/users/login',{
                email,
                password
            },config)

            console.log(data)
            localStorage.setItem('userinfo', JSON.stringify(data));
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            setError(error.response.data.message)
        }


    }

  return (
    <div className="login-screen  my-3">
      <MainScreen title="LOGIN">
      {loading && <LoadingScreen/>}  
      {error && <ErrorScreen variant="danger">{error}</ErrorScreen>}

        <Form
          onSubmit={handleLoginFormSubmit}
          className="login-form"
          autoComplete="off"
        >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            New User? <Link to="/register">Register</Link>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </MainScreen>
    </div>
  );
};

export default LoginScreen;
