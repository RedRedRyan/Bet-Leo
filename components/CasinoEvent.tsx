'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { CasinoGame } from '@/libs/constants'

interface CasinoEventProps {
    game: CasinoGame;
    isClickable?: boolean;
}

const CasinoEvent: React.FC<CasinoEventProps> = ({ game, isClickable = true }) => {
    const gameTypeColors: Record<string, string> = {
        slot: 'bg-purple-600/20 text-purple-400 border-purple-600',
        table: 'bg-blue-600/20 text-blue-400 border-blue-600',
        ai: 'bg-accent/20 text-accent border-accent',
    };

    const gameTypeName: Record<string, string> = {
        slot: 'Slot Game',
        table: 'Table Game',
        ai: 'AI Game',
    };

    const cardContent = (
        <div className="bg-card rounded-xl border border-border overflow-hidden h-full flex flex-col hover:border-accent transition-all duration-300">
            <div className="relative w-full h-40 overflow-hidden bg-card">
                <Image
                    src={game.image || "/placeholder.svg"}
                    alt={game.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className="p-4 flex-1 flex flex-col">
                <div className="mb-3">
                    <span className={`inline-block px-2 py-1 rounded text-xs font-semibold ${gameTypeColors[game.type]}`}>
                        {gameTypeName[game.type]}
                    </span>
                </div>

                <h3 className="text-foreground font-bold text-lg mb-2 line-clamp-2">
                    {game.name}
                </h3>

                <p className="text-muted-foreground text-sm text-pretty flex-1">
                    {game.description}
                </p>

                <button
                    className="w-full mt-4 bg-primary text-accent font-semibold py-2 rounded-lg hover:bg-primary/80 transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Play game:', game.id);
                    }}
                >
                    Play Now
                </button>
            </div>
        </div>
    );

    if (isClickable) {
        return (
            <Link href={`/casino/${game.id}`}>
                {cardContent}
            </Link>
        );
    }

    return cardContent;
};

export default CasinoEvent;
