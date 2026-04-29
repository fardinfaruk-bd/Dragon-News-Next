import RightSidebar from '@/components/Homepage/news/RightSidebar';
import { getNewsDetailsById } from '@/lib/data';
import SimilarCategoryBtn from '@/ui/SimilarCategoryBtn';
import Image from 'next/image';
import React from 'react';

export const generateMetadata = async({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    return {
        title: news.title,
        description: news.details,
    };

};

const NewsDetailsPage = async({params}) => {
    const {id} = await params;
    const news = await getNewsDetailsById(id);
    
    return (
        <div className='container mx-auto my-8'>
            <div className='grid grid-cols-12 gap-5 '>
                <div className='col-span-9 '>
                    <h2 className='font-bold text-xl text-[#403F3F] mb-6'>Dragon News</h2>
                    <div className='border border-[#E7E7E7] rounded-lg p-7.5 space-y-5'>
                        <Image src={news.image_url} width={500} height={500} alt="News Image" className='w-full' />
                        <h2 className='text-[#403F3F] font-bold text-[25px]'>{news.title}</h2>
                        <p className='text-[#706F6F] text-[16px]'>{news.details}</p>
                        <SimilarCategoryBtn categoryId={news.category_id} />
                    </div>
                </div>
                <div className='col-span-3'>
                    <RightSidebar />
                </div>

            </div>
        </div>
    );
};

export default NewsDetailsPage;