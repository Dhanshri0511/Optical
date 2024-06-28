import React from 'react';
import FAQ from '/src/FAQ';
import HeaderL from '/src/HeaderL';

const Tracking = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">Tracking And Delivery App Development</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "Turn your Simple Ideas to User-friendly & Smartly-Coded Tracking & Delivery Apps!"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/tracking.png' className="w-full h-auto" />
          </div>
          </div>

      {/* Benefits Section */}
      <div className='flex flex-col md:flex-row gap-10 md:gap-16 bg-blue-50 mb-10 p-8 md:p-10'>
      <div className="w-full md:w-2/3 lg:w-1/2 mt-6">
  <img src='src/Images/TD1.png' className="w-full h-auto" />
</div>

        <div className="p-4 md:p-8">
          <h2 className="text-2xl md:text-3xl text-blue-700 font-bold mb-6">Benefits of Having Tracking Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg text-black-600">
            <ul className="space-y-2 w-auto">
              <li>⚫ Real-time tracking</li>
              <li>⚫ 24/7 app facilities</li>
              <li>⚫ Trace exact locations of friends, family members, employees, users</li>
              <li>⚫ Maintenance & Support</li>
              <li>⚫ Trace accurate positions/locations of assets</li>
              <li>⚫ 24*7 Availability (Transaction convenience)</li>
              <li>⚫ Decreased operational costs</li>
              <li>⚫ Marketing Perks (customer segmentation, promotions, etc)</li>
              <li>⚫ Extended Reach</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row items-center justify-center bg-white p-8 m-10 gap-10 md:gap-16">
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">App Development Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> User Authentication and Authorization
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Push Notifications
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Navigation
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Responsive Design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Social Integration
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Geolocation
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Payment Integration
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
                <span className="text-blue-500 mr-2">»</span> UI/UX Design
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">»</span> Analytics and Reporting
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex justify-center">
          <img src="src/Images/TD3.png" className="w-auto" />
        </div>
      </div>
      <HeaderL />
      <FAQ />
    </div>
  );
}

export default Tracking;
