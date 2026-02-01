import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import ConnectButton from './connect-button'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className='logo'>
            <Image src="/icons/logo.png" alt="Bet Leo Logo" width={36} height={36} />
            </Link>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/sports'>Sports</Link>
                <Link href='/casino'>Casino</Link>
                <Link href='/wallet'>Wallet</Link>
                <ConnectButton />
            </ul>
        </nav>
    </header>
  )
}

export default Navbar