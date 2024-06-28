import React from 'react';
import FAQ from '/src/FAQ';
import HeaderL from '/src/HeaderL';
import { Link } from 'react-router-dom';

const Marketplace = () => {
  return (
    <div>
      {/* Hero Section */}

      <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 pl-8 pr-8 mt-10">
                    <h2 className="text-3xl md:text-7xl font-bold mb-4 text-blue-900">Marketplace App Development</h2>
                    <p className="text-gray-700 mt-5 text-lg">
                    "Build top notch marketplace apps in the simplest ways across different platforms!"                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="src/Images/Enterprises.png" className="w-full h-auto" />
                </div>
            </div>



      


      {/* Features Section */}
      <div className="min-h-screen flex flex-col md:flex-row w-full items-center justify-center bg-blue-50 p-8 md:p-10">
  <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center"> {/* Center image on all screen sizes */}
    <img src="src/Images/M11.png" className="w-full md:max-w-lg h-auto rounded-3xl" alt="Marketplace" />
  </div>
  <div className="w-full md:w-1/2 pl-0 md:pl-10">
    <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-4 text-center md:text-left">Marketplace Website</h2>
    <ul className="mb-8 space-y-4">
      <li className="flex items-center">
        <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Drive Conversion, Increase sales and Profitability
      </li>
      <li className="flex items-center">
        <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Real-time Product & Service Promotions
      </li>
      <li className="flex items-center">
        <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Reinforce Branding and Improve Customer Retention
      </li>
      <li className="flex items-center">
        <span className="text-blue-500 text-xl font-bold mr-2">✔</span> Accelerate User Experience
      </li>
      <li className="flex items-center">
        <span className="text-blue-500 text-xl font-bold mr-2">✔</span> On-time Delivery
      </li>
    </ul>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center md:justify-start">
      <button className="bg-black text-white py-2 px-4 rounded-lg flex items-center justify-center">
        <Link to="/ContactUs" className="bg-black text-white px-6 py-2 rounded-full text-center">
          Contact Us
        </Link>
        <span className="ml-2">➡</span>
      </button>
      <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center">
        <span className="mr-2">📞</span> Call Now +91 8600027589
      </button>
    </div>
  </div>
</div>


      {/* Help Section */}
      <div className="w-full bg-blue-50 min-h-screen flex flex-col items-center py-10">
  <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg mt-10">
    <h2 className="text-2xl md:text-3xl font-bold text-center text-blue-500 mb-4">We Can Help You To Create Apps for</h2>
<div className="flex justify-center mb-8">
  <div className="w-64 h-40 md:w-80 md:h-60 bg-blue-200 flex items-center justify-center rounded shadow-lg">
    <div className="text-center">
      <img src="src/Images/M123.png" alt="Ecommerce Types" className="w-32 md:w-48 h-32 md:h-48 mx-auto" />
    </div>
  </div>
</div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center mt-10">
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold text-blue-500">Enhanced communication features between buyers and sellers</h3>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold text-blue-500">Intelligent payment integration to ensure quality services from sellers</h3>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold text-blue-500">Options for sellers to provide variations on the same service in their page</h3>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold text-blue-500">Facilitate online as well as offline services & more</h3>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold text-blue-500">Add a variety of categories or cater to your niche</h3>
      </div>
      <div className="bg-blue-100 p-4 rounded shadow">
        <h3 className="text-xl font-bold text-blue-500">Highly evolved search and filter features</h3>
      </div>
    </div>
  </div>
</div>

      <HeaderL />
      <FAQ />
    </div>
  )
}

export default Marketplace;
