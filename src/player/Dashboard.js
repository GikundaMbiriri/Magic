import React from "react";
import Sidebar from "./components/Sidebar";
import Navbar from "../landingPage/components/Navbar";
import { Switch, Route } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex  bg-main-bg  w-screen h-screen fixed">
      <div className="h-full w-max">
        <Sidebar />
      </div>
      <div className=" flex-grow  overflow-y-scroll pb-10">
        <Navbar />
        </div>
    </div>
  );
}

export default Dashboard;
