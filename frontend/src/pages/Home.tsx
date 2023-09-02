import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <NavLink to="/application">start my application</NavLink>
    </div>
  );
}
