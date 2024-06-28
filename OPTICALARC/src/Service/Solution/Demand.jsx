import React from 'react';
import HeaderL from '/src/HeaderL';
import FAQ from '/src/FAQ';
import { Link } from 'react-router-dom';

const Demand = () => {
    return (
        <div>
            {/* Hero Section */}
            

            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">On Demand Services App Development</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              Get On-Demand Services App with World-class Features              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/demand.png' className="w-full h-auto" />
          </div>
          </div>

            {/* Benefits Section */}
            <div className="w-full mt-28 flex flex-col lg:flex-row items-center justify-center bg-blue-50 p-8 lg:p-20">
                <div className="w-full lg:w-auto mb-10 lg:mb-0 p-4">
                    <img src='src/Images/sale.png' className="object-cover h-full w-full" alt="Increase Sales" />
                </div>
                <div className="w-full lg:w-1/2 p-8">
                    <ul className="space-y-4">
                        <li className="flex items-center">
                            <span className="text-blue-700 mr-2">●</span>Increase sales
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-700 mr-2">●</span>On-the-go marketing
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-700 mr-2">●</span>Customer satisfaction
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-700 mr-2">●</span>Employee satisfaction
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-700 mr-2">●</span>Convenient and affordable
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-700 mr-2">●</span>Real-time tracking
                        </li>
                    </ul>
                    
                </div>
            </div>

            {/* Development Process Section */}
            <div className="mt-28 flex flex-col items-center justify-center bg-blue-50 py-10 ">
                <h1 className="text-2xl lg:text-4xl font-bold mb-8">Our On-Demand App Development Process</h1>
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between rounded-lg p-8 w-11/12 max-w-7xl">
                    <div className="flex flex-col items-center space-y-8 w-full lg:w-1/2">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-8">
                            <img src='src/Images/process.jpg' className="object-cover" alt="Development Process" />
                        </div>
                    </div>
                    <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
                        <h2 className="text-xl font-semibold mb-4">We Have Created On-Demand Apps for these Categories</h2>
                        <ul className="space-y-2 lg:space-y-4">
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Transportation
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Food & Grocery delivery
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Housekeeping
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Logistics & Couriers
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Beauty & Healthcare
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Real-estate
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Ecommerce/Retail
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Travels & Tours
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Banking & Finance
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-700 mr-2">●</span>Gaming & Leisure
                            </li>
                        </ul>
                        <div className="mt-8">
                            <button className="bg-blue-500 w-40 hover:bg-blue-700 text-white py-2 px-4 rounded-full">
                                <Link to="/ContactUs" className="text-white px-6 py-2 rounded-full text-center">Contact Us</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="p-6 bg-blue-50 min-h-screen flex w-full items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col lg:flex-row items-center gap-10 lg:gap-60 w-full max-w-7xl">
                    <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
                        <img src="src/Images/pocket.jpg" alt="Why Choose Us" className="w-full h-auto rounded-3xl" />
                    </div>
                    <div className="w-full lg:w-1/2 pl-0 lg:pl-10">
                        <h2 className="text-2xl font-bold text-blue-500 mb-4">Why Choose Optical Arc?</h2>
                        <ul className="mb-8 space-y-4">
                            <li className="flex items-center">
                                <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Flexible Models
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Dedicated Team
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 text-xl font-bold mr-2">✔</span> 24x7 Support
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Competitive Pricing
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 text-xl font-bold mr-2">✔</span> On-time Delivery
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <HeaderL />

            {/* Technologies Used Section */}
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-72 mb-20 px-8 lg:px-20">
            <div className="w-full lg:w-96 mt-10 lg:mt-72">
    <img src='src/Images/lang.jpg' className="w-full lg:w-full h-auto" alt="Technologies" />
</div>


                <div className="min-h-screen flex flex-col items-center justify-center w-full">
                    <h1 className="text-2xl lg:text-4xl font-bold mb-10">Technologies Used</h1>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow items-center text-center">JavaScript</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">iOS</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">HTML5</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">React</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">Python</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">Firebase</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">Cordova</div>
                        <div className="p-4 bg-blue-50 w-full h-24 font-semibold rounded shadow text-center">Node.Js</div>
                    </div>
                </div>
            </div>
            <FAQ />
        </div>
    );
}

export default Demand;
