import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function RegisterPage() {
  const navigate = new useNavigate();

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [cnfPassword, setCnfPassword] = useState("");

  const handleSubmit = () => {
    navigate("/details");
  };
  return (
    <div className="container">
      <div
        class="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-4">
          <div class="border p-4 rounded">
            <Form>
              <p class="row justify-content-center align-items-center">
                REGISTER
              </p>
              <hr />

              <Form.Group className="mb-3" controlId="fname" value={fname}>
                <Form.Label>First Name:</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="lname" value={lname}>
                <Form.Label>Last Name:</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email" value={email}>
                <Form.Label>Email Id:</Form.Label>
                <Form.Control type="email" placeholder="Email Id" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="password"
                value={password}
              >
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="cnfPassword"
                value={cnfPassword}
              >
                <Form.Label>Confirm Password:</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <div>
                <Link to="/login"> Already registered?</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
