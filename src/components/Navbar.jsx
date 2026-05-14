'use client'
import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgProfile } from 'react-icons/cg'

export default function Navbar() {
    const logOutButton = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login"); // redirect to login page
                },
            },
        });

    }
    const { data: session } = authClient.useSession()
    // console.log(session);
    const user = session?.user
    // console.log(user)


    return (
        <nav className="fixed top-0 left-0 z-90 w-full border bg-white">
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

                <ul className='flex gap-4 items-center'>
                    {user && <Image src={user.image} alt='name' width={50} height={50} className='rounded-full'/>}
                    {user && <span>Hello :<strong>{user.name}</strong> </span>}
                    {user && <li><Link href='/profile'>Profile</Link></li>}
                    {!user && <li><CgProfile /></li>}
                    {!user && <li><Link href='/signUp'>Sign Up</Link></li>}
                    {!user && <li><Link href='/login'>Login</Link></li>}
                    {user && <Link href='/login'><Button onClick={logOutButton}>Log Out</Button></Link>}

                </ul>

            </div>
        </nav>
    )
}
