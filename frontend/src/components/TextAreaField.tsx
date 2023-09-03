import React, { ChangeEvent } from "react";

interface TextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  fieldname: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaField: React.FC<TextareaProps> = ({
  label,
  placeholder,
  value,
  onChange,
  fieldname,
}) => {
  return (
    <div className="mb-2">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
      </label>
      <textarea
        className="border rounded-lg py-2 px-3 w-full h-32 resize-none focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={fieldname}
        required
      />
    </div>
  );
};

export default TextareaField;
