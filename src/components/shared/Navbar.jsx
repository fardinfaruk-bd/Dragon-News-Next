"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AvatarImage from "@/assets/user.png"
import NavLink from './NavLink';
import { authClient } from '@/lib/auth-client';

const Navbar = () => {
    const { data: session, isPending } = authClient.useSession()
    const user = session?.user

    console.log(user, "session");

    return (
        <div className='flex justify-between items-center container mx-auto mt-6'>
            <div>

            </div>
            <ul className=' flex gap-6 text-[#706F6F]'>
                <li><NavLink href="/">Home</NavLink></li>
                <li><NavLink href="/about">About</NavLink></li>
                <li><NavLink href="/career">Career</NavLink></li>
            </ul>
            {isPending ? <div><span className="loading loading-dots loading-sm"></span></div> :
                user ? <div className='flex gap-2 justify-center items-center'>
                    <h2>Welcome! {user?.name}</h2>
                    <Image src={user?.image || AvatarImage} width={30} height={30} className='rounded-full' alt='User Avatar' />
                    <div onClick={async() => await authClient.signOut()} className='btn bg-red-500  text-white px-9 font-semibold text-xl'>Logout</div>
                </div> :
                    <button className='btn bg-[#403F3F] text-white px-9 font-semibold text-xl'><Link href={"/login"}>Login</Link></button>}
        </div>
    );
};

export default Navbar;