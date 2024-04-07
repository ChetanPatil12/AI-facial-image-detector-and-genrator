import { Form } from "formik";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import GoogleIcon from "@mui/icons-material/Google";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import LoginPageSignUp from "../components/LoginPageSignUp";

const Login = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="text-white">
      <div className="w-[80vw] bg-gray-700 h-[90vh] mx-auto mt-[5vh] rounded-[50px] flex">
        <div className="w-2/5">
          <img
            className="object-cover w-full h-full rounded-l-[50px]"
            src={require("../images/loginPage.jpeg")}
            alt=""
          />
        </div>

        <div className="w-3/5 ">
          <div>
            {toggle && (
              <div className="flex justify-center py-10">
                <div className="hover:cursor-pointer flex space-x-5 items-center rounded-lg bg-white h-9 pl-12">
                  <button
                    onClick={() => setToggle(!toggle)}
                    className="mr-5 text-black font-semibold"
                  >
                    Login
                  </button>
                  <div className="hover:cursor-pointer flex items-center ml-5 rounded-r-lg font-semibold bg-[#A259FF] h-9 w-32 pl-6">
                    <div>
                      <MailOutlineIcon />
                    </div>
                    <button>Signup</button>
                  </div>
                </div>
              </div>
            )}
            {!toggle && (
              <div className="flex justify-center py-10 mb-9">
                <div className="hover:cursor-pointer flex space-x-5 items-center rounded-lg bg-[#A259FF] h-9 pl-12">
                  <button className="w-[1/2] mr-5 text-white font-semibold rounded-r-md">
                    Login
                  </button>
                  <div
                    onClick={() => setToggle(!toggle)}
                    className="hover:cursor-pointer flex items-center ml-5 font-semibold rounded-r-lg text-black bg-white h-9 w-32 pl-6"
                  >
                    <div className="text-black">
                      <MailOutlineIcon />
                    </div>
                    <button>Signup</button>
                  </div>
                </div>
              </div>
            )}

            {toggle && (
              <form className="flex flex-col space-y-6 justify-center items-center">
                <div className="flex flex-col w-[70%]">
                  <label
                    className="ml-7 text-sm font-semibold"
                    htmlFor="username"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="h-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col w-[70%]">
                  <label className="ml-7 text-sm font-semibold" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    className="h-12 rounded-full"
                  />
                </div>
                <div className="flex flex-col  w-[70%]">
                  <label
                    className="ml-7 text-sm font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="h-12 rounded-full"
                  />
                </div>
                <div className="flex space-x-10">
                  <div className="flex items-center rounded-full bg-[#A259FF] p-4 px-6 h-4 space-x-2">
                    <PersonAddAlt1Icon />
                    <button className="text-sm font-semibold">Sign Up</button>
                  </div>
                  <div className="flex items-center rounded-full text-black bg-white p-4 px-6 h-4 space-x-2">
                    <img
                      className="h-7"
                      src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                      alt=""
                    />
                    <button className="text-sm font-semibold rounded-full">
                      Sign up with Google
                    </button>
                  </div>
                </div>
                <div className="text-sm">
                  By continuing, you agree to our{" "}
                  <a className="underline" href="">
                    Terms of Use
                  </a>{" "}
                  and{" "}
                  <a className="underline" href="">
                    Privacy Policy
                  </a>
                </div>
              </form>
            )}
            {!toggle && <LoginPageSignUp />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
