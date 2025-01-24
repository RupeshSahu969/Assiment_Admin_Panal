import React, { useState } from "react";
import "../Style/userlist.css";

const UserList = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reference: "",
    businessPromoters: "",
    businessIncome: "",
    status: "Active",
    receivePayment: "Accept",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    // Perform actions such as API call or state updates
  };

  return (
    <div>
      <div className="user-list">
      <h4 style={{textAlign:"start", fontWeight:"bold", marginBottom:"40px"}}>User List</h4>
        <div className="table-responsive">
          <table
            className="table"
            style={{
              boxShadow:
                "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;",
              backgroundColor: "rgb(168, 160, 160)",
            }}
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: "Pavithri",
                  email: "shimasreedaran@gmail.com",
                  phone: "9605854176",
                  status: "Active",
                },
                {
                  name: "Shimna",
                  email: "kkousaly73@gmail.com",
                  phone: "7034124557",
                  status: "Active",
                },
              ].map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.status}</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#exampleModal"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                View & Edit List
              </h5>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter name"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input
                      type="text"
                      className="form-control"
                      id="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter phone number"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="reference" className="form-label">Reference</label>
                    <input
                      type="text"
                      className="form-control"
                      id="reference"
                      value={formData.reference}
                      onChange={handleInputChange}
                      placeholder="Enter reference"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="businessPromoters" className="form-label">Business Promoters</label>
                    <input
                      type="text"
                      className="form-control"
                      id="businessPromoters"
                      value={formData.businessPromoters}
                      onChange={handleInputChange}
                      placeholder="Enter business promoters"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="businessIncome" className="form-label">Business Income</label>
                    <input
                      type="text"
                      className="form-control"
                      id="businessIncome"
                      value={formData.businessIncome}
                      onChange={handleInputChange}
                      placeholder="Enter business income"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="status" className="form-label">Status</label>
                    <select
                      className="form-control"
                      id="status"
                      value={formData.status}
                      onChange={handleInputChange}
                    >
                      <option value="Active">Active</option>
                      <option value="NotActive">Not Active</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="receivePayment" className="form-label">Receive Payment</label>
                    <select
                      className="form-control"
                      id="receivePayment"
                      value={formData.receivePayment}
                      onChange={handleInputChange}
                    >
                      <option value="Accept">Accept</option>
                      <option value="NotAccept">Not Accept</option>
                    </select>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Save changes
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;
