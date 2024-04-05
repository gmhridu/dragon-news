import React from 'react';
import { FaGithub, FaGoogle, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'



const RightSideNav = () => {
  return (
    <div>
      {/* Login with */}
      <div className="border rounded-md p-6 mt-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Login With</h2>
        </div>
        <div className="flex flex-col gap-2">
          <button className="btn btn-outline text-blue-600">
            <FaGoogle />
            Login With Google
          </button>
          <button className="btn btn-outline">
            <FaGithub />
            Login With Github
          </button>
        </div>
      </div>

      {/* find us on */}
      <div className="border rounded-md p-6 mt-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Find Us On</h2>
        </div>
        <div className="flex flex-col">
          <Link className="p-6 flex items-center gap-3 border rounded-t-lg text-lg">
            <FaFacebook />
            <span className="font-medium text-dark">Facebook</span>
          </Link>
          <Link className="p-6 flex items-center gap-3 border-x text-lg">
            <FaTwitter />
            <span className="font-medium text-dark">Twitter</span>
          </Link>
          <Link className="p-6 flex items-center gap-3 border rounded-b-lg text-lg">
            <FaInstagram />
            <span className="font-medium text-dark">Instagram</span>
          </Link>
        </div>
      </div>

      {/* q-zone */}
      <div className="border rounded-md p-6 mt-4 mb-6 bg-[#F3F3F3]">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Q-Zone</h2>
        </div>
        <div className='flex flex-col gap-4'>
          <img src={qZone1} alt="" />
          <img src={qZone2} alt="" />
          <img src={qZone3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;