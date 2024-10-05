import React from 'react';
import { BarChart } from 'lucide-react';

const Results: React.FC = () => {
  // In a real application, these results would be fetched from a server
  const mockResults = [
    { option: 'Option A', votes: 42 },
    { option: 'Option B', votes: 38 },
    { option: 'Option C', votes: 20 },
  ];

  const totalVotes = mockResults.reduce((sum, result) => sum + result.votes, 0);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <BarChart className="mr-2" /> Voting Results
      </h2>
      <div className="space-y-4">
        {mockResults.map((result) => (
          <div key={result.option}>
            <div className="flex justify-between mb-1">
              <span>{result.option}</span>
              <span>{((result.votes / totalVotes) * 100).toFixed(1)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full"
                style={{ width: `${(result.votes / totalVotes) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-gray-500">Total votes: {totalVotes}</p>
    </div>
  );
};

export default Results;