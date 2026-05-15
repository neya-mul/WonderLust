import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'
import { CancelAlert } from '../CancelAlert'

export default function MyBookingCard({ booking }) {
    // console.log(booking);
    
   
    return (
        <div className='flex items-center border justify-between p-6'>
            <div className='flex items-center  gap-4'>
                <div>
                    <Image
                        className='max-w-[400px] w-full'
                        width={500}
                        height={400}
                        alt={booking.destinationName}
                        src={booking.imageUrl} />
                </div>

                <div>
                    <h1 className='text-6xl'>{booking.destinationName}</h1>
                    <p>Booking Id: {booking._id}</p>
                    <p>Departure Date: {booking.departureDate}</p>
                    <p className='text-2xl'>${booking.price}</p>
                </div>
            </div>

            <div>
              <CancelAlert bookingId={booking._id} booking={booking}></CancelAlert>
            </div>

        </div>
    )
}
