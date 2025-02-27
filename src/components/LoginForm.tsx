import React, { useState } from 'react';
import { UserCheck } from 'lucide-react';

interface LoginFormProps {
  onLogin: (voterID: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [voterID, setVoterID] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (voterID.trim()) {
      onLogin(voterID);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="voterID" className="block text-sm font-medium text-gray-700">
          Voter ID
        </label>
        <input
          type="text"
          id="voterID"
          value={voterID}
          onChange={(e) => setVoterID(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <UserCheck className="mr-2" /> Login to Vote
      </button>
    </form>
  );
};

export default LoginForm;