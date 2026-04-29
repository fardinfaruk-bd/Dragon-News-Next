"use client";
import { useState } from "react";

const ReadMoreBtn = ({ news }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={`text-[#706F6F] ${isExpanded ? "" : "line-clamp-4 "}`}>
        {news.details}
      </p>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="bg-linear-to-r from-[#F75B5F] to-[#FF8C47] bg-clip-text text-transparent font-semibold"
      >
        {isExpanded ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMoreBtn;