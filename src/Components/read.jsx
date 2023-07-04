import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Read() {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://64a31737b45881cc0ae61c40.mockapi.io/crud-app")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64a31737b45881cc0ae61c40.mockapi.io/crud-app/${id}`)
      .then(() => {
        getData();
      });
  }

  function editData(id,name,email) {
    localStorage.setItem("id",id);
    localStorage.setItem("name",name);
    localStorage.setItem("email",email);

  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <h1>Read File</h1>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">E-mail</th>
            <th scope="col">Edit Button</th>
            <th scope="col">Delete Button</th>
          </tr>
        </thead>
        {data.map((item) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() => editData(item.id, item.name, item.email)}
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
}

export default Read;
