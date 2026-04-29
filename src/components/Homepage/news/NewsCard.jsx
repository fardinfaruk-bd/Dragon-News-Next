import Image from 'next/image';
import React from 'react';
import { CiBookmark, CiShare2 } from 'react-icons/ci';
import StarImg from "@/assets/star.png"
import { IoEye } from 'react-icons/io5';
import Link from 'next/link';

const NewsCard = ({ news }) => {
    return (
        <div className="card bg-base-100  shadow-sm">

            <div className="card-body p-0  ">
                <div className='flex justify-between items-center bg-[#F3F3F3] rounded-t-lg p-3'>
                    <div className='flex gap-3 items-center'>
                        <Image src={news.author?.img} width={50} height={50} alt={`Author: ${news.author?.name}`} className='rounded-full' />
                        <div>
                            <h3 className='font-semibold text-[#403F3F]'>{news.author?.name}</h3>
                            <p className='text-sm text-[#706F6F]'>{news.author?.published_date?.split(" ")[0]}</p>
                        </div>
                    </div>
                    <div className='flex gap-3 text-xl'>
                        <CiBookmark />
                        <CiShare2 />
                    </div>
                </div>
                <div className='p-5 space-y-5 '>
                    <Link href={`/news/${news._id}`}>
                        <div className='space-y-5 mb-5'>
                            <div>
                                <h2 className="card-title text-[20px] text-[#403F3F]">{news.title}</h2>
                            </div>
                            <figure>
                                <Image src={news?.image_url} width={300} height={300} alt="News Image" className='w-full' />
                            </figure>
                            <div>
                                <p className='text-[#706F6F] line-clamp-4'>{news.details}</p>
                                <p className='bg-linear-to-r from-[#F75B5F] to-[#FF8C47] bg-clip-text text-transparent font-semibold cursor-pointer'>Read More</p>
                            </div>
                        </div>


                    </Link>

                    <hr className='border border-[#E7E7E7]' />
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-2 items-center justify-center'>
                            <Image src={StarImg} width={20} height={20} alt="Star" />
                            <Image src={StarImg} width={20} height={20} alt="Star" />
                            <Image src={StarImg} width={20} height={20} alt="Star" />
                            <Image src={StarImg} width={20} height={20} alt="Star" />
                            <Image src={StarImg} width={20} height={20} alt="Star" />
                            <p className='text-[#706F6F] font-medium'>{news.rating?.number}</p>
                        </div>
                        <div className='flex gap-2 items-center justify-center'>
                            <IoEye className='text-[#706F6F] text-xl' />
                            <p className='text-[#706F6F] font-medium'>{news.total_view}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default NewsCard;