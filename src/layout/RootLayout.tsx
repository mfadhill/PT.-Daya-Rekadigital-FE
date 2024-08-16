// RootLayout.tsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar"; // Pastikan path sesuai

const RootLayout: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
