import Link from 'next/link';
import React from 'react';

const RegisterPage = () => {
    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-10 rounded-xl bg-white'>
                <h1 className='font-semibold text-[#403F3F] text-[30px] text-center p-10 '>Register your account</h1>
                <hr className='border-[#c9bebe] mb-6'/>
                <form className='space-y-4'>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Your Name</legend>
                        <input type="text" className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Photo URL</legend>
                        <input type="email" className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your a Photo URL" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Email</legend>
                        <input type="email" className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Email Address" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Password</legend>
                        <input type="email" className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter a Password" />
                    </fieldset>
                    <button className='btn bg-[#403F3F] text-white w-full text-xl p-6'>Log In</button>
                    <div className='flex justify-center items-center gap-1 mb-5'>
                        <p className='text-[#706F6F]'>Don't have an account?</p>
                        <Link href={"/register"}>
                        <button className='bg-linear-to-r from-[#FF8C47] to-[#F75B5F] bg-clip-text text-transparent font-semibold cursor-pointer'>Register</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;