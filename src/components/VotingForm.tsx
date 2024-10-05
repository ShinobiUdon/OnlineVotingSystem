import React, { useState } from 'react';
import { Check } from 'lucide-react';

interface VotingFormProps {
  onVote: (option: string) => void;
}

const VotingForm: React.FC<VotingFormProps> = ({ onVote }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedOption) {
      onVote(selectedOption);
    }
  };

  const options = ['Option A', 'Option B', 'Option C'];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              value={option}
              checked={selectedOption === option}
              onChange={() => setSelectedOption(option)}
              className="form-radio h-5 w-5 text-blue-600"
            />
            <span className="text-gray-700">{option}</span>
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={!selectedOption}
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Check className="mr-2" /> Cast Vote
      </button>
    </form>
  );
};

export default VotingForm;