import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <header>
        <nav>
            <Link href="/" className='logo'>
            <Image src="/icons/logo.png" alt="Bet Leo Logo" width={24} height={24} />
            </Link>
            <ul>
                <Link href='/'>Home</Link>
                <Link href='/sports'>Sports</Link>
                <Link href='/casino'>Casino</Link>
                <Link href='/wallet'>Wallet</Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar