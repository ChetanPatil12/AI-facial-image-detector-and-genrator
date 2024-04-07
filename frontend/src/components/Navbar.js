import React from 'react'
const Navbar = () => {
  return (
    <div>
        <nav className="bg-[#343434] py-3 px-16">
            <div className="container mx-auto flex items-center justify-between">    
                  <a href='/' className="text-white font-bold text-xl">Your Logo</a>
                <div className="flex space-x-10 font-semibold">
                    <a href="/aboutus" className="text-white hover:text-gray-300 py-3">About Us</a>
                    <a href="#" className="text-white hover:text-gray-300 py-3">Documentation</a>
                    <a href="https://github.com/ChetanPatil12/Generation-and-detection-of-Ai-Images" className="text-white hover:text-gray-300 py-3">Source Code</a>
                    <a href="/login" className="text-white px-10 py-3 border-4 border-[#A259FF] bg-[#A259FF] rounded-2xl hover:bg-[#8f50e3]">Login</a>
                    <a href="/login" className="text-white px-10 py-3 border-4 border-[#A259FF]  rounded-2xl hover:bg-[#A259FF]">Sign up</a>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
