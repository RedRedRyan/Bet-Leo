'use client'
import React, { useState } from 'react';
import { useBetStore, Bet } from '@/libs/betStore';
import Image from 'next/image';

interface BetslipProps {
  isOpen: boolean;
  onClose: () => void;
}

const Betslip: React.FC<BetslipProps> = ({ isOpen, onClose }) => {
  const { bets, amount, removeBet, clearBets, setAmount } = useBetStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate total odds
  const totalOdds = bets.reduce((acc, bet) => acc * bet.odds, 1);
  
  // Calculate potential winnings
  const potentialWinnings = amount * totalOdds;

  const handlePlaceBet = () => {
    if (bets.length === 0 || amount <= 0) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      alert(`Bet placed successfully! Amount: $${amount.toFixed(2)}, Potential Winnings: $${potentialWinnings.toFixed(2)}`);
      clearBets();
      setAmount(0);
      setIsSubmitting(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black bg-opacity-50">
      <div className="bg-gray-900 w-full sm:w-96 sm:rounded-xl overflow-hidden max-h-[80vh] flex flex-col">
        {/* Header */}
        <div className="bg-blue-600 p-4 flex justify-between items-center">
          <h2 className="text-white font-bold text-lg">Betslip ({bets.length})</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 overflow-auto p-4">
          {bets.length === 0 ? (
            <div className="text-center py-8 text-gray-400">
              <p>Your betslip is empty</p>
              <p className="text-sm mt-2">Select odds to add bets</p>
            </div>
          ) : (
            <div className="space-y-4">
              {bets.map((bet) => (
                <BetCard key={`${bet.eventId}-${bet.selectedTeam}`} bet={bet} onRemove={removeBet} />
              ))}
            </div>
          )}
        </div>
        
        {/* Footer */}
        <div className="p-4 bg-gray-800">
          <div className="flex justify-between mb-2">
            <span className="text-gray-300">Total Odds:</span>
            <span className="font-bold text-white">{totalOdds.toFixed(2)}</span>
          </div>
          
          <div className="mb-4">
            <label htmlFor="amount" className="block text-sm text-gray-300 mb-1">Bet Amount</label>
            <input
              id="amount"
              type="number"
              min="0"
              step="0.01"
              value={amount || ''}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              className="w-full bg-gray-700 border border-gray-600 rounded p-2 text-white"
              placeholder="Enter amount"
            />
          </div>
          
          <div className="flex justify-between mb-4">
            <span className="text-gray-300">Potential Winnings:</span>
            <span className="font-bold text-green-400">${potentialWinnings.toFixed(2)}</span>
          </div>
          
          <div className="flex gap-2">
            <button
              onClick={clearBets}
              disabled={bets.length === 0 || isSubmitting}
              className="flex-1 py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded disabled:opacity-50"
            >
              Clear
            </button>
            <button
              onClick={handlePlaceBet}
              disabled={bets.length === 0 || amount <= 0 || isSubmitting}
              className="flex-1 py-2 px-4 bg-blue-600 hover:bg-blue-500 text-white rounded disabled:opacity-50"
            >
              {isSubmitting ? 'Placing Bet...' : 'Place Bet'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Individual bet card component
const BetCard: React.FC<{ bet: Bet; onRemove: (eventId: string, selectedTeam: 'home' | 'away' | 'draw') => void }> = ({ bet, onRemove }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-3 relative">
      <button 
        onClick={() => onRemove(bet.eventId, bet.selectedTeam)}
        className="absolute top-2 right-2 text-gray-400 hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      
      <div className="text-xs text-gray-400 mb-1">{bet.league}</div>
      <div className="text-sm font-medium text-white mb-2">
        {bet.homeTeam} vs {bet.awayTeam}
      </div>
      
      <div className="flex justify-between items-center">
        <div className="bg-blue-900 text-white text-xs py-1 px-2 rounded">
          {bet.selectedTeam === 'home' ? bet.homeTeam : 
           bet.selectedTeam === 'away' ? bet.awayTeam : 'Draw'}
        </div>
        <div className="text-yellow-400 font-bold">{bet.odds.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Betslip;