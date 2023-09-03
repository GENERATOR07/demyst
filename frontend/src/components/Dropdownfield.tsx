import React, { ChangeEvent } from "react";
export interface option {
  name: string;
  value: string;
}
interface DropdownProps {
  label: string;
  options: option[];
  value: string;
  fieldname: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownField: React.FC<DropdownProps> = ({
  label,
  options,
  value,
  fieldname,
  onChange,
}) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <select
        className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
        name={fieldname}
        required
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownField;
