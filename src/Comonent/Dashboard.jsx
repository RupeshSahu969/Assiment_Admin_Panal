import React from "react";
import { Link } from "react-router-dom";
import logoimage from "../asset/logo.png"
import "../Style/dashboard.css"; // Ensure this path is correct
import UserList from "../Pages/UserList";
import TransactionList from "../Pages/TransactionList";
import VideoManagement from "../Pages/VideoManagement";
import TopReceiversList from "../Pages/TopReceiversList";
import DashboardRoute from "../MainRoute/DashboardRoute";

const Dashboard = () => {
  return (
    <div className="dashboard d-flex">
      {/* Sidebar */}
      <div className="sidebar  text-white p-3">
        <img  src={logoimage}  alt="logoimage"/>
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              User List
            </Link>
            
          </li>
          <li className="nav-item">
            <Link to="/transaction" className="nav-link text-white">
              Transaction List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/videoManagement" className="nav-link text-white">
              Video Management
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/topReceiversList" className="nav-link text-white">
              Top Receivers List
            </Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="content flex-grow-1 p-4">
       <div className="container-das p-3">
       <h2>Dashboard</h2>
       <p className="text-muted">01 - 25 March, 2020</p>
       </div>

        {/* Chart Section */}
        <div className="chart bg-light p-3 mb-4" style={{ height: "150px" }}>
          <p>Chart Placeholder</p>
        </div>
        <div>
            <DashboardRoute/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
