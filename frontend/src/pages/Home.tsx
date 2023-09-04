import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <NavLink
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        to="/application"
      >
        Start My Application
      </NavLink>
    </div>
  );
}
