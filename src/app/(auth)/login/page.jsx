"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const { register, handleSubmit, formState: { errors }}= useForm();

    const handleLogin = (data) => {
        console.log(data);

    }

    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-10 rounded-xl bg-white'>
                <h1 className='font-semibold text-[#403F3F] text-[30px] text-center p-10 '>Login Your Account</h1>
                <hr className='border-[#c9bebe] mb-6'/>
                <form className='space-y-4' onSubmit={handleSubmit(handleLogin)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Email address</legend>
                        <input type="text" {...register("email", {required: "This email field is required"})} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your email address" />
                        {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Password</legend>
                        <input type="text" {...register("password", {required: "This Password field is required"})} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your password" />
                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
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

export default LoginPage;