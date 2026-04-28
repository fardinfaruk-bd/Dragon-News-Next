import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import AvatarImage from "@/assets/user.png"

const Navbar = () => {
    return (
        <div className='flex justify-between items-center container mx-auto mt-6'>
            <div>

            </div>
            <ul className=' flex gap-6 text-[#706F6F]'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/career">Career</Link></li>
            </ul>
            <div className='flex gap-2 justify-center items-center'>
                <Image src={AvatarImage} width={30} height={30} alt='User Avatar'/>
                <button className='btn bg-[#403F3F] text-white px-9 font-semibold text-xl'><Link href={"/login"}>Login</Link></button>
            </div>
        </div>
    );
};

export default Navbar;