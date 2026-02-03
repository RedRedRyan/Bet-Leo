import Link from 'next/link'
import Image from 'next/image'
import ConnectButton from '@/components/connect-button'

export default function Home() {
    return (
        <main>

                <section id="hero">
                    <div className="hero-content max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
                            {/* Hero Image - Left Column (1/2 width) */}
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


                                </div>
                            </div>
                            {/* Hero Text - Right Column (1/2 width) */}
                            <div className="w-full lg:w-1/2">
                                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-schibsted-grotesk font-bold text-yellow">
                                    Anonymous Bets <br className="hidden sm:block"/> Infinite Wins
                                </h1>

                                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                    <Link
                                        href="/sports"
                                        className="inline-flex items-center justify-center border-2 border-yellow bg-black text-yellow rounded-full px-8 py-4 cursor-pointer transition-all hover:bg-yellow hover:text-black font-semibold text-center"
                                    >
                                        Find Games
                                    </Link>

                                    <ConnectButton />

                                </div>
                            </div>


                        </div>
                    </div>
                </section>

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
    )
}