import Link from 'next/link';
import React from 'react';
import { FaArrowLeftLong } from 'react-icons/fa6';


const SimilarCategoryBtn = ({categoryId}) => {
    return (
        <div>
            <Link href={`/category/${categoryId}`}><button className=' btn bg-[#D72050] text-white flex gap-3 justify-center items-center'><FaArrowLeftLong />All News In this Category</button> </Link>
        </div>
    );
};

export default SimilarCategoryBtn;