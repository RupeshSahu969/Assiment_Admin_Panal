import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import UserList from "../Pages/UserList";
import TransactionList from "../Pages/TransactionList";
import VideoManagement from "../Pages/VideoManagement";
import TopReceiversList from "../Pages/TopReceiversList";

const DashboardRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/transaction" element={<TransactionList />} />
        <Route path="/videoManagement" element={<VideoManagement />} />
        <Route path="/topReceiversList" element={<TopReceiversList />} />
      </Routes>
    </div>
  );
};

export default DashboardRoute;
