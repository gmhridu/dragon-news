import React, { useContext, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { AuthContext } from '../../providers/AuthProviders';


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  

  const { setUser, signInUser, logOut } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();

    console.log(e.currentTarget)
    const formData = new FormData(e.currentTarget)
    const email = formData?.get('email');
    const password = formData?.get('password');

    signInUser(email, password)
      .then(result => {

        // navigate after loading
        navigate(location?.state ? location.state : "/");
        console.log(location?.state ? location?.state : "/");
        setUser(result?.user)
      })
    .catch(error => console.error(error))
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex items-center justify-center my-20">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white border text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Login your account</h1>
            <p className="text-sm text-gray-600 border-b pb-8">
              Login to access your account
            </p>
          </div>
          <form onSubmit={handleLogin} action="" className="space-y-12">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-xl font-semibold text-primary"
                >
                  Email address
                </label>
                <input
                  name="email"
                  id="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              <div>
                <div className="flex justify-between mb-2">
                  <label
                    htmlFor="password"
                    className="text-xl font-semibold text-primary"
                  >
                    Password
                  </label>
                  <Link className="text-base hover:underline text-gray-600">
                    Forgot password?
                  </Link>
                </div>
                <div className="flex relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                    className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                  />
                  <button
                    className="absolute right-3 top-3 text-xl"
                    type="button"
                    onClick={() => setShowPassword((prevState) => !prevState)}
                  >
                    {showPassword ? <IoMdEyeOff /> : <IoMdEye />}
                  </button>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <button className="btn w-full rounded-md bg-primary text-white text-xl font-semibold">
                  Login
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[#706F6F] font-medium py-2">
                Don't have an account yet?{" "}
                <Link
                  to={"/register"}
                  className="hover:underline text-violet-600"
                >
                  Register Now
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
