import HeaderL from '/src/HeaderL';
import FAQ from '/src/FAQ';
import { Link } from 'react-router-dom';


const Ecommerce = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
                <div className="w-full lg:w-1/2 px-8">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-4 mt-10 text-blue-900">Ecommerce App Development</h2>
                    <p className='text-gray-700 mt-5 mb-5 text-lg md:text-xl'>
                        "Stand out online & sell more with incredible Ecommerce App Solutions"
                    </p>
                </div>
                <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
                    <img src='src/Images/ecommerce.png' className="w-full h-auto" />
                </div>
            </div>

            <div className="p-6 bg-blue-50 min-h-screen flex flex-col items-center mt-20">
                <div className="w-full max-w-7xl bg-white p-6 rounded-lg shadow-lg mt-28">
                    <h2 className="text-2xl font-bold text-center text-blue-500 mb-4">Types of Ecommerce Applications</h2>
                    <p className="text-center mb-8">
                        Here are the different types of eCommerce applications. Choose the one that suits your business.
                    </p>
                    <div className="flex justify-center mb-8">
                        <div className="w-64 h-40 bg-blue-200 flex items-center justify-center rounded shadow-lg">
                            <div className="text-center">
                                <img src="src/Images/earth.png" alt="Ecommerce Types" className="w-32 h-32 mx-auto"/>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="text-xl font-bold text-blue-500">B2B</h3>
                            <p>Amazon, Shopify</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="text-xl font-bold text-blue-500">C2B</h3>
                            <p>Freelancer, Fiverr</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="text-xl font-bold text-blue-500">C2C</h3>
                            <p>E-Bay, Craigslist, OLX, UBER, OLA, Quikr</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="text-xl font-bold text-blue-500">B2A</h3>
                            <p>E-government, Employment, Legal documents</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="text-xl font-bold text-blue-500">B2C</h3>
                            <p>Amazon, Flipkart</p>
                        </div>
                        <div className="bg-blue-100 p-4 rounded shadow">
                            <h3 className="text-xl font-bold text-blue-500">C2A</h3>
                            <p>Distance learning, Tax returns, Payments, Appointments</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='mb-20'>
                <HeaderL/>
            </div> 

            <div className="p-6 bg-blue-50 min-h-screen flex w-full items-center justify-center">
                <div className="bg-white p-10 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-10 md:gap-10 lg:gap-60 w-full max-w-7xl">
                    <div className="w-full md:w-1/2">
                        <img src="src/Images/pocket.jpg" alt="Why Choose Us" className="w-full h-auto rounded-3xl" />
                    </div>
                    <div className="w-full md:w-1/2 md:pl-10">
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
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                        <Link to="/ContactUs" className="bg-black text-white px-6 py-2 rounded-full text-center">
                        Contact Us
                    </Link>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded-lg flex items-center justify-center w-full md:w-auto">
                                <span className="mr-2">📞</span> Call Now +91 8600027589
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-5xl font-bold text-center mt-20 text-blue-900">Our Methodology</h2>
                <div className="flex flex-col md:flex-row gap-10 justify-center p-10"> 
                    <div className="flex flex-col items-center">
                        <img 
                            src="src/Images/discovery.jpg"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                        />
                        <p className='text-center text-xl mt-5'>Discovery</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="src/Images/ui.png"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                        />
                        <p className='text-center text-xl mt-5'>UI/UX Design</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="src/Images/development.jpg"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                        />
                        <p className='text-center text-xl mt-5'>Development</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="src/Images/quality.png"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                        />
                        <p className='text-center text-xl mt-5'>Quality Assurance</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img 
                            src="src/Images/support.jpg"
                            className="w-32 h-32 object-cover rounded-full border-4 border-gray-300"
                        />
                        <p className='text-center text-xl mt-5'>Post Launch Support</p>
                    </div>
                </div>
            </div>
    
            <FAQ/>
        </div>
    )
}

export default Ecommerce;
