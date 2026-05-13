'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from '@heroui/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { CgProfile, CgMenu, CgClose } from 'react-icons/cg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const router = useRouter()
    const { data: session } = authClient.useSession()
    const user = session?.user

    const logOutButton = async () => {
        await authClient.signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login")
                },
            },
        })
    }

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Destination', href: '/destinations' },
        { name: 'My Bookings', href: '/booking' },
        { name: 'Add Destination', href: '/add-destination' },
    ]

    return (
        <nav className="fixed top-0 left-0 w-full border-b bg-white z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                
                {/* Mobile Menu Toggle */}
                <button className="lg:hidden text-2xl transition-transform duration-300 active:scale-90" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <CgClose className="rotate-0 transition-all" /> : <CgMenu className="rotate-0 transition-all" />}
                </button>

                {/* Left Side: Desktop Links */}
                <ul className='hidden lg:flex gap-6 font-medium'>
                    {navLinks.map((link) => (
                        <li key={link.href}><Link href={link.href} className="hover:text-blue-600 transition-colors">{link.name}</Link></li>
                    ))}
                </ul>

                {/* Center: Logo */}
                <Link href="/">
                    <Image src={'/assets/Wanderlast.png'} height={120} width={120} alt='logo' priority />
                </Link>

                {/* Right Side: Auth/Profile */}
                <div className='flex gap-4 items-center'>
                    {user ? (
                        <div className="flex items-center gap-3">
                            <span className="hidden sm:inline">Hi, <strong>{user.name.split(' ')[0]}</strong></span>
                            {user.image && <Image src={user.image} alt='avatar' width={35} height={35} className='rounded-full border'/>}
                            <Button size="sm" color="danger" variant="flat" onClick={logOutButton} className="hidden sm:flex">Log Out</Button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-3">
                            <Link href='/login' className="hidden sm:block">Login</Link>
                            <Link href='/signUp'><Button size="sm" color="primary">Sign Up</Button></Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile Dropdown Menu with Transition */}
            <div className={`
                lg:hidden bg-white border-b overflow-hidden transition-all duration-300 ease-in-out
                ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}>
                <div className="p-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="hover:pl-2 transition-all">{link.name}</Link>
                    ))}
                    <hr />
                    {user ? (
                        <>
                            <Link href='/profile' onClick={() => setIsOpen(false)}>Profile</Link>
                            <Button color="danger" onClick={logOutButton}>Log Out</Button>
                        </>
                    ) : (
                        <Link href='/login' onClick={() => setIsOpen(false)}>Login</Link>
                    )}
                </div>
            </div>
        </nav>
    )
}