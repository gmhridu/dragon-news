import React from 'react';
import logo from '../../../src/assets/logo.png'
import { Link } from 'react-router-dom';
import moment from "moment";


const Header = () => {
  return (
    <div>
      <Link to={"/"} className="flex items-center justify-center my-3">
        <img src={logo} alt="logo" className="w-80" />
      </Link>
      <div className="flex flex-col items-center justify-center gap-2">
        <h4 className="text-[1.25rem] font-normal text-dark mt-3">
          Journalism Without Fear or Favour
        </h4>
        <h4 className="text-primary text-[1.25rem] font-medium">
          {moment().format("dddd")}, <span className='text-dark'>{moment().format("MMMM D, YYYY")}</span>
        </h4>
      </div>
    </div>
  );
};

export default Header;