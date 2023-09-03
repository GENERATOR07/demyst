import React from "react";
import Button from "./Button";

export interface BalanceSheetItem {
  year: number;
  month: number;
  profitOrLoss: number;
  assetsValue: number;
}

interface BalanceSheetProps {
  data: BalanceSheetItem[];
}

const BalanceSheetReview: React.FC<BalanceSheetProps> = ({ data }) => {
  return (
    <table className="min-w-full bg-white">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left">Year</th>
          <th className="py-2 px-4 text-left">Month</th>
          <th className="py-2 px-4 text-left">Profit/Loss</th>
          <th className="py-2 px-4 text-left">Assets Value</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="py-2 px-4">{item.year}</td>
            <td className="py-2 px-4">{item.month}</td>
            <td
              className={`py-2 px-4 ${
                item.profitOrLoss >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {item.profitOrLoss.toLocaleString()}
            </td>
            <td className="py-2 px-4">{item.assetsValue.toLocaleString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BalanceSheetReview;
