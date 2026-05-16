'use client'
import { authClient } from '@/lib/auth-client'
import { Button, DateField, Label } from '@heroui/react'
import React, { useState } from 'react'

export default function BookingCard({ destination }) {
  const [departureDate, setDepartureDate] = useState(null)
  const { _id, destinationName, country, category, price, duration, imageUrl, description } = destination
  // console.log(new Date(departureDate));
  const { data: session } = authClient.useSession()
  const user = session?.user
  // console.log(user);
  const bookingButton = async () => {
    const info = {
      userId: user?.id,
      userName: user?.name,
      userEmail: user?.email,
      departureDate: new Date(departureDate),
      destinationName,
      country,
      category,
      price,
      duration,
      description,
      _id,
      imageUrl
    }

    const { data: tokenData } = await authClient.token()
    // console.log(tokenData)

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${tokenData?.token}`
      },
      body: JSON.stringify(info)
    })
    const data = await res.json()
    // console.log(data);

  }




  return (
    <div>

      <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
        <Label>Date</Label>
        <DateField.Group>
          <DateField.Input>{(segment) => <DateField.Segment segment={segment} />}</DateField.Input>
        </DateField.Group>
      </DateField>

      <Button onClick={bookingButton} className='w-full rounded-2xl mt-5'>Book Now</Button>
    </div>
  )
}
