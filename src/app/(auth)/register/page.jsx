"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {


    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleRegister = (data) => {
        console.log(data);

    }
    return (
        <div className='container mx-auto min-h-screen flex justify-center items-center bg-[#F3F3F3]'>
            <div className='p-10 rounded-xl bg-white'>
                <h1 className='font-semibold text-[#403F3F] text-[30px] text-center p-10 '>Register your account</h1>
                <hr className='border-[#c9bebe] mb-6' />
                <form className='space-y-5' onSubmit={handleSubmit(handleRegister)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Your Name</legend>
                        <input type="text" {...register("name", { required: "This name field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Name" />
                        {errors.name && <span className='text-red-500'>{errors.name?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Photo URL</legend>
                        <input type="text" {...register("photo", { required: "This Photo field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your a Photo URL" />
                        {errors.photo && <span className='text-red-500'>{errors.photo?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Email</legend>
                        <input type="email" {...register("email", { required: "This Email field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter your Email Address" />
                        {errors.email && <span className='text-red-500'>{errors.email?.message}</span>}
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend font-semibold text-[18px] text[#403F3F]">Password</legend>
                        <input type="text" {...register("password", { required: "This name field is required" })} className="input w-full bg-[#F3F3F3] border-none" placeholder="Enter a Password" />
                        {errors.password && <span className='text-red-500'>{errors.password?.message}</span>}
                    </fieldset>
                    <div className='flex gap-2 items-center'>
                        <input type="checkbox" className="w-5 h-5" /> <span className='text-[#706F6F]'>Accept <span className='font-semibold'>Terms & Conditions</span></span>
                    </div>
                    <button className='btn bg-[#403F3F] text-white w-full text-xl p-6'>Log In</button>

                </form>
            </div>
        </div>
    );
};

export default RegisterPage;