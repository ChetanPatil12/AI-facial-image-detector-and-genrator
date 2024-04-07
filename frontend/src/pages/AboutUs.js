import React from "react";
import Navbar from "../components/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="flex w-full items-center object-cover mt-12">
          <div className="relative">
            <img
              className="object-cover rounded-full h-[20rem] ml-10 shadow-lg blur-3xl"
              src="aiimage.jpg"
              alt=""
            />
            <img
              className="object-cover rounded-full h-[20rem] ml-10 shadow-lg absolute bottom-0"
              src="aiimage.jpg"
              alt=""
            />
          </div>
          <div></div>
        </div>
        <hr className="mt-12 border-purple-500 w-[90%]" />
      </div>

      <div className="flex flex-col ml-[20%] space-y-12 mt-12">
        <div className="flex items-center space-x-24">
          <img
            className="h-44 w-44 object-cover rounded-md"
            src="hamsterimage.jpg"
            alt=""
          />
          <p className="text-amber-100 max-w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reiciendis quasi odit a nostrum aliquid voluptatem ullam, itaque
            autem animi nulla omnis excepturi vel doloremque, sed, placeat velit
            ipsam dolorum.
          </p>
        </div>
        <div className="flex items-center space-x-24">
          <img
            className="h-44 w-44 object-cover rounded-md"
            src="giraffeimage.jpg"
            alt=""
          />
          <p className="text-amber-100 max-w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reiciendis quasi odit a nostrum aliquid voluptatem ullam, itaque
            autem animi nulla omnis excepturi vel doloremque, sed, placeat velit
            ipsam dolorum.
          </p>
        </div>
        <div className="flex items-center space-x-24">
          <img
            className="h-44 w-44 object-cover rounded-md"
            src="dogimage.jpg"
            alt=""
          />
          <p className="text-amber-100 max-w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reiciendis quasi odit a nostrum aliquid voluptatem ullam, itaque
            autem animi nulla omnis excepturi vel doloremque, sed, placeat velit
            ipsam dolorum.
          </p>
        </div>
        <div className="flex items-center space-x-24">
          <img
            className="h-44 w-44 object-cover rounded-md"
            src="chimimage.jpg"
            alt=""
          />
          <p className="text-amber-100 max-w-[50%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            reiciendis quasi odit a nostrum aliquid voluptatem ullam, itaque
            autem animi nulla omnis excepturi vel doloremque, sed, placeat velit
            ipsam dolorum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
