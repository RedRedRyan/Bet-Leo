'use client'
import React, { useState, useMemo } from 'react'
import CasinoEvent from '@/components/CasinoEvent'
import { casinoGames } from '@/libs/constants'

type GameType = 'all' | 'slot' | 'table' | 'ai';

const CasinoPage = () => {
    const [selectedGameType, setSelectedGameType] = useState<GameType>('all');

    const filterOptions = [
        { value: 'all', label: 'All Games', count: casinoGames.length },
        { value: 'slot', label: 'Slot Games', count: casinoGames.filter(g => g.type === 'slot').length },
        { value: 'table', label: 'Table Games', count: casinoGames.filter(g => g.type === 'table').length },
        { value: 'ai', label: 'AI Games', count: casinoGames.filter(g => g.type === 'ai').length },
    ];

    const filteredGames = useMemo(() => {
        if (selectedGameType === 'all') {
            return casinoGames;
        }
        return casinoGames.filter(game => game.type === selectedGameType);
    }, [selectedGameType]);

    return (
        <div className="min-h-screen bg-background">

            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2 text-balance">
                        Casino Games
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Play exciting casino games and win big prizes
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                        {filterOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setSelectedGameType(option.value as GameType)}
                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 ${
                                    selectedGameType === option.value
                                        ? 'bg-accent text-primary border-2 border-accent shadow-lg shadow-accent/50'
                                        : 'bg-card text-foreground border-2 border-border hover:border-accent'
                                }`}
                            >
                                <span className="text-sm sm:text-base">
                                    {option.label}
                                    <span className="ml-1 text-xs opacity-75">({option.count})</span>
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Games Grid */}
                {filteredGames.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
                        {filteredGames.map((game) => (
                            <CasinoEvent
                                key={game.id}
                                game={game}
                                isClickable={true}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 bg-card rounded-lg border border-border">
                        <p className="text-muted-foreground text-xl mb-2">No games available</p>
                        <p className="text-muted-foreground text-sm">Try selecting a different category</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default CasinoPage;
