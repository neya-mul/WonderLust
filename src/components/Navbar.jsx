import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full border bg-white">
            <div className="container mx-auto flex justify-between items-center p-5">

                <ul className='flex gap-4'>
                    <li><Link href='/'>Home</Link></li>
                    <li><Link href='/destinations'>Destination</Link></li>
                    <li><Link href='/booking'>My Bookings</Link></li>
                    <li><Link href='/add-destination'>Add Destination</Link></li>
                </ul>

                <Image
                    src={'/assets/Wanderlast.png'}
                    height={150}
                    width={150}
                    alt='logo'
                />

                <ul className='flex gap-4'>
                    <li><Link href='/profile'>Profile</Link></li>
                    <li><Link href='/signUp'>Sign Up</Link></li>
                    <li><Link href='/login'>Login</Link></li>
                </ul>

            </div>
        </nav>
    )
}
