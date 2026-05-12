import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'

export default function DestinationDetailsCard({ destination }) {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination

    return (
        <div className='max-w-7xl'>
            <div>
                <Image
                    src={imageUrl}
                    alt={destinationName}
                    width={600}
                    height={300}
                />
            </div>
            <div className='p-2 space-y-2'>
                <p className='flex items-center'><IoLocationOutline /> {country}
                </p>
                <div className='flex justify-between'>
                    <h1 className='text-3xl'>{destinationName}</h1>
                    <p><span className='text-2xl
          '>{price}</span>/person</p>
                </div>

                <p>{duration}</p>
                <div>
                    <h1 className='text-2xl'>Overview</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
