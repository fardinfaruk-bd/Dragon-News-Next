import Image from 'next/image';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import Fb from "@/assets/fb.png"
import Instagram from "@/assets/instagram.png"
import Twitter from "@/assets/twitter.png"
import SwimmingImg from "@/assets/swimming.png"
import ClassImg from "@/assets/class.png"
import PlaygroundImg from "@/assets/playground.png"
import Bg from "@/assets/bg.png"

const RightSidebar = () => {
    return (
        <div className='space-y-4'>
            <h2 className='font-semibold text-xl text-[#403F3F]'>Login With</h2>
            <div className='space-y-2'>
                <button className='btn w-full border-blue-500 text-blue-500'><FcGoogle /> Login With Google</button>
                <button className=' btn w-full'><FaGithub /> Login With Github</button>
            </div>
            <div>
                <h2 className='font-semibold text-[#403F3F] text-xl mb-5'>Find Us On</h2>
                <div className='flex gap-2 items-center p-5 border border-[#E7E7E7] rounded-t-lg'>
                    <div className='w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center'>
                        <Image src={Fb} width={8} height={8} alt='Facebook Logo'></Image>
                    </div>
                    <p className='text-[#706F6F] font-medium'>Facebook</p>
                </div>

                <div className='flex gap-2 items-center p-5 border border-[#E7E7E7] '>
                    <div className='w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center'>
                        <Image src={Twitter} width={15} height={15} alt='Facebook Logo'></Image>
                    </div>
                    <p className='text-[#706F6F] font-medium'>Twitter</p>
                </div>

                <div className='flex gap-2 items-center p-5 border border-[#E7E7E7] rounded-b-lg'>
                    <div className='w-8 h-8 bg-[#F3F3F3] rounded-full flex justify-center items-center'>
                        <Image src={Instagram} width={15} height={15} alt='Facebook Logo'></Image>
                    </div>
                    <p className='text-[#706F6F] font-medium'>Instagram</p>
                </div>
            </div>
            <div className='bg-[#F3F3F3] p-3.75'>
                <h2 className='font-semibold text-[#403F3F] text-xl mb-5'>Q-Zone</h2>
                <div className='flex flex-col gap-10 items-center'>
                    <Image src={SwimmingImg} width={300} height={300} alt='Swimming Image' />
                    <Image src={ClassImg} width={300} height={300} alt='Class Image' />
                    <Image src={PlaygroundImg} width={300} height={300} alt='Playground Image' />
                </div>
            </div>
            <Image src={Bg} width={300} height={300} alt='Background Image' className='w-full'/>

            

        </div>
    );
};

export default RightSidebar;