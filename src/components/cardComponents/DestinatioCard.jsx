import Image from 'next/image'
import React from 'react'

export default function DestinationCard({destination}) {
  const {destinationName, country, category, price, duration, departureDate, imageUrl, description} = destination
  return (
    <div>
      <Image src={imageUrl} 
      alt={destinationName}
      width={400}
      height={400}
      />
      
    </div>
  )
}
