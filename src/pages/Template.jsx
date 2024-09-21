import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const Template = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default Template;
