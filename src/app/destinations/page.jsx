import DestinationCard from '@/components/cardComponents/DestinatioCard';
import React from 'react'

export default async function Destinations() {
    const res = await fetch('http://localhost:5000/destination')
    const destinations = await res.json()
    console.log(destinations);

    return (
        <div>
            <div>
                <h1>Explore All Destinations</h1>
                <p>Find your perfect travel experience from our curated collection</p>
            </div>

            <div>
                {
                    destinations.map((destination, ind) => <DestinationCard key={ind} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    )
}
