"use client"
import Link from 'next/link'
import Image from 'next/image'
import ConnectButton from '@/components/connect-button'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { SplitText } from "gsap/all";


export default function Home() {

    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(()=>{
        const heroSplit = new SplitText(".subtitle", {
            type: 'lines',
        })
        gsap.from(heroSplit.lines, {
            yPercent: -200,
            duration: 1.5,
            ease: "power1.out",
            stagger: 0.06,
        });


    });


    return (
        <main>

                <section id="hero">
                    <div className={'hero-grid'}>

                        <div className='md:col-span-3'>
                            <h1 className="subtitle">
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
                        <div className='md:col-span-3'>
                            <div>  {/* Adjust min-h as needed */}
                                <img
                                    src="/images/keeper.png"
                                    alt="Beat the odds - Hero image"
                                    sizes="100vw"  // Important for responsive images
                                />
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