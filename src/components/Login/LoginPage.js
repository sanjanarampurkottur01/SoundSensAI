import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

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
        className="row justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="col-md-4">
          <div className="border p-4">
            {" "}
            <form onSubmit={handleSubmit}>
              <div className="form-group mx-sm-3 mb-3">
                <label className="mb-3">
                  <strong>Enter Email:</strong>
                </label>
                <input
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  type="email"
                  className="form-control"
                  placeholder="Enter Email"
                ></input>
              </div>
              <div className="form-group mx-sm-3 mb-3">
                <label className="mb-3">
                  <strong>Enter Password:</strong>
                </label>
                <input
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  className="form-control"
                  placeholder="Enter Password"
                ></input>
              </div>

              <div className="mx-sm-3 d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
