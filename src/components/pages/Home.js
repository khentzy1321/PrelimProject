import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [visitors, setVisitor] = useState([]);
  useEffect(() => {
    loadVisitor();
  }, []);
  const loadVisitor = async () => {
    const result = await axios.get("http://localhost:3003/visitors");
    setVisitor(result.data.reverse());
  };

  const deleteVisitior = async id => {
    await axios.delete(`http://localhost:3003/visitors/${id}`);
    loadVisitor();
  };
  

  return (
    <div>
    <div className="container">
      <div className="py-4">
        <h1>Entry Visitors</h1>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Address</th>
              <th scope="col" class="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {visitors.map((visit, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{visit.name}</td>
                <td>{visit.username}</td>
                <td>{visit.address}</td>
                <td>
                  <Link class="btn btn-primary mr-2 btn-sm" to={`/visitors/${visit.id}`}>
                    View
                  </Link>
                  <Link
                    class="btn btn-outline-primary mr-2 btn-sm"
                    to={`/visitors/edit/${visit.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    class="btn btn-danger btn-sm"
                    onClick={() => deleteVisitior(visit.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
};

export default Home;
