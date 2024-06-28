import React from 'react';
import HeaderL from '/src/HeaderL';
import FAQ from '/src/FAQ';
import { Link } from 'react-router-dom';

const features = [
    'Unlimited Content',
    'Mobile Management',
    'Ready-to-go',
    'Highly Scalable',
    'Multilingual Support'
];

const Learning = () => {
    return (
        <div>

<div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">Learning Management System</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "More than just software, get a complete learning solution"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/learning.png' className="w-full h-auto" />
          </div>
          </div>
           
            <div className="flex flex-col md:flex-row items-center p-4 lg:p-6 gap-8 lg:gap-20 m-4 lg:m-10 mt-10 lg:mt-20">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src='src/Images/learn1.jpg' alt="Learning Solution" className="h-48 md:h-96 w-full md:w-auto" />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-12">
                    <h2 className="text-lg font-medium italic mb-4">“More than just software, get a complete learning solution”</h2>
                    <ul className="space-y-4">
                        {features.map((feature, index) => (
                            <li key={index} className="flex items-center text-lg">
                                <div className="text-blue-500 text-2xl mr-2">⬤</div>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="bg-blue-50 p-6 lg:p-20">
                <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                    Build the perfect education solution for your training needs.
                </h1>
                <p className="mb-6 text-center">
                    Provide training to your workforce or students with high quality LMS (Learning Management System) delivering a massive amount of content in an organized manner.
                </p>
                <div className="flex flex-col md:flex-row gap-8 lg:gap-20 ml-6 lg:ml-24">
                    <div className="md:w-1/2">
                        <p className="font-semibold mb-2">LMS can be used in organizations like</p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">👥</span>
                                Colleges
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">🏢</span>
                                Government corporations
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">✏️</span>
                                Training centres
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">🏢</span>
                                Corporates
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mt-6 md:mt-0 md:pl-12">
                        <p className="font-semibold mb-2">LMS can be used for</p>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">📋</span>
                                Effective delivery of learning
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">📊</span>
                                Employee tracking
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-600 mr-2">📊</span>
                                Training programs
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-center mt-8 space-y-4 md:space-y-0 md:space-x-4">
                    <Link to="/ContactUs" className="bg-black text-white px-6 py-2 rounded-full text-center">
                        Contact Us
                    </Link>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full">
                        Call Now +91 8600027589
                    </button>
                </div>
            </div>

            <HeaderL />

            <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8 m-4 lg:m-20 gap-8 lg:gap-40">
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-6">Our Development Process:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Data integration
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Ease of Use
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Content Management
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Learning support on the mobile device
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Includes Blended Learning
                            </li>
                        </ul>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Flexible testing and assessment options
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Enables tracking & reporting
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Data Security
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Branding & customization
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-2">»</span> Supports E-commerce functionality
                            </li>
                        </ul>
                    </div>
                    <button className="mt-6 bg-black text-white py-2 px-4 rounded">
                        <Link to="/ContactUs">Contact Us</Link>
                    </button>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
                    <img src="src/Images/r.jpg" className="w-full h-auto" />
                </div>
            </div>
            <FAQ />
        </div>
    );
}
export default Learning;
