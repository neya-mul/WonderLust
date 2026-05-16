import DestinationDetailsCard from '@/components/cardComponents/DestinationDetailsCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

export default async function Details({ params }) {
  const { id } = await params
  const { token } = await auth.api.getToken({
    headers: await headers()
  })

  // console.log(token);

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/destination/${id}`, {
    headers: {
      authorization: `Bearer ${token}`
    }
  })
  const destination = await res.json()
  // console.log(destination);



  return (
    <div className='min-h-screen border pt-20 flex justify-center items-center'>

      <DestinationDetailsCard destination={destination}></DestinationDetailsCard>
    </div>
  )
}
