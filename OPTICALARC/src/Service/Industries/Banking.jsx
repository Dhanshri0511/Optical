import React from 'react';
import { FaLightbulb, FaPencilAlt, FaCode, FaSearch, FaRocket } from 'react-icons/fa';
import HeaderL from '/src/HeaderL';
import FAQ from '../../FAQ';

const Banking = () => {
    return (
        <div>
            {/* Header Section */}
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 p-8">
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold mb-4 mt-10 text-blue-900">Banking and Finance App Development</h2>
                    <p className="text-gray-700 mt-5 mb-5 text-lg">"Redefine banking process with Innovative App Solutions"</p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="src/Images/banking.png" className="w-full h-auto" />
                </div>
            </div>

            {/* Benefits Section */}
            <div className="flex flex-col lg:flex-row gap-12 mt-12 lg:gap-36 lg:mt-28 bg-blue-50 p-10">
                <div className="w-full lg:w-1/2 mt-6 lg:ml-10 flex justify-center lg:justify-start">
                    <img src="src/Images/gold.png" className="w-full max-w-md h-auto" />
                </div>
                <div className="p-8 w-full lg:w-1/2">
                    <h2 className="text-3xl text-blue-700 font-bold mb-6">Benefits of Having Banking Apps</h2>
                    <div className="grid grid-cols-1 gap-4 text-lg text-black-600">
                        <ul className="space-y-2">
                            <li>⚫ Robust Security</li>
                            <li>⚫ Empower Customers</li>
                            <li>⚫ Location-based services</li>
                            <li>⚫ Maintenance & Support</li>
                            <li>⚫ Quick Services</li>
                        </ul>
                        <ul className="space-y-2">
                            <li>⚫ 24*7 Availability (Transaction convenience)</li>
                            <li>⚫ Decreased operational costs</li>
                            <li>⚫ Marketing Perks (customer segmentation, promotions, etc)</li>
                            <li>⚫ Extended Reach</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="w-full flex items-center justify-center bg-blue-50">
                <div className="container p-10 mx-auto bg-blue-50 rounded-lg shadow-md">
                    <div className="flex flex-col lg:flex-row">
                        <div className="mb-4 lg:mb-0 lg:w-1/2 lg:ml-32">
                            <h2 className="text-2xl font-bold mb-4">Banking App Features</h2>
                            <ul className="list-disc pl-5 space-y-2 text-blue-600">
                                <li>Secure Sign-in</li>
                                <li>Bank account management</li>
                                <li>Easy Payment Transfer</li>
                                <li>Mobile CRM</li>
                                <li>Credit Card Management</li>
                                <li>Customizable Alerts</li>
                                <li>Loyalty Program Integration</li>
                                <li>E-statement</li>
                            </ul>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-2xl font-bold mb-4">Our Banking App Solutions</h2>
                            <ul className="list-disc pl-5 space-y-2 text-blue-600">
                                <li>Digital/Mobile Banking</li>
                                <li>Finance Management Software</li>
                                <li>E-Wallet Apps</li>
                                <li>Insurance Management Portal</li>
                                <li>Customer management Portal</li>
                                <li>Big Data & Analytics</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Methodology Section */}
            <div className="h-auto mt-20 flex items-center justify-center bg-blue-50">
                <div className="max-w-5xl mx-auto p-8">
                    <h2 className="text-3xl font-bold text-blue-600 text-center mb-8">Our Methodology</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
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

            {/* HeaderL and FAQ Section */}
            <div className='mb-20'>
                <HeaderL />
            </div>
            <FAQ />
        </div>
    );
}

export default Banking;
