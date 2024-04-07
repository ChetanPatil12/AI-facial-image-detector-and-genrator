import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Login from "../pages/Login";

const LoginPageSignUp = () => {

  return (
    <div className="flex flex-col">
   

    <form className="flex flex-col space-y-10 justify-center items-center">
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

      <div className="flex flex-col w-[70%]">
        <label className="ml-7 text-sm font-semibold" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="h-12 rounded-full"
        />
      </div>
      <div className="">
        <button className="px-10 py-3 border-4 border-[#A259FF] bg-[#A259FF] rounded-2xl hover:bg-[#8f50e3] mt-4">Submit</button>
        <a className="text-sm text-center " href="">
          <p className="underline mt-4">forgot password?</p> 
        </a>
      </div>
    </form>
  </div>
  );
};

export default LoginPageSignUp;