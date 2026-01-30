import EventCard from '@/components/EventCard'
import ExploreBtn from '@/components/ExploreBtn'
import React from 'react'
import {upcomingMatches} from "@/libs/constants";



const page = () => {
  return (
<section>
  <h1 className='text-center mt-20'>Beat the odds <br/> Anonymously</h1>
  <p className='text-center mt-5'>Football, Basketball and Casino</p>
  <ExploreBtn/>
  <div className='mt-20 space-y-7'>
    <h3>Upcoming games</h3>
    <ul className='events'>
      {upcomingMatches.map((match)=>(
        <li key={match.eventId}>
          <EventCard
              key={match.eventId}
              eventId={match.eventId}
              league={match.league}
              homeTeam={{
                name: match.homeTeam.name,
                symbol: match.homeTeam.symbol,
                image: match.homeTeam.image
              }}
              awayTeam={{
                name: match.awayTeam.name,
                symbol: match.awayTeam.symbol,
                image: match.awayTeam.image
              }}
              venue={match.venue}
              date={match.date}
              time={match.time}
              homeWinOdds={match.homeWinOdds}
              awayWinOdds={match.awayWinOdds}
              drawOdds={match.drawOdds}
          />
        </li>
        
        ))}

    </ul>

  </div>
</section>
  )
}
 
export default page