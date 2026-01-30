import { create } from 'zustand';

// Define the bet type
export interface Bet {
  eventId: string;
  league: string;
  homeTeam: string;
  awayTeam: string;
  selectedTeam: 'home' | 'away' | 'draw';
  odds: number;
}

// Define the store type
interface BetStore {
  bets: Bet[];
  amount: number;
  addBet: (bet: Bet) => void;
  removeBet: (eventId: string, selectedTeam: 'home' | 'away' | 'draw') => void;
  clearBets: () => void;
  setAmount: (amount: number) => void;
  isBetSelected: (eventId: string, selectedTeam: 'home' | 'away' | 'draw') => boolean;
}

// Create the store
export const useBetStore = create<BetStore>((set, get) => ({
  bets: [],
  amount: 0,
  
  // Add a bet to the betslip
  addBet: (bet) => {
    set((state) => {
      // Check if this bet already exists (same event and selection)
      const existingBetIndex = state.bets.findIndex(
        (b) => b.eventId === bet.eventId && b.selectedTeam === bet.selectedTeam
      );
      
      // If it exists, replace it (in case odds changed)
      if (existingBetIndex !== -1) {
        const newBets = [...state.bets];
        newBets[existingBetIndex] = bet;
        return { bets: newBets };
      }
      
      // Otherwise add it to the list
      return { bets: [...state.bets, bet] };
    });
  },
  
  // Remove a bet from the betslip
  removeBet: (eventId, selectedTeam) => {
    set((state) => ({
      bets: state.bets.filter(
        (bet) => !(bet.eventId === eventId && bet.selectedTeam === selectedTeam)
      ),
    }));
  },
  
  // Clear all bets
  clearBets: () => set({ bets: [] }),
  
  // Set the bet amount
  setAmount: (amount) => set({ amount }),
  
  // Check if a bet is already selected
  isBetSelected: (eventId, selectedTeam) => {
    return get().bets.some(
      (bet) => bet.eventId === eventId && bet.selectedTeam === selectedTeam
    );
  },
}));