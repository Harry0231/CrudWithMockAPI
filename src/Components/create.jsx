import React, { useState } from "react";
import axios from "axios";
import { useNavigate ,Link} from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("click==========================>");
    axios
      .post("https://64a31737b45881cc0ae61c40.mockapi.io/crud-app", {
        name: name,
        email: email,
        header,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between m-2">
          <h2>Create</h2>
          <Link to="/read">
            <button className="btn btn-primary">Show Data</button>
          </Link>
        </div>

        <form>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
