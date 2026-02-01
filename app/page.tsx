import Link from 'next/link'
import Image from 'next/image'
import ConnectButton from '@/components/connect-button'

export default function Home() {
    return (
        <div className="min-h-screen bg-background">
            <main className="w-full">
                {/* Hero Section - Two Column Layout */}
                <section id="hero" className="relative w-full min-h-screen flex items-center bg-black">
                    <div className="hero-content max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                            {/* Hero Text - Left Column (1/2 width) */}
                            <div className="w-full lg:w-1/2">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-schibsted-grotesk font-bold text-yellow">
                                    Anonymous Bets <br className="hidden sm:block"/> Infinite Wins
                                </h1>
                                <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl">
                                    Place private bets on football, basketball, cricket and casino games using Aleo's zero-knowledge technology. Your bets, your business.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <Link
                                        href="/sports"
                                        className="inline-flex items-center justify-center border-2 border-yellow bg-black text-yellow rounded-full px-8 py-4 cursor-pointer transition-all hover:bg-yellow hover:text-black font-semibold text-center"
                                    >
                                        Explore Events
                                    </Link>
                                    
                                    <ConnectButton />
                                    
                                </div>
                            </div>

                            {/* Hero Image - Right Column (1/2 width) */}
                            <div className="w-full lg:w-1/2 relative">
                                <div className="relative aspect-square lg:aspect-auto lg:h-[500px]">
                                    <Image
                                        src="/images/mpira.png"
                                        alt="Beat the odds - Hero image"
                                        fill
                                        className="object-contain object-center"
                                        priority
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    {/* Floating Button Overlay */}

                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features Grid */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-12 text-center">
                        Why Choose BetLeo?
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: 'Private Betting',
                                description: 'Zero-knowledge proofs ensure complete anonymity. No one sees your bets.',
                                icon: '🛡️'
                            },
                            {
                                title: 'Live Sports Betting',
                                description: 'Bet on football, basketball, cricket and more with real-time odds.',
                                icon: '⚽'
                            },
                            {
                                title: 'Diverse Casino Games',
                                description: 'AI-powered slots, roulette, blackjack with private outcomes.',
                                icon: '🎰'
                            },
                            {
                                title: 'Secure Wallet',
                                description: 'Aleo-powered wallet with private transactions and withdrawals.',
                                icon: '💰'
                            },
                            {
                                title: 'Infinite Wins',
                                description: 'No artificial limits on winnings. Your potential is unlimited.',
                                icon: '📈'
                            },
                            {
                                title: 'Fast & Private',
                                description: 'Instant settlements with complete transaction privacy.',
                                icon: '⚡'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-card border border-border rounded-xl p-8 hover:border-yellow hover:shadow-lg hover:shadow-yellow/10 transition-all duration-300"
                            >
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                                <p className="text-muted-foreground text-pretty">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Stats Section */}
                <section className="bg-black border-y border-gray-800 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { number: '300+', label: 'Teams' },
                                { number: '10+', label: 'Leagues' },
                                { number: '3', label: 'Sports' },
                                { number: '∞', label: 'Win Potential' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center">
                                    <div className="text-4xl md:text-5xl font-bold text-yellow mb-2">{stat.number}</div>
                                    <div className="text-gray-400">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
                        Ready to Bet Privately?
                    </h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
                        Join the future of private betting. No personal data collected. No betting patterns exposed.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/sports"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-yellow text-black font-bold text-lg hover:bg-yellow/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow/20"
                        >
                            Start Betting Now 🎯
                        </Link>
                        <Link
                            href="/wallet"
                            className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-blue text-blue font-bold text-lg hover:bg-blue hover:text-white transition-all duration-300"
                        >
                            Connect Aleo Wallet
                        </Link>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border bg-card mt-16 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-muted-foreground">&copy; 2024 BetLeo. All rights reserved.</p>
                        <div className="flex gap-6">
                            <a href="#" className="text-muted-foreground hover:text-yellow transition-colors">Privacy</a>
                            <a href="#" className="text-muted-foreground hover:text-yellow transition-colors">Terms</a>
                            <a href="#" className="text-muted-foreground hover:text-yellow transition-colors">Contact</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}