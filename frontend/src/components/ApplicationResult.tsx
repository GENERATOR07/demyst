import React from "react";

interface ApplicationResultProps {
  result: string;
}

const ApplicationResult: React.FC<ApplicationResultProps> = ({ result }) => (
  <div className="h-screen w-screen flex items-center justify-center">
    <h1 className="text-3xl font-bold text-blue-500">{result}</h1>
  </div>
);

export default ApplicationResult;
