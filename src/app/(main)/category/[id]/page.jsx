import LeftSidebar from '@/components/Homepage/news/LeftSidebar';
import NewsCard from '@/components/Homepage/news/NewsCard';
import RightSidebar from '@/components/Homepage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';



const NewsCategoryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategories();
    const news = await getNewsByCategoryId(id);

    return (
        <div className=" container mx-auto grid grid-cols-12 gap-4 my-15">
            <div className="col-span-3">
                <LeftSidebar categories={categories} activeId={id} />
            </div>

            <div className="col-span-6">
                <h2 className='font-bold text-xl mb-6 text-[#403F3F]'>Dragon News Home</h2>
                <div className="space-y-4">
                    {news.length > 0 ?
                        news.map((n) => {
                            return <NewsCard key={n._id} news={n} />
                        }):
                        <p className='font-bold text-4xl text-center my-7'>No news found</p>
                    }
                </div>

            </div>
            <div className=" col-span-3">
                <RightSidebar />
            </div>
        </div>


    );
};

export default NewsCategoryPage;