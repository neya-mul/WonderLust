import DestinationDetailsCard from '@/components/cardComponents/DestinationDetailsCard';
import React from 'react'

export default async function Details({ params }) {
  const { id } = await params
  const res = await fetch(`http://localhost:5000/destination/${id}`,{
    headers: {
      authorization: 'logged in'
    }
  })
  const destination = await res.json()
  console.log(destination);



  return (
    <div className='min-h-screen border pt-20 flex justify-center items-center'>

      <DestinationDetailsCard destination={destination}></DestinationDetailsCard>
    </div>
  )
}
