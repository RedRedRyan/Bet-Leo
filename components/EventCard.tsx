'use client'
import React from 'react'
import Link from "next/link"

import Image from 'next/image'
import { leagueDisplayNames, leagueLogos } from '@/libs/constants'
import { useBetStore } from '@/libs/betStore'

interface Props {
    eventId: string;
    league: string;
    homeTeam: {
        name: string;
        symbol: string;
        image: string;
    };
    awayTeam: {
        name: string;
        symbol: string;
        image: string;
    };
    venue: string;
    date: string;
    time: string;
    homeWinOdds: number;
    awayWinOdds: number;
    drawOdds: number | null;
    eventImage?: string;
    isClickable: boolean; // Declare the isClickable variable
}

const EventCard = ({
                       eventId,
                       league,
                       homeTeam,
                       awayTeam,
                       venue,
                       date,
                       time,
                       homeWinOdds,
                       awayWinOdds,
                       drawOdds,
                       eventImage,
                       isClickable
                   }: Props) => {
    // Get bet store functions
    const { addBet, removeBet, isBetSelected, bets } = useBetStore();

    // Format date for display
    const formatDate = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        return dateObj.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    // Get league display name
    const leagueName = leagueDisplayNames[league] || league;

    // Get league logo
    const leagueLogo = leagueLogos[league] || '/images/leagues/default-logo.png';

    // Check if any outcome is selected for this event
    const selectedBet = bets.find((b) => b.eventId === eventId);

    // Get selected outcome name
    const getSelectedOutcomeName = () => {
        if (!selectedBet) return null;
        if (selectedBet.selectedTeam === 'home') return homeTeam.name;
        if (selectedBet.selectedTeam === 'away') return awayTeam.name;
        return 'Draw';
    };

    // Handle bet selection (enforces single selection per event)
    const handleBetSelection = (team: 'home' | 'away' | 'draw', odds: number) => {
        const isCurrentSelection = selectedBet?.selectedTeam === team;

        if (isCurrentSelection) {
            // Deselect the current selection
            removeBet(eventId, team);
        } else {
            // Add new selection (automatically removes previous selection for this event)
            addBet({
                eventId,
                league: leagueName,
                homeTeam: homeTeam.name,
                awayTeam: awayTeam.name,
                selectedTeam: team,
                odds
            });
        }
    };

    return (
        <div className="bg-blue rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* White Header with rounded corners */}
            <div className="bg-yellow rounded-lg rounded-t-none p-4 flex items-center justify-between gap-4 min-h-20">
                {/* League Info */}
                <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 flex-shrink-0">
                        <Image
                            src={leagueLogo || "/placeholder.svg"}
                            alt={leagueName}
                            fill
                            className="object-contain"
                            sizes="40px"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold text-blue-600 uppercase">
                            {leagueName}
                        </span>
                        <span className="text-xs text-gray-600">
                            {formatDate(date)} • {time}
                        </span>
                    </div>
                </div>

                {/* Right Section - Event Image and Selection Summary */}
                <div className="flex items-center gap-3 ml-auto">
                    {/* Event Image */}
                    {eventImage && (
                        <div className="relative w-16 h-16 flex-shrink-0 hidden sm:block">
                            <Image
                                src={eventImage || "/placeholder.svg"}
                                alt={`${homeTeam.name} vs ${awayTeam.name}`}
                                fill
                                className="object-cover rounded"
                                sizes="64px"
                            />
                        </div>
                    )}

                    {/* Selection Summary - Always takes up space */}
                    <div className="min-w-32 flex flex-col items-end gap-1">
                        {selectedBet ? (
                            <>
                                <p className="text-xs text-gray-600 font-medium">Selected</p>
                                <p className="text-sm font-bold text-blue-600">{getSelectedOutcomeName()}</p>
                                <p className="text-xs text-gray-600">@ {selectedBet.odds.toFixed(2)}</p>
                            </>
                        ) : (
                            <p className="text-xs text-gray-400 italic">No selection</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Blue Content Area */}
            <div className="p-5 text-white">
                {/* Teams Display */}
                <div className="flex items-center justify-between mb-5 gap-2">
                    {/* Home Team */}
                    <div className="flex flex-col items-center flex-1">
                        <div className="relative w-14 h-14 mb-2">
                            <Image
                                src={homeTeam.image || "/placeholder.svg"}
                                alt={homeTeam.name}
                                fill
                                className="object-contain"
                                sizes="56px"
                            />
                        </div>
                        <p className="text-xs font-semibold text-center line-clamp-2">{homeTeam.name}</p>
                        <p className="text-[10px] text-blue-200 mt-1">{homeTeam.symbol}</p>
                    </div>

                    {/* VS Badge */}
                    <div className="flex flex-col items-center gap-2">
                        <div className="px-2 py-1 rounded-full bg-white/20 text-white font-bold text-xs">
                            VS
                        </div>
                        <p className="text-[10px] text-blue-200 text-center max-w-12">{venue}</p>
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center flex-1">
                        <div className="relative w-14 h-14 mb-2">
                            <Image
                                src={awayTeam.image || "/placeholder.svg"}
                                alt={awayTeam.name}
                                fill
                                className="object-contain"
                                sizes="56px"
                            />
                        </div>
                        <p className="text-xs font-semibold text-center line-clamp-2">{awayTeam.name}</p>
                        <p className="text-[10px] text-blue-200 mt-1">{awayTeam.symbol}</p>
                    </div>
                </div>

                {/* Odds Buttons - Single Selection */}
                <div className={`grid ${drawOdds !== null ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mb-4`}>
                    <button
                        onClick={() => handleBetSelection('home', homeWinOdds)}
                        className={`rounded-lg p-3 text-center transition-all duration-200 cursor-pointer font-semibold text-sm ${
                            selectedBet?.selectedTeam === 'home'
                                ? 'bg-white text-blue-600 ring-2 ring-white/50 shadow-lg'
                                : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
                        }`}
                        aria-label={`Place bet on ${homeTeam.name}`}
                        title={selectedBet?.selectedTeam === 'home' ? 'Click to deselect' : 'Click to select'}
                    >
                        <div className="text-xs opacity-90">Home</div>
                        <div className="text-lg font-bold">{homeWinOdds.toFixed(2)}</div>
                        {selectedBet?.selectedTeam === 'home' && (
                            <div className="text-xs mt-1">✓</div>
                        )}
                    </button>

                    {drawOdds !== null && (
                        <button
                            onClick={() => handleBetSelection('draw', drawOdds)}
                            className={`rounded-lg p-3 text-center transition-all duration-200 cursor-pointer font-semibold text-sm ${
                                selectedBet?.selectedTeam === 'draw'
                                    ? 'bg-white text-blue-600 ring-2 ring-white/50 shadow-lg'
                                    : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
                            }`}
                            aria-label="Place bet on draw"
                            title={selectedBet?.selectedTeam === 'draw' ? 'Click to deselect' : 'Click to select'}
                        >
                            <div className="text-xs opacity-90">Draw</div>
                            <div className="text-lg font-bold">{drawOdds.toFixed(2)}</div>
                            {selectedBet?.selectedTeam === 'draw' && (
                                <div className="text-xs mt-1">✓</div>
                            )}
                        </button>
                    )}

                    <button
                        onClick={() => handleBetSelection('away', awayWinOdds)}
                        className={`rounded-lg p-3 text-center transition-all duration-200 cursor-pointer font-semibold text-sm ${
                            selectedBet?.selectedTeam === 'away'
                                ? 'bg-white text-blue-600 ring-2 ring-white/50 shadow-lg'
                                : 'bg-white/20 text-white hover:bg-white/30 border border-white/20'
                        }`}
                        aria-label={`Place bet on ${awayTeam.name}`}
                        title={selectedBet?.selectedTeam === 'away' ? 'Click to deselect' : 'Click to select'}
                    >
                        <div className="text-xs opacity-90">Away</div>
                        <div className="text-lg font-bold">{awayWinOdds.toFixed(2)}</div>
                        {selectedBet?.selectedTeam === 'away' && (
                            <div className="text-xs mt-1">✓</div>
                        )}
                    </button>
                </div>


            </div>
        </div>
    );
}

export default EventCard
