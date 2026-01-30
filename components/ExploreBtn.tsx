'use client'

import React from 'react'
import Image from 'next/image'

const ExploreBtn = () => {
  return (
    <button type='button' id="explore-btn" className='mt-7 mx-auto'
    onClick={()=> console.log('Explore Btn Clicked')}>
        <a href='#events'>
            Upcoming games
            <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24} />
        </a>

    </button>
  )
}

export default ExploreBtn