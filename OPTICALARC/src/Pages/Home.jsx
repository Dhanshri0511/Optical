import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import FAQ from '/src/FAQ';
import HeaderL from '/src/HeaderL';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const services = [
    { title: 'iOS App Development', description: 'Developing state-of-the-art iOS apps for the latest iPhones and iPads.' },
    { title: 'Android App Development', description: 'Creating user-friendly and high-performance Android apps for all devices.' },
    { title: 'UI/UX App Design', description: 'Crafting visually appealing and intuitive app designs for an excellent user experience.' },
    { title: 'React Native Development', description: 'Building cross-platform mobile apps with React Native for optimal performance.' },
    { title: 'iOS App Development', description: 'Developing state-of-the-art iOS apps for the latest iPhones and iPads.' },
    { title: 'Android App Development', description: 'Creating user-friendly and high-performance Android apps for all devices.' },
  ];

  return (
    <div className="bg-white font-sans">
      
      {/* Hero Section */}
      <div className="relative text-center py-16 bg-cover bg-center h-screen md:h-600" style={{ backgroundImage: "url('src/Images/home1.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h1 className="text-4xl font-bold mt-20 md:mt-10 mb-10 text-white">Converting Simple Ideas into Amazing Mobile Apps!</h1>
          <p className="text-lg mb-8 text-white">Providing innovative app solutions for diverse industries with expertise.</p>
          {/* <button className="bg-blue-500 text-white px-4 py-2 rounded">Request Your Free Quote</button> */}
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="container mx-auto flex flex-wrap justify-center items-center">
          <div className="w-full lg:w-1/2 p-4">
            <img src='src/Images/oserv.png' alt="About Us" className="w-full h-auto object-cover" />
          </div>
          <div className="w-full lg:w-1/2 p-4 flex flex-wrap">
            {services.map((service, index) => (
              <div key={index} className="w-full md:w-1/2 p-4">
                <div className="bg-white p-6 rounded shadow">
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HeaderL />

      {/* Clients Section */}
      {/* <section className="py-16 bg-gray-100">
        <h2 className="text-3xl text-center mb-8">Our <span className='text-5xl font-bold'>Clients</span></h2>
        <div className="container mx-auto flex flex-wrap justify-center">
          {['Client1', 'Client2', 'Client3', 'Client4', 'Client5', 'Client6'].map((client, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-4">
              <div className="bg-white p-6 rounded shadow">
                <img src={`/path/to/${client.toLowerCase()}.png`} alt={client} className="mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* <div>
        <h2 className="text-3xl font-semibold text-center mb-8 mt-10">Clients Testimonials</h2>
        <div className='flex flex-wrap gap-10 justify-center m-4 md:m-12'>
          {[...Array(3)].map((_, index) => (
            <Card key={index} color="transparent" shadow={true} className="w-full max-w-md md:w-1/2 lg:w-1/3 border">
              <CardHeader
                color="transparent"
                floated={true}
                shadow={true}
                className="mx-0 flex items-center gap-4 p-3"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src="src/Images/people1.jpg"
                  className='rounded-full w-20 h-20'
                />
                <div className="flex w-full flex-col gap-0.5">
                  <div className="flex-col items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      Tania Andrew
                    </Typography>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, idx) => (
                        <img key={idx} src='src/Images/staricon.png' alt="Star" className="w-5 h-5" />
                      ))}
                    </div>
                  </div>
                  <Typography color="blue-gray">Frontend Lead @ Google</Typography>
                  <CardBody className="mb-6 p-0">
                    <Typography>
                      &quot;I found solution to all my design needs from Creative Tim. I use
                      them as a freelancer in my hobby projects for fun! And its really
                      affordable, very humble guys !!!&quot;
                    </Typography>
                  </CardBody>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className='flex flex-wrap gap-10 justify-center bg-blue-50 p-10'>
         
          <div className="w-full lg:w-1/2 bg-blue-50 p-8">
            <h1 className="text-5xl font-bold">
              <span className="text-black">Staffing</span> <span className="text-gray-700">& Recruiting</span>
            </h1>
            <p className="mt-4 text-gray-600">
              The traditional Hiring process involves multiple time-consuming stages. We offer you an opportunity to hire skillful developers at simple taps. Improve your hiring process productively with us and hire developers or designers with prodigious experiences in your firm. Try our one-stop talent pool for diverse job positions now.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h2 className="text-xl font-bold text-black">Hire on Payroll</h2>
                <p className="text-gray-600">
                  Find the best developers to join your firm as reliable permanent Developers.
                </p>
              </div>
              <div>
                <h2 className="text-xl font-bold text-black">Hire on Contract Basis</h2>
                <p className="text-gray-600">
                  Manage developers or designers on a contract basis and gain maximum benefits for your firm.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </div> */}
      <div className="bg-blue-50 py-10 px-5 sm:px-10 md:px-20 lg:px-40 xl:px-60 mt-10">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Staffing & Recruiting</h1>
        <p className="text-gray-700 mb-8">
          The traditional Hiring process involves multiple time-consuming stages. We offer you an opportunity to hire skillful developers at simple taps. Improve your hiring process productively with us and hire developers or designers with prodigious experiences in your firm. Try our one-stop talent pool for diverse job positions now.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 md:mb-0 md:w-1/2 md:mr-2">
          <h2 className="text-2xl font-bold mb-2">Hire on Payroll</h2>
          <p className="text-gray-700">
            Find the best developers to join your firm as reliable permanent Developers.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md md:w-1/2 md:ml-2">
          <h2 className="text-2xl font-bold mb-2">Hire on Contract Basis</h2>
          <p className="text-gray-700">
            Manage developers or designers on a contract basis and gain maximum benefits for your firm.
          </p>
        </div>
      </div>
      <button className="mt-8 bg-blue-500 text-white px-6 py-3  rounded-full hover:bg-blue-600">
              <Link to="/Careers">Hire Developers Now →</Link>
            </button>
    </div>
  
      <FAQ />
    </div>
  );
};

export default HomePage;
