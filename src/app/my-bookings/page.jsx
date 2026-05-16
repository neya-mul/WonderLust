// import { auth } from '@/lib/auth';
import MyBookingCard from '@/components/cardComponents/MyBookingCard';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react'

export default async function MyBooking() {


    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    const user = session?.user
    // console.log(user);
    
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${user?.id}`)
    const bookings = await res.json()
    // console.log(data);



    return (
        <div className='my-10 pt-25 container mx-auto px-10'>
            <div className='text-4xl text-center'>
                My Bookings
            </div>
            <div className='space-y-10'>
                {
                    bookings.map((booking, ind)=> <MyBookingCard booking={booking} key={ind}></MyBookingCard>)
                }

            </div>

        </div>
    )
}
