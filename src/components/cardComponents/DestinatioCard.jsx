import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { IoLocationOutline } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'

export default function DestinationCard({ destination }) {
  const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination
  return (
    <div className='max-w-96 mx-auto border'>
      <Image src={imageUrl}
        className='min-h-[300px] border'
        alt={destinationName}
        width={400}
        height={400}
      />

      <div className='p-2 space-y-2'>
        <p className='flex items-center'><IoLocationOutline /> {country}
        </p>
        <div className='flex justify-between'>
          <h1 className='text-3xl'>{destinationName}</h1>
          <p><span className='text-2xl
          '>{price}</span>/person</p>
        </div>

        <p>{duration}</p>
        <Link href={`/destinations/${_id}`}>
          <button className="flex items-center gap-2 text-blue-400">
            Book Now
            <MdArrowOutward />
          </button>
        </Link>
      </div>

    </div>
  )
}
