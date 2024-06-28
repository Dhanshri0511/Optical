import React from 'react';
import FAQ from '/src/FAQ';
import HeaderL from '/src/HeaderL';
import { Link } from 'react-router-dom';


const reasons = [
    { text: 'Better Collaboration' },
    { text: 'Increased ROI' },
    { text: 'Achieve Automation' },
    { text: 'Security & Efficiency' },
    { text: 'Reduced Costs' },
    { text: 'Improved Productivity' },
    { text: 'Greater Portability' },
];

const apps = [
    'Task-based Employee Apps',
    'BI and Analytics apps',
    'Co-operate Training Apps',
    'Automated Field Force apps',
    'Industry-specific apps',
    'Productivity Apps',
    'Document Management Solutions',
];

const services = [
    'Mobile app architecture',
    'Complete Application Management',
    'Source code management',
    'Branding & customization',
    'Mobile app testing',
];

const TechnologyCard = ({ name }) => (
    <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full mr-4">
            <span className="text-white text-xl">{"</>"}</span>
        </div>
        <p className="text-lg font-medium">{name}</p>
    </div>
);

const Enterprises = () => {
    return (
        <div>
            <div className="flex flex-col md:flex-row items-center justify-center">
                <div className="w-full md:w-1/2 pl-8 pr-8 mt-10">
                    <h2 className="text-3xl md:text-7xl font-bold mb-4 text-blue-900">Enterprise Mobile App Development</h2>
                    <p className="text-gray-700 mt-5 text-lg">
                        "Get the most out for your business with our enterprise mobile app solutions!"
                    </p>
                </div>
                <div className="w-full md:w-1/2">
                    <img src="src/Images/Enterprises.png" className="w-full h-auto" />
                </div>
            </div>

            <div className="bg-blue-50 py-8 px-4">
                <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
                    Why Should You Invest in Enterprise App Development?
                </h2>
                <div className="flex flex-col md:flex-row gap-4 md:gap-96 m-10 items-center justify-center">
                    <div className="space-y-2">
                        {reasons.slice(0, 4).map((reason, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-blue-700 mr-2">✔</span>
                                <p>{reason.text}</p>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-2">
                        {reasons.slice(4).map((reason, index) => (
                            <div key={index} className="flex items-center">
                                <span className="text-blue-700 mr-2">✔</span>
                                <p>{reason.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="bg-blue-50 py-8 px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-10">
                    <div>
                        <h2 className="text-2xl font-bold text-blue-700 mb-6">Enterprise Apps We Develop</h2>
                        <ul className="space-y-2">
                            {apps.map((app, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-blue-600 mr-2">»</span>
                                    <p>{app}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-blue-700 mb-6">Enterprise app development Services</h2>
                        <ul className="space-y-2">
                            {services.map((service, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="text-blue-700 mr-2">»</span>
                                    <p>{service}</p>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <Link to="/ContactUs" className="bg-black text-white px-6 py-2 rounded-full text-center">
                        Contact Us
                    </Link>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full">Call Now +91 8600027589</button>
                        </div>
                    </div>
                </div>
            </div>

            <HeaderL />

            <div className="flex flex-col md:flex-row mb-20 items-center justify-center">
    <div className="w-full md:w-1/2 mt-12 md:mt-20 lg:mt-72">
        <img src="src/Images/tech.jpg" className="w-full md:w-3/4 h-auto xl:m-10" />
    </div>
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-12 md:mt-0 md:ml-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 md:mb-20 lg:mb-28">Technologies Used</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                JavaScript
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                iOS
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                HTML5
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                React
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                Python
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                Firebase
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                Java
            </div>
            <div className="p-4 bg-blue-50 w-full md:w-auto h-24 font-semibold rounded shadow text-center mb-4 md:mb-0">
                Node.Js
            </div>
        </div>
    </div>
</div>

            <FAQ />
        </div>
    );
}

export default Enterprises;
