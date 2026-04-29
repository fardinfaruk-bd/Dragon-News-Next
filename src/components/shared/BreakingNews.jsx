import { getNewsByCategoryId } from '@/lib/data';
import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = async () => {
    const news = await getNewsByCategoryId("01");
    console.log(news, "Braking News");
    return (
        <div className='flex items-center gap-4 justify-between bg-[#F3F3F3] p-3 container mx-auto'>
            <button className='btn bg-[#D72050] text-white text-xl font-medium p-5'>Latest</button>
            <Marquee pauseOnHover={true} speed={50} className='text-[#403F3F] font-medium text-xl space-x-5'>
                <h2 className='text-[#D72050] font-medium text-xl'>Breaking News: </h2>
                {news.slice(0, 3).map((n, i) => (
                    <p key={i}>
                        <span className="mx-2">
                            {n.title}
                        </span>
                        ||

                    </p>
                ))}
            </Marquee>
        </div>
    );
};

export default BreakingNews;