import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  const { setUser, createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const userName = formData.get("username");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        setUser(result.user);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center my-10">
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-white border text-gray-800">
          <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Register your account</h1>
            <p className="text-sm text-gray-600 border-b pb-8">
              Register Now to access your account
            </p>
          </div>
          <form onSubmit={handleRegister} action="" className="space-y-12">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-xl font-semibold text-primary"
                >
                  Username
                </label>
                <input
                  name="username"
                  id="username"
                  placeholder="Username"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block mb-2 text-xl font-semibold text-primary"
                >
                  Photo URL
                </label>
                <input
                  name="photo"
                  type="text"
                  id="photo"
                  placeholder="Photo URL"
                  required
                  className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-50 text-gray-800"
                />
              </div>
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
                  Register
                </button>
              </div>
              <p className="px-6 text-sm text-center text-[#706F6F] font-medium py-2">
                Already have an account yet?{" "}
                <Link to={"/login"} className="hover:underline text-violet-600">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
