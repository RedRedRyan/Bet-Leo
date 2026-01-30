'use client'
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
// import { ArrowUpRight, ArrowDownLeft, Eye, EyeOff } from 'lucide-react'
import Image from "next/image";

interface OpenBet {
    id: string;
    eventName: string;
    betAmount: number;
    potentialWin: number;
    odds: number;
    status: 'pending' | 'live';
    placedAt: string;
}

interface BetHistory {
    id: string;
    eventName: string;
    betAmount: number;
    result: 'won' | 'lost' | 'draw';
    winAmount: number;
    odds: number;
    date: string;
}

const WalletPage = () => {
    const [showBalance, setShowBalance] = useState(true);
    const [activeTab, setActiveTab] = useState<'overview' | 'deposit' | 'withdraw' | 'history'>('overview');
    const [depositAmount, setDepositAmount] = useState('');
    const [withdrawAmount, setWithdrawAmount] = useState('');

    // Mock data
    const balance = 5250.50;
    const totalWagered = 12500.00;
    const totalWon = 4250.00;

    const openBets: OpenBet[] = [
        {
            id: '1',
            eventName: 'Manchester United vs Liverpool',
            betAmount: 100,
            potentialWin: 250,
            odds: 2.5,
            status: 'live',
            placedAt: '2024-01-30 14:30'
        },
        {
            id: '2',
            eventName: 'Lakers vs Warriors',
            betAmount: 50,
            potentialWin: 125,
            odds: 2.5,
            status: 'pending',
            placedAt: '2024-01-29 10:15'
        }
    ];

    const betHistory: BetHistory[] = [
        {
            id: '1',
            eventName: 'Chelsea vs Arsenal',
            betAmount: 75,
            result: 'won',
            winAmount: 187.50,
            odds: 2.5,
            date: '2024-01-28'
        },
        {
            id: '2',
            eventName: 'Real Madrid vs Barcelona',
            betAmount: 100,
            result: 'lost',
            winAmount: 0,
            odds: 1.8,
            date: '2024-01-27'
        },
        {
            id: '3',
            eventName: 'Bayern Munich vs Dortmund',
            betAmount: 50,
            result: 'won',
            winAmount: 125,
            odds: 2.5,
            date: '2024-01-26'
        },
    ];

    const handleDeposit = () => {
        if (depositAmount) {
            console.log('Deposit:', depositAmount);
            setDepositAmount('');
            setActiveTab('overview');
        }
    };

    const handleWithdraw = () => {
        if (withdrawAmount) {
            console.log('Withdraw:', withdrawAmount);
            setWithdrawAmount('');
            setActiveTab('overview');
        }
    };

    return (
        <div className="min-h-screen bg-background">


            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2">
                        Wallet
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Manage your account, balance, and betting history
                    </p>
                </div>

                {/* Main Balance Card */}
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl border border-accent/30 p-8 mb-8 shadow-lg shadow-accent/10">
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                        <div>
                            <p className="text-accent/80 text-sm mb-2 uppercase tracking-widest">Total Balance</p>
                            <div className="flex items-center gap-3">
                                <p className="text-4xl sm:text-5xl font-bold text-accent text-pretty">
                                    {showBalance ? `$${balance.toFixed(2)}` : '••••••'}
                                </p>
                                <button
                                    onClick={() => setShowBalance(!showBalance)}
                                    className="p-2 hover:bg-accent/20 rounded-lg transition-colors"
                                >
                                    {showBalance ? (
                                        // <EyeOff className="w-6 h-6 text-accent" />
                                        <Image src="/icons/arrow-down.svg" alt= "arrow-down" width={5} height={5} />
                                    ) : (
                                        // <Eye className="w-6 h-6 text-accent" />
                                        <Image src="/icons/arrow-down.svg" alt= "arrow-down" width={5} height={5} />
                                    )}
                                </button>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                            <button
                                onClick={() => setActiveTab('deposit')}
                                className="flex-1 sm:flex-none bg-accent text-primary font-semibold py-3 px-6 rounded-lg hover:bg-accent/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
                            >
                                {/*<ArrowDownLeft className="w-5 h-5" />*/}
                                <Image src="/icons/arrow-down.svg" alt= "arrow-down" width={5} height={5} />
                                Deposit
                            </button>
                            <button
                                onClick={() => setActiveTab('withdraw')}
                                className="flex-1 sm:flex-none bg-card border-2 border-accent text-accent font-semibold py-3 px-6 rounded-lg hover:bg-accent/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                            >
                                {/*<ArrowUpRight className="w-5 h-5" />*/}
                                <Image src="/icons/arrow-down.svg" alt= "arrow-down" width={5} height={5} />
                                Withdraw
                            </button>
                        </div>
                    </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
                    <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-muted-foreground text-sm mb-2">Total Wagered</p>
                        <p className="text-3xl font-bold text-accent">${totalWagered.toFixed(2)}</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-muted-foreground text-sm mb-2">Total Won</p>
                        <p className="text-3xl font-bold text-accent">${totalWon.toFixed(2)}</p>
                    </div>
                    <div className="bg-card border border-border rounded-lg p-6">
                        <p className="text-muted-foreground text-sm mb-2">Win Rate</p>
                        <p className="text-3xl font-bold text-accent">
                            {((totalWon / totalWagered) * 100).toFixed(1)}%
                        </p>
                    </div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex flex-wrap gap-2 mb-8 border-b border-border pb-4">
                    {[
                        { id: 'overview', label: 'Overview' },
                        { id: 'deposit', label: 'Deposit' },
                        { id: 'withdraw', label: 'Withdraw' },
                        { id: 'history', label: 'Bet History' }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id as any)}
                            className={`px-4 py-2 font-semibold transition-all duration-300 ${
                                activeTab === tab.id
                                    ? 'text-accent border-b-2 border-accent'
                                    : 'text-muted-foreground hover:text-foreground'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Open Bets */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-6">Open Bets</h3>
                            {openBets.length > 0 ? (
                                <div className="space-y-4">
                                    {openBets.map((bet) => (
                                        <div key={bet.id} className="bg-card border border-border rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-3">
                                                <h4 className="font-semibold text-foreground">{bet.eventName}</h4>
                                                <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                    bet.status === 'live'
                                                        ? 'bg-red-500/20 text-red-400'
                                                        : 'bg-blue-500/20 text-blue-400'
                                                }`}>
                                                    {bet.status === 'live' ? '🔴 Live' : '⏳ Pending'}
                                                </span>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-sm">
                                                <div>
                                                    <p className="text-muted-foreground text-xs">Bet Amount</p>
                                                    <p className="text-accent font-bold">${bet.betAmount.toFixed(2)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground text-xs">Odds</p>
                                                    <p className="text-accent font-bold">{bet.odds.toFixed(2)}</p>
                                                </div>
                                                <div>
                                                    <p className="text-muted-foreground text-xs">Potential Win</p>
                                                    <p className="text-accent font-bold">${bet.potentialWin.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="bg-card border border-border rounded-lg p-8 text-center">
                                    <p className="text-muted-foreground">No open bets</p>
                                </div>
                            )}
                        </div>

                        {/* Recent Bet History */}
                        <div>
                            <h3 className="text-xl font-bold text-foreground mb-6">Recent Bets</h3>
                            <div className="space-y-4">
                                {betHistory.slice(0, 3).map((bet) => (
                                    <div key={bet.id} className="bg-card border border-border rounded-lg p-4">
                                        <div className="flex justify-between items-start mb-3">
                                            <h4 className="font-semibold text-foreground">{bet.eventName}</h4>
                                            <span className={`px-2 py-1 rounded text-xs font-bold ${
                                                bet.result === 'won'
                                                    ? 'bg-green-500/20 text-green-400'
                                                    : 'bg-red-500/20 text-red-400'
                                            }`}>
                                                {bet.result === 'won' ? '✓ Won' : '✗ Lost'}
                                            </span>
                                        </div>
                                        <div className="grid grid-cols-3 gap-2 text-sm">
                                            <div>
                                                <p className="text-muted-foreground text-xs">Bet Amount</p>
                                                <p className="text-accent font-bold">${bet.betAmount.toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground text-xs">Odds</p>
                                                <p className="text-accent font-bold">{bet.odds.toFixed(2)}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground text-xs">Result</p>
                                                <p className="text-accent font-bold">${bet.winAmount.toFixed(2)}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'deposit' && (
                    <div className="max-w-md bg-card border border-border rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Deposit Funds</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-foreground text-sm font-semibold mb-2">Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3 text-muted-foreground">$</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={depositAmount}
                                        onChange={(e) => setDepositAmount(e.target.value)}
                                        className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={handleDeposit}
                                    className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 shadow-lg"
                                >
                                    Confirm Deposit
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className="w-full bg-card border border-border text-foreground font-semibold py-3 rounded-lg hover:border-accent transition-all duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'withdraw' && (
                    <div className="max-w-md bg-card border border-border rounded-lg p-8">
                        <h3 className="text-2xl font-bold text-foreground mb-6">Withdraw Funds</h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-foreground text-sm font-semibold mb-2">Amount</label>
                                <div className="relative">
                                    <span className="absolute left-4 top-3 text-muted-foreground">$</span>
                                    <input
                                        type="number"
                                        placeholder="0.00"
                                        value={withdrawAmount}
                                        onChange={(e) => setWithdrawAmount(e.target.value)}
                                        max={balance}
                                        className="w-full pl-8 pr-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:border-accent transition-colors"
                                    />
                                </div>
                                <p className="text-muted-foreground text-xs mt-2">Available: ${balance.toFixed(2)}</p>
                            </div>

                            <div className="pt-4 space-y-2">
                                <button
                                    onClick={handleWithdraw}
                                    disabled={!withdrawAmount || parseFloat(withdrawAmount) > balance}
                                    className="w-full bg-accent text-primary font-bold py-3 rounded-lg hover:bg-accent/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                                >
                                    Confirm Withdrawal
                                </button>
                                <button
                                    onClick={() => setActiveTab('overview')}
                                    className="w-full bg-card border border-border text-foreground font-semibold py-3 rounded-lg hover:border-accent transition-all duration-300"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'history' && (
                    <div>
                        <h3 className="text-2xl font-bold text-foreground mb-6">Bet History</h3>
                        {betHistory.length > 0 ? (
                            <div className="space-y-4">
                                {betHistory.map((bet) => (
                                    <div key={bet.id} className="bg-card border border-border rounded-lg p-5">
                                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                                            <div>
                                                <h4 className="font-semibold text-foreground">{bet.eventName}</h4>
                                                <p className="text-muted-foreground text-sm">{bet.date}</p>
                                            </div>
                                            <div className="flex items-center gap-6">
                                                <div className="text-right">
                                                    <p className="text-muted-foreground text-xs">Bet Slip</p>
                                                    <p className="text-foreground font-bold">${bet.betAmount.toFixed(2)}</p>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-muted-foreground text-xs">Odds</p>
                                                    <p className="text-foreground font-bold">{bet.odds.toFixed(2)}</p>
                                                </div>
                                                <div className={`text-right px-4 py-2 rounded-lg ${
                                                    bet.result === 'won'
                                                        ? 'bg-green-500/20'
                                                        : 'bg-red-500/20'
                                                }`}>
                                                    <p className="text-muted-foreground text-xs uppercase">Result</p>
                                                    <p className={`font-bold ${
                                                        bet.result === 'won'
                                                            ? 'text-green-400'
                                                            : 'text-red-400'
                                                    }`}>
                                                        {bet.result === 'won' ? `+$${bet.winAmount.toFixed(2)}` : `-$${bet.betAmount.toFixed(2)}`}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="bg-card border border-border rounded-lg p-8 text-center">
                                <p className="text-muted-foreground">No bet history</p>
                            </div>
                        )}
                    </div>
                )}
            </main>
        </div>
    );
};

export default WalletPage;
