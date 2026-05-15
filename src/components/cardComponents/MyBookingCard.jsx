import { Button } from '@heroui/react'
import Image from 'next/image'
import React from 'react'

export default function MyBookingCard({ booking }) {
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
                    <p>Departure Date: {booking.departureDate}</p>
                    <p className='text-2xl'>${booking.price}</p>
                </div>
            </div>

            <div>
                <Button variant='danger-soft' className='rounded-xl'>Cancel</Button>
            </div>

        </div>
    )
}
