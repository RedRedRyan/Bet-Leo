'use client'
import React, { useState } from 'react';
import { useBetStore } from '@/libs/betStore';
import Betslip from './Betslip';

const BetslipButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { bets } = useBetStore();
  
  const openBetslip = () => setIsOpen(true);
  const closeBetslip = () => setIsOpen(false);
  
  return (
    <>
      <button
        onClick={openBetslip}
        className="fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg"
        aria-label="Open betslip"
      >
        <div className="relative">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" 
            />
          </svg>
          
          {/* Badge showing number of bets */}
          {bets.length > 0 && (
            <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {bets.length}
            </div>
          )}
        </div>
      </button>
      
      <Betslip isOpen={isOpen} onClose={closeBetslip} />
    </>
  );
};

export default BetslipButton;