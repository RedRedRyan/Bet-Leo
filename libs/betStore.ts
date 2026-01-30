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

  // Add a bet to the betslip (enforces single selection per event)
  addBet: (bet) => {
    set((state) => {
      // Remove any existing bet for this event (single selection per event)
      const filteredBets = state.bets.filter((b) => b.eventId !== bet.eventId);

      // Add the new bet
      return { bets: [...filteredBets, bet] };
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
