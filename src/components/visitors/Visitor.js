import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Visitor = () => {
  const [visit, setVisitor] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    address: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadVisitor();
  }, []);
  const loadVisitor = async () => {
    const res = await axios.get(`http://localhost:3003/visitors/${id}`);
    setVisitor(res.data);
  };
  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back 
      </Link>
      <h1 className="display-4">Visitors Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">name: {visit.name}</li>
        <li className="list-group-item">user name: {visit.username}</li>
        <li className="list-group-item">email: {visit.email}</li>
        <li className="list-group-item">phone: {visit.phone}</li>
        <li className="list-group-item">address: {visit.address}</li>
      </ul>
    </div>
  );
};

export default Visitor;
