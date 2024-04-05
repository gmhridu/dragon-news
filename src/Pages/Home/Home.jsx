import React from 'react';
import Header from '../../shared/Header/Header';
import Navbar from '../../shared/Navbar/Navbar';
import LeftSideNav from '../../shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../../shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews/BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard/NewsCard';

const Home = () => {
  const news = useLoaderData();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <BreakingNews></BreakingNews>
      
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <LeftSideNav></LeftSideNav>
          </div>
          {/* new container*/}
          <div className="md:col-span-2">
            {news.map((aNews) => (
              <NewsCard key={aNews._id} news={aNews}></NewsCard>
            ))}
          </div>
          <div className='flex'>
            <RightSideNav></RightSideNav>
          </div>
        </div>
      </div>
  );
};

export default Home;