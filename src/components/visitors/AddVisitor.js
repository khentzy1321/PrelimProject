import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddVisitor = () => {
  let history = useHistory();
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

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3003/visitors", visit);
    history.push("/");
  };
  return (
    <div className="card bg-secondary">
      <div className="card-body">
        <h2 className="text-center mb-4">Add A Visitor</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder=" Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control"
              placeholder="E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Phone Number"
              name="phone"
              value={phone}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control"
              placeholder="Location"
              name="address"
              value={address}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Visitor</button>
        </form>
      </div>
    </div>
  );
};

export default AddVisitor;
