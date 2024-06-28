import React from 'react';
import FAQ from '/src/FAQ';
import HeaderL from '/src/HeaderL';

const Android = () => {
    const features = [
        { title: 'Android App Consultation' },
        { title: 'Android App Designing (UI/UX)' },
        { title: 'Custom Android App Development' },
        { title: 'App Testing' },
        { title: 'Google Play Deployment' },
        { title: 'App Support & Maintenance' },
        { title: 'Hire an Android Developer' },
        { title: 'Game Development' },
        { title: 'Convert Old Books, 2D games to Android Apps' },
    ];

    return (
        <div>
            {/* Hero Section */}


            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">Android App Development</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "We will help you to convert your simple, awesome idea to a highly polished custom Android app that can generate customer engagement and ROI"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-5">
              <img src='src/Images/android.png' className="w-full h-auto" />
          </div>
          </div>
           



            

            {/* Features Section */}
            <div className="m-10 mt-10 md:mt-20">
                <h1 className="text-3xl md:text-4xl font-bold my-6 text-center">Features</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center bg-blue-50 p-6 rounded shadow">
                            <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Key Approaches Section */}
            <div className="flex flex-col md:flex-row items-center justify-center bg-blue-50 p-8 rounded-lg mt-10 md:mt-20">
                <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
                    <img src='src/Images/mobile.jpg' className="w-1/2 h-auto" alt="Mobile App Development" />
                </div>
                <div className="w-full md:w-1/2 md:pl-8">
                    <h1 className='text-2xl md:text-3xl font-bold text-blue-900 mb-6 text-center md:text-left'>OUR KEY ANDROID APP DEVELOPMENT APPROACHES</h1>

                    <div className="mb-6">
                        <h1 className='text-lg md:text-xl font-semibold text-blue-900 mb-3'>Native Android App Development</h1>
                        <p className='text-base md:text-lg text-blue-900'>These apps are specific to Android platform that uses programming languages and tools that Android platform support.</p>
                        <p className='text-base md:text-lg text-blue-900 mt-2'>- Eg: Android Studio</p>
                    </div>

                    <div>
                        <h1 className='text-lg md:text-xl font-semibold text-blue-900 mb-3'>Hybrid Android App Development</h1>
                        <p className='text-base md:text-lg text-blue-900'>These apps are developed using standard web technologies.</p>
                        <p className='text-base md:text-lg text-blue-900 mt-2'>- Eg: HTML, JavaScript, and CSS</p>
                    </div>
                </div>
            </div>

            {/* Footer and FAQ */}
            <HeaderL />
            <FAQ />
        </div>
    );
}

export default Android;
