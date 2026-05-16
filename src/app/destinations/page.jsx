import DestinationCard from '@/components/cardComponents/DestinatioCard';
import React from 'react'

export default async function Destinations() {
    const res = await fetch('http://localhost:5000/destination')
    const destinations = await res.json()
    console.log(destinations);

    return (
        <div className='container mx-auto my-25'>
            <div className='my-10'>
                <h1 className='text-6xl'>Explore All Destinations</h1>
                <p>Find your perfect travel experience from our curated collection</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    destinations.map((destination, ind) => <DestinationCard key={ind} destination={destination}></DestinationCard>)
                }
            </div>
        </div>
    )
}
