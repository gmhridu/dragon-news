import React from 'react';
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

const BreakingNews = () => {
  return (
    <div className="flex items-center justify-center bg-[#F3F3F3] rounded-md p-2">
      <button className="btn btn-secondary bg-[#D72050]">Latest</button>
      <Marquee speed={90} className="text-primary font-xl font-semibold">
        <Link to={"/"} className='mr-12'>
          I can be a React component, multiple React components....
        </Link>
        <Link to={"/"} className='mr-12'>
          I can be a React component, multiple React components....
        </Link>
        <Link to={"/"} className='mr-12'>
          I can be a React component, multiple React components....
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;