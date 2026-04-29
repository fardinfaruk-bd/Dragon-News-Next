import Link from 'next/link';
import React from 'react';

const LeftSidebar = ({ categories, activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-xl">All Categories</h2>
      <ul className="flex flex-col gap-2 mt-6">
        {
          categories.map((category) => (
            <li
              className={`${activeId === category.category_id
                  ? "bg-[#E7E7E7] text-[#403F3F]"
                  : ""
                }  rounded-md font-bold text-center text-[#9F9F9F] text-xl`}
              key={category.category_id}
            >
              <Link href={`/category/${category.category_id}`} className='block p-2 hover:bg-gray-100 rounded-md'>
                {" "}
                {category.category_name}
              </Link>
            </li>
          ))
        }
      </ul>

    </div>
  );
};

export default LeftSidebar;