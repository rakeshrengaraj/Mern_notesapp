import React, { useState } from "react";
import "./RegisterScreen.css";
import MainScreen from "../../components/MainScreen/MainScreen";
import { Form, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import ErrorScreen from "../../components/ErrorScreen";
import LoadingScreen from "../../components/LoadingScreen";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setpasswordConfirm] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [profilePic, setProfilePic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [dob, setDob] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const [picMessage, setPicMessage] = useState(null);

  const handleSignupFormSubmit = async (e) => {
    e.preventDefault();


    if (password != passwordConfirm) {
      setMessage("Both Passwords does not match");
    } else {
      setMessage(null);

      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };

        console.log(firstName);
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          {
            email,
            password,
            first_name: firstName,
            last_name: lastName,
            profilePic,
            date_of_birth:dob
          },
          config
        );
        console.log(data);
        localStorage.setItem("userinfo", JSON.stringify(data));

        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.response.data.message);
      }
    }
  };

  const postPics = (pics) => {
    if (!pics) {
      setPicMessage("Please select an image");
    }
    setPicMessage(null);
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "notesapp");
      data.append("cloud_name", "dketuxmtz");
      fetch("https://api.cloudinary.com/v1_1/dketuxmtz/image/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProfilePic(data.url.toString());
        })
        .catch((err) => console.error(err));
    } else {
      return setPicMessage("Please select an image");
    }
  };

  return (
    <div className="register-screen my-3">
      <MainScreen title="SIGNUP">
        {error && <ErrorScreen variant="danger">{error}</ErrorScreen>}
        {message && <ErrorScreen variant="danger">{message}</ErrorScreen>}
        {picMessage && <ErrorScreen variant="danger">{picMessage}</ErrorScreen>}
        {loading && <LoadingScreen />}
        <Form onSubmit={handleSignupFormSubmit}>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridPasswordConfirmation">
            <Form.Label>Password Confirmation</Form.Label>
            <Form.Control
              type="password"
              autoComplete="off"
              placeholder="Password Confirmation"
              value={passwordConfirm}
              onChange={(e) => setpasswordConfirm(e.target.value)}
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Form.Group>{" "}
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridProfilePic">
              <Form.Label>Profile Pic</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => postPics(e.target.files[0])}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridDateOfBirth">
              <Form.Label>Date Of Birth</Form.Label>
              <Form.Control
                type="date"
                autoComplete="off"
                placeholder="Profile Pic"
                onChange={(e) => setDob(e.target.value)}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3">
            Already Have Account? <Link to="/login">Login</Link>
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </MainScreen>
    </div>
  );
};

export default RegisterScreen;
