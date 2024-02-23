import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function LoginPage() {
  const navigate = new useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
              <p class="row justify-content-center align-items-center">LOGIN</p>
              <hr />
              <Form.Group className="mb-3" controlId="email" value={email}>
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="password"
                value={password}
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
              </Button>
              <div>
                <Link to="/register"> Haven't registered yet?</Link>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
