import React from "react";
const Button: React.FC<{ label: string }> = ({ label }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
    >
      {label}
    </button>
  );
};

export default Button;
