import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { IoLocationOutline } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'
import { EditPage } from '../EditPage'
import { Alert } from '../Alert'

export default function DestinationDetailsCard({ destination }) {
    const { _id, destinationName, country, category, price, duration, departureDate, imageUrl, description } = destination

    return (
        <div className='max-w-[900px]  my-5 rounded-2xl w-full'>

            <div className='flex justify-end items-center gap-3'>
                <EditPage destination={destination}></EditPage>
                <Alert destination={destination}></Alert>
            </div>

            <div>
                <Image
                    className='w-full rounded-2xl mb-10'
                    src={imageUrl}
                    alt={destinationName}
                    width={600}
                    height={200}
                />
            </div>
            <div className='p-5 space-y-2'>
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
