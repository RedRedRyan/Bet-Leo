'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { leagueLogos, leagueDisplayNames, leagueColors } from '@/libs/constants'
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
                       drawOdds
                   }: Props) => {
    // Get bet store functions
    const { addBet, removeBet, isBetSelected } = useBetStore();

    // Format date for display
    const formatDate = (dateStr: string) => {
        const dateObj = new Date(dateStr);
        return dateObj.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric'
        });
    };

    // Get league logo
    const leagueLogo = leagueLogos[league] || '/images/leagues/default-logo.png';

    // Get league display name
    const leagueName = leagueDisplayNames[league] || league;

    // Get league colors
    const leagueColor = leagueColors[league] || { bg: 'bg-gray-600', text: 'text-white' };

    // Handle bet selection
    const handleBetSelection = (e: React.MouseEvent, team: 'home' | 'away' | 'draw', odds: number) => {
        e.preventDefault(); // Prevent navigation to event details

        const isSelected = isBetSelected(eventId, team);

        if (isSelected) {
            removeBet(eventId, team);
        } else {
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
        <Link
            href={`/events/${eventId}`}
            className="block bg-gray-900 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 overflow-hidden group"
        >
            <div className="p-4">
                {/* League Header with Logo */}
                <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                        <div className="relative w-8 h-8">
                            <Image
                                src={leagueLogo}
                                alt={leagueName}
                                fill
                                className="object-contain"
                                sizes="32px"
                            />
                        </div>
                        <div className="flex flex-col">
                            <span className={`text-xs font-bold ${leagueColor.text}`}>
                                {leagueName}
                            </span>
                            <div className="flex items-center gap-1">
                                <div className={`w-2 h-2 rounded-full ${leagueColor.bg}`}></div>
                                <span className="text-xs text-gray-400">
                                    {formatDate(date)} • {time}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Teams */}
                <div className="flex items-center justify-between mb-6">
                    {/* Home Team */}
                    <div className="flex flex-col items-center w-2/5">
                        <div className="relative w-20 h-20 mb-2">
                            <Image
                                src={homeTeam.image}
                                alt={homeTeam.name}
                                fill
                                className="object-contain"
                                sizes="80px"
                            />
                        </div>
                        <p className="text-white font-semibold text-sm text-center line-clamp-2">{homeTeam.name}</p>
                        <p className="text-gray-400 text-xs mt-1">{homeTeam.symbol}</p>
                    </div>

                    {/* VS */}
                    <div className="flex flex-col items-center w-1/5">
                        <div className={`px-3 py-1 rounded-full ${leagueColor.bg} ${leagueColor.text} font-bold text-sm mb-2`}>
                            VS
                        </div>
                        <div className="text-xs text-gray-500 text-center line-clamp-2">{venue}</div>
                    </div>

                    {/* Away Team */}
                    <div className="flex flex-col items-center w-2/5">
                        <div className="relative w-20 h-20 mb-2">
                            <Image
                                src={awayTeam.image}
                                alt={awayTeam.name}
                                fill
                                className="object-contain"
                                sizes="80px"
                            />
                        </div>
                        <p className="text-white font-semibold text-sm text-center line-clamp-2">{awayTeam.name}</p>
                        <p className="text-gray-400 text-xs mt-1">{awayTeam.symbol}</p>
                    </div>
                </div>

                {/* Odds */}
                <div className={`grid ${drawOdds !== null ? 'grid-cols-3' : 'grid-cols-2'} gap-2 mb-4`}>
                    <button 
                        onClick={(e) => handleBetSelection(e, 'home', homeWinOdds)}
                        className={`rounded-lg p-3 text-center hover:opacity-90 transition-all cursor-pointer
                            ${isBetSelected(eventId, 'home') 
                                ? 'bg-blue-700 text-white ring-2 ring-yellow-400' 
                                : `${leagueColor.bg} ${leagueColor.text}`}`}
                    >
                        <div className="text-xs mb-1 opacity-90">Home Win</div>
                        <div className="font-bold text-xl">{homeWinOdds.toFixed(2)}</div>
                    </button>

                    {drawOdds !== null && (
                        <button 
                            onClick={(e) => handleBetSelection(e, 'draw', drawOdds)}
                            className={`rounded-lg p-3 text-center hover:opacity-90 transition-all cursor-pointer
                                ${isBetSelected(eventId, 'draw') 
                                    ? 'bg-blue-700 text-white ring-2 ring-yellow-400' 
                                    : `${leagueColor.bg} ${leagueColor.text}`}`}
                        >
                            <div className="text-xs mb-1 opacity-90">Draw</div>
                            <div className="font-bold text-xl">{drawOdds.toFixed(2)}</div>
                        </button>
                    )}

                    <button 
                        onClick={(e) => handleBetSelection(e, 'away', awayWinOdds)}
                        className={`rounded-lg p-3 text-center hover:opacity-90 transition-all cursor-pointer
                            ${isBetSelected(eventId, 'away') 
                                ? 'bg-blue-700 text-white ring-2 ring-yellow-400' 
                                : `${leagueColor.bg} ${leagueColor.text}`}`}
                    >
                        <div className="text-xs mb-1 opacity-90">Away Win</div>
                        <div className="font-bold text-xl">{awayWinOdds.toFixed(2)}</div>
                    </button>
                </div>


            </div>
        </Link>
    )
}

export default EventCard
