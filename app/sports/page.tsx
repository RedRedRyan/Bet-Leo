'use client'
import React, { useState, useMemo } from 'react'

import EventCard from '@/components/EventCard'
import { footballTeams, basketballTeams, cricketTeams, matchEvents } from '@/libs/constants'

type SportType = 'football' | 'basketball' | 'cricket' | 'live';

const SportsPage = () => {
    const [selectedSport, setSelectedSport] = useState<SportType>('football');

    const filterOptions = [
        { value: 'football', label: 'Football ⚽', icon: '⚽' },
        { value: 'basketball', label: 'Basketball 🏀', icon: '🏀' },
        { value: 'cricket', label: 'Cricket 🏏', icon: '🏏' },
        { value: 'live', label: 'Live Games 🔴', icon: '🔴' },
    ];

    // Filter events based on selected sport
    const filteredEvents = useMemo(() => {
        if (selectedSport === 'live') {
            // For live games, we could add a status filter
            return matchEvents;
        }
        return matchEvents.filter(event => {
            if (selectedSport === 'football') {
                const footballLeagues = ['EPL', 'LaLiga', 'BundesLiga', 'SerieA', 'Ligue1', 'ChampionsLeague', 'EuropaLeague'];
                return footballLeagues.includes(event.league);
            }
            if (selectedSport === 'basketball') {
                return event.league === 'NBA' || event.league === 'EuroLeague';
            }
            if (selectedSport === 'cricket') {
                return event.league === 'IPL';
            }
            return true;
        });
    }, [selectedSport]);

    return (
        <div className="min-h-screen bg-background">


            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {/* Page Header */}
                <div className="mb-12">
                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-2 text-balance">
                        Sports Betting
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Choose your favorite sport and place your bets on upcoming matches
                    </p>
                </div>

                {/* Filter Buttons */}
                <div className="mb-10">
                    <div className="flex flex-wrap gap-3 sm:gap-4">
                        {filterOptions.map((option) => (
                            <button
                                key={option.value}
                                onClick={() => setSelectedSport(option.value as SportType)}
                                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                                    selectedSport === option.value
                                        ? 'bg-accent text-primary border-2 border-accent shadow-lg shadow-accent/50'
                                        : 'bg-card text-foreground border-2 border-border hover:border-accent'
                                }`}
                            >
                                <span className="hidden sm:inline">{option.label}</span>
                                <span className="sm:hidden">{option.icon}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Results Counter */}
                <div className="mb-6">
                    <p className="text-muted-foreground">
                        Showing {filteredEvents.length} {selectedSport === 'live' ? 'live' : selectedSport} matches
                    </p>
                </div>

                {/* Events Grid */}
                {filteredEvents.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredEvents.map((event) => (
                            <EventCard
                                key={event.eventId}
                                eventId={event.eventId}
                                league={event.league}
                                homeTeam={event.homeTeam}
                                awayTeam={event.awayTeam}
                                venue={event.venue}
                                date={event.date}
                                time={event.time}
                                homeWinOdds={event.homeWinOdds}
                                awayWinOdds={event.awayWinOdds}
                                drawOdds={event.drawOdds}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center py-16 bg-card rounded-lg border border-border">
                        <p className="text-muted-foreground text-xl mb-2">No matches available</p>
                        <p className="text-muted-foreground text-sm">Try selecting a different sport</p>
                    </div>
                )}
            </main>
        </div>
    );
};

export default SportsPage;
