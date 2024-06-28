import React from 'react';
import FAQ from '../../FAQ';
import HeaderL from '../../HeaderL';
import { FaLightbulb, FaPencilAlt, FaCode, FaSearch, FaRocket } from 'react-icons/fa';

const React1 = () => {
    return (
        <div>
            {/* Hero Section */}
            

            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">React Native App Development</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "One-stop solution for building powerful native mobile apps for iOS & Android"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/react1.png' className="w-full h-auto" />
          </div>
          </div>

            {/* Feature Icons and Text */}
            <div className='flex flex-col md:flex-row m-8 md:m-28 items-center'>
                <div className="hero w-full md:w-1/2 flex flex-col items-start px-4 mt-10 md:mt-20">
                    <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">1. One Technology</h1>
                    <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">2. One Codebase</h1>
                    <h1 className="text-3xl md:text-4xl font-bold text-left mb-8">3. Faster Development</h1>
                    <h1 className="text-3xl md:text-4xl font-bold text-left mb-10">4. Multiple Systems</h1>
                </div>
                <div className="mt-10 md:mt-28 md:ml-28">
                    <img src='src/Images/reacticon.png' className='items-center' alt="React Icons" />
                </div>
            </div>

            <HeaderL />

            {/* Description Section */}
            <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 p-8 rounded-lg mt-10 md:mt-20">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img src='src/Images/mobile.jpg' className="w-1/2 h-auto" alt="Mobile App Development" />
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    <p className='text-base md:text-lg text-blue-600 mt-6'>
                        React Native is the much-talked-about framework by developers to build mobile apps on a native platform using JavaScript. This lets you write real, natively rendering mobile apps for Android & iOS. It’s based on React, Facebook’s JavaScript library & programmatically generates native views by targeting mobile platforms instead of browsers.
                    </p>
                    <p className='text-base md:text-lg text-blue-600 mt-6'>
                        The fact that React Native actually renders using its host platform’s APIs enables it to stand out from other cross-platform app development methods.
                    </p>
                </div>
            </div>

            {/* Methodology Section */}
            <div className="h-auto mt-10 md:mt-20 flex items-center justify-center bg-blue-50">
                <div className="max-w-5xl mx-auto p-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-600 text-center mb-8">Our Methodology</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
                        <div className="flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg">
                            <FaLightbulb className="text-white text-5xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Plan</h3>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg">
                            <FaPencilAlt className="text-white text-5xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Design</h3>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg">
                            <FaCode className="text-white text-5xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Develop</h3>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg">
                            <FaSearch className="text-white text-5xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Test</h3>
                        </div>
                        <div className="flex flex-col items-center p-6 bg-blue-400 rounded-lg shadow-lg">
                            <FaRocket className="text-white text-5xl mb-4" />
                            <h3 className="text-xl font-semibold text-white">Deploy</h3>
                        </div>
                    </div>
                </div>
            </div>

            <FAQ />
        </div>
    )
}

export default React1;
