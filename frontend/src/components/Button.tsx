import React, { FC, ReactNode, MouseEventHandler } from "react";

interface ButtonProps {
  label: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      type="submit"
      className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
