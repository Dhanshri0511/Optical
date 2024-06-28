import React from 'react';
import FAQ from '../../FAQ';
import HeaderL from '../../HeaderL';

const services = [
    'Data-driven, cloud hosted mobile app development strategies',
    'Use of apt optimization tools' ,
    'Conceptualize, Design, Develop & Test apps',
    'Easily collaborate apps across devices', 
    'Authentication via multiple Auth providers',
    'Long-running back-end processes',
    'Real-time communication features', 
    'Deploy apps on or before expected dates',
    'Real-time work processes',
    'Reduced projects costs',
];

const Firebase = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">Firebase Development Services</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "Build Better Mobile Apps to Grow your Business with Firebase!"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/firebase.png' className="w-full h-auto" />
          </div>
          </div>


            

            

            {/* Main Content Section */}
            <div className="flex flex-col md:flex-row items-center p-6 gap-10 mt-10 bg-blue-50">
                <div className="md:w-1/2 md:pl-12">
                    <h1 className="text-3xl md:text-4xl font-bold my-6 text-center md:text-left">Services</h1>
                    <ul className="space-y-4">
                        {services.map((service, index) => (
                            <li key={index} className="flex items-center text-lg">
                                <div className="text-blue-500 text-2xl mr-2">⬤</div>
                                {service}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/2 flex flex-col items-center mt-10 md:mt-0">
                    <p className='text-lg text-center md:text-left'>
                        Optical Arc as a Firebase development company has been implementing Firebase on many of our client projects and our in-house apps. As Firebase is an evolving technology landscape, it is overloaded with features such as back-end services, cloud storage functions, etc., which makes it simpler and faster to create apps for various domains.
                    </p>
                    <p className='text-lg text-center md:text-left mt-4'>
                        As a premier mobile app development company, Firebase is one of Redbytes’ platforms of choice when it comes to building the back-end for iPhone, Android, or web apps. Our team of developers regularly leverage Firebase’s real-time database, user authentication, and static hosting for apps from big brands to funded start-ups.
                    </p>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ />
        </div>
    );
}

export default Firebase;
