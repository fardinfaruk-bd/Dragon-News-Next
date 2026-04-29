"use client"
import { is } from 'date-fns/locale';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
    const pathname = usePathname();
    console.log("Pathname is", pathname);
    const isActive = pathname === href;
    return (
        <Link href={href} className={`font-semibold text-xl ${isActive ? "text-[#403F3F] border-b-2 border-[#D72050]"  : "text-[#706F6F]"}`}>
            {children}
        </Link>
    );
};

export default NavLink;