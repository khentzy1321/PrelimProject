import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditVisitor = () => {
  let history = useHistory();
  const { id } = useParams();
  const [visit, setVisitor] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: ""
  });

  const { name, username, email, phone, address } = visit;
  const onInputChange = e => {
    setVisitor({ ...visit, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadVisitor();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3003/visitors/${id}`, visit);
    history.push("/");
  };

  const loadVisitor = async () => {
    const result = await axios.get(`http://localhost:3003/visitors/${id}`);
    setVisitor(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5 mt-3 bg-secondary">
        <h2 className="text-center mb-4">Edit A Visitor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Website Name"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-warning btn-block">Update Info</button>
        </form>
      </div>
    </div>
  );
};

export default EditVisitor;
