import React from 'react';
import HeaderImage from '@/assets/logo.png';
import Image from 'next/image';
import { format } from 'date-fns';

const Header = () => {
    return (
        <div className='text-center py-8 space-y-4'>
            <Image src={HeaderImage} alt="Logo" width={300} height={200} className='mx-auto' />
            <p className='text-[#706F6F]'>Journalism Without Fear or Favour</p>
            <div className='flex justify-center font-medium gap-2'>
                <p className='text-[#403F3F]'>{format(new Date(), "EEEE,")}</p>
                <p className='text-[#706F6F]'>{format(new Date(), "MMMM dd, yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;