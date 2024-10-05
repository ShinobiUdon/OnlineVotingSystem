import React, { useState, useEffect } from 'react';
import { Vote, LockKeyhole, CheckCircle } from 'lucide-react';
import VotingForm from './components/VotingForm';
import Results from './components/Results';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const voted = localStorage.getItem('hasVoted');
    if (voted) {
      setHasVoted(true);
      setShowResults(true);
    }
  }, []);

  const handleLogin = (voterID: string) => {
    // In a real application, this would involve server-side authentication
    setIsLoggedIn(true);
  };

  const handleVote = (option: string) => {
    // In a real application, this would involve sending the vote to a secure server
    console.log(`Vote cast for: ${option}`);
    setHasVoted(true);
    setShowResults(true);
    localStorage.setItem('hasVoted', 'true');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6 flex items-center justify-center">
          <Vote className="mr-2" /> Secure Voting System
        </h1>
        {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
        {isLoggedIn && !hasVoted && <VotingForm onVote={handleVote} />}
        {hasVoted && (
          <div className="text-center">
            <CheckCircle className="mx-auto text-green-500 w-16 h-16 mb-4" />
            <p className="text-xl font-semibold mb-4">Thank you for voting!</p>
            <button
              onClick={() => setShowResults(true)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View Results
            </button>
          </div>
        )}
        {showResults && <Results />}
        <div className="mt-8 text-center text-sm text-gray-500">
          <LockKeyhole className="inline-block mr-1" size={16} />
          Secured with end-to-end encryption
        </div>
      </div>
    </div>
  );
};

export default App;