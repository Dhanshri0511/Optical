import React from 'react';
import FAQ from '/src/FAQ';
import HeaderL from '/src/HeaderL';

const advantages = [
    { title: 'Better ROI', icon: '✔️' },
    { title: 'Get Instant Updates', icon: '📤' },
    { title: 'Learning with Entertainment', icon: '📖' },
    { title: 'Enhanced Communication', icon: '💬' },
    { title: '24/7 Availability', icon: '👥' },
    { title: 'Easier School Management', icon: '🏫' },
    { title: 'Cost Savings', icon: '💰' },
    { title: 'Student-friendly UI', icon: '📱' },
    { title: 'Systematic & Advanced Learning', icon: '➕' },
    { title: 'Track Student Progress', icon: '📊' },
];

const features = [
    { title: 'Easy Authentication', icon: '🌀' },
    { title: 'User-friendly UI', icon: '👥' },
    { title: 'Push Notifications', icon: '📩' },
    { title: 'Regular Price Tests', icon: '🏷️' },
    { title: 'Tracking (for parents/teachers)', icon: '📍' },
    { title: 'Content Management', icon: '📝' },
    { title: 'Online Classes', icon: '💻' },
    { title: 'Timetable Scheduling', icon: '📅' },
    { title: 'Audio & Video Contents', icon: '🎥' },
];

const Educationnn = () => {
    return (
      
        <div>

            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">Educational App Development</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "Craft & Code the Best Mobile Apps for a Better"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/education.png' className="w-full h-auto" />
          </div>
          </div>

            

            <h1 className="text-2xl lg:text-3xl font-bold my-6 text-center mt-20">Advantages</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 m-4 lg:m-10 p-4">
                {advantages.map((adv, index) => (
                    <div key={index} className="flex items-center bg-gray-100 p-4 rounded shadow">
                        <div className="text-red-500 text-3xl mr-4">{adv.icon}</div>
                        <div>
                            <h3 className="text-lg font-semibold">{adv.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className='mb-20'>
                <HeaderL />
            </div>

            <h1 className="text-2xl lg:text-3xl font-bold my-6 text-center mt-20">Features</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 lg:p-14">
                {features.map((feature, index) => (
                    <div key={index} className="flex flex-col items-center bg-gray-100 p-6 rounded shadow">
                        <div className="text-red-500 text-3xl lg:text-4xl mb-4">{feature.icon}</div>
                        <h3 className="text-lg lg:text-xl font-semibold text-center"/>{feature.title}
                    </div>
            
                ))}
            </div>

            <FAQ />
        </div>
    );
};

export default Educationnn;
