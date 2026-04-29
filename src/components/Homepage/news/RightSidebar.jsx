import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const RightSidebar = () => {
    return (
        <div className='space-y-4'>
            <h2 className='font-semibold text-xl'>Login With</h2>
            <div className='space-y-2'>
                <button className='btn w-full border-blue-500 text-blue-500'><FcGoogle /> Login With Google</button>
                <button className=' btn w-full'><FaGithub /> Login With Github</button>
            </div>

        </div>
    );
};

export default RightSidebar;