import React from 'react'
import Typewriter from 'typewriter-effect';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className='font-["work_sans"]'>
        <Navbar/>

        <div className='text-white px-36 h-[100hv]'>
            <div className='text-center mt-6'>
                <h1 className='mx-40 text-[40px] font-semibold'>Generation And Detection Of Artificial Images: An Exploration</h1>
                <h3 className='text-lg mx-36 mt-4'>
                    {/* <Typewriter onInit={(typewriter) => {
                        typewriter.typeString('An exploratory approach to understand te effects of Artificial Intellignce Image generator and the ways to detect AI images.').delay(-100).start();
                        }}/> */}
                    An exploratory approach to understand  effects of Artificial Intellignce Image generator and the ways to detect AI images.
                </h3>
            </div>
            <div className='flex gap-20 mt-8'>
                <div className=' flex-1'>
                    <div className='h-[300px] '>
                        <img className='mx-auto' src={require("../images/Homepage_img1.png")} alt="image" />
                    </div>
                    <div className='text-center'>
                        <div className='mt-2 mx-auto  py-4 rounded-xl shadow-sm bg-[#343434] w-[300px] text-2xl font-semibold'>Generation</div>
                        <Link to='/generate'>
                            <button className='px-10 py-3 border-4 border-[#A259FF] bg-[#A259FF] rounded-2xl hover:bg-[#8f50e3] mt-4'>Generate✨</button>
                        </Link>
                    </div>
                </div>
                <div className=' flex-1'>
                    <div className='h-[300px] '>
                        <img className='mx-auto' src={require("../images/Homepage_img2.png")} alt="image" />
                    </div>
                    <div className='text-center'>
                        <div className='mt-2 mx-auto  py-4 rounded-xl shadow-sm bg-[#343434] w-[300px] text-2xl font-semibold'>Detection</div>
                        <Link to="/detection">
                            <button className='px-10 py-3 border-4 border-[#A259FF] bg-[#A259FF] rounded-2xl hover:bg-[#8f50e3] mt-4'>Detection🚀</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Homepage
