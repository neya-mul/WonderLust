import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Navbar() {
    return (
        <nav className='flex justify-between p-5 border '>
            <ul className='flex gap-4'>
                <li>  <Link href='/'>Home</Link> </li>
                <li>  <Link href='/destination'>Destination</Link> </li>
                <li>  <Link href='/booking'>My Bookings</Link> </li>
                <li>  <Link href='/admin'>Admin</Link> </li>
            </ul>

            <div>
                <Image
                    src={'/assets/Wanderlast.png'}
                    height={150}
                    width={150}
                    alt='logo'
                />
            </div>

     
                <ul className='flex gap-4'>
                    <li>  <Link href='/profile'>Profile</Link> </li>
                    <li>  <Link href='/signIn'>Sign In</Link> </li>
                    <li>  <Link href='/login'>Login</Link> </li>
    
                </ul>
       
        </nav>
    )
}
