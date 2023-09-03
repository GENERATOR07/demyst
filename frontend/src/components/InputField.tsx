import React from "react";

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  value: string;

  fieldname: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  value,
  fieldname,
  onChange,
}) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <input
        type={type}
        className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        onChange={onChange}
        name={fieldname}
        required
      />
    </div>
  );
};

export default InputField;
