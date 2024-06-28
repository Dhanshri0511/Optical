import React from 'react';
import HeaderL from '../../HeaderL';
import FAQ from '../../FAQ';

const services = [
  { title: 'Custom IOS App Development', icon: '🌀' },
  { title: 'IOS Game Development', icon: '🌀' },
  { title: 'IOS App Testing', icon: '🌀' },
  { title: 'IOS MVP App Development', icon: '🌀' },
  { title: 'IOS App Maintanance', icon: '🌀' },
  { title: 'IPad App Development ', icon: '🌀' },
];

const Ios = () => {
    return(
        <div>
            {/* Hero Section */}


            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">iOS App Development</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "We will help you to convert your simple, awesome idea to a highly polished custom iOS app "
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/ios.png' className="w-full h-auto" />
          </div>
          </div>
            


            

            {/* Key Features Section */}
            <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 p-8 rounded-lg mt-20">
                <div className="w-full md:w-1/2 flex justify-center">
                    <img src='src/Images/ios1.png' className="w-1/2 h-1/2" alt="iOS Development Key Features" />
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0 md:pl-8">
                    <h2 className="text-2xl md:text-4xl font-bold mb-4">Build High Quality, Revenue Generating iOS Apps with Optical Arc</h2>
                    <p className="text-lg md:text-xl font-semibold text-blue-500 mb-4">Enjoy benefits such as</p>
                    <ul className="space-y-2 mb-6">
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">✔</span> Security of Enterprise Data
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">✔</span> Established Customer Base
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">✔</span> Exemplary User Experience
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">✔</span> Tech-Ready Audience
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">✔</span> Low Fragmentation and Ease of Testing
                        </li>
                        <li className="flex items-center">
                            <span className="text-blue-500 mr-2">✔</span> High Market Penetration
                        </li>
                    </ul>
                    
                </div>
            </div>

            {/* Why Choose Us Section */}
            <div className='flex flex-col md:flex-row items-center gap-10 mt-10 mb-10'>
    <div className='md:w-1/2'>
        <h1 className="text-3xl md:text-4xl font-bold my-6 text-center md:ml-10 ">Why Choose Us?</h1>
        <div className='flex flex-col space-y-6 md:ml-10 ml-10'>
            <div>
                <h2 className="text-xl md:text-2xl font-semibold my-2 text-left text-blue-700">Technology</h2>
                <p className='text-lg md:text-xl text-left'>Our experienced iOS App development team works efficiently with latest tools & technologies such as Objective-C, Swift, JSON, Web Services, JavaScript, HTML etc.</p>
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-semibold my-2 text-left text-blue-700">Services</h2>
                <p className='text-lg md:text-xl text-left'>We provide end-to-end iOS app development services, covering conceptualization, design, development, testing, and maintenance.</p>
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-semibold my-2 text-left text-blue-700">Experience</h2>
                <p className='text-lg md:text-xl text-left'>With years of experience, we deliver high-quality iOS apps that meet client expectations and industry standards.</p>
            </div>

            <div>
                <h2 className="text-xl md:text-2xl font-semibold my-2 text-left text-blue-700">Clients</h2>
                <p className='text-lg md:text-xl text-left'>We have served a diverse clientele, ranging from startups to enterprises, across various domains with our iOS app development expertise.</p>
            </div>
        </div>
    </div>

    <div className="w-full md:w-1/2 flex justify-center">
    <img src='src/Images/p.png' className="w-full md:w-1/2 h-auto" alt="Development Process" />
</div>

</div>


            {/* Services Section */}
            <div className="mt-10 mb-10">
                <h1 className="text-3xl font-bold my-6 text-center">Services</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-14">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded shadow">
                            <div className="text-red-500 text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-semibold text-center">{service.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer Section */}
            <FAQ />
            <HeaderL />
        </div>
    );
}

export default Ios;
