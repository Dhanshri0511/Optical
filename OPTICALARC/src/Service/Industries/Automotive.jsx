import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import FAQ from "../../FAQ";
import { Link } from 'react-router-dom';


const featuresLeft = [
  "Locking & unlocking",
  "Seating management",
  "Engine start/stop",
  "Temperature control"
];

const featuresRight = [
  "Automatic Routing",
  "Automatic Allocation",
  "Vehicle Health Monitoring"
];

const Automotive = () => {
  return(
      <div>
          <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">Automotive Industry</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
                  "Create different automotive apps for better management, efficiency and ROI !"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/automotive.png' className="w-full h-auto" />
          </div>
          </div>

  <div className="bg-blue-50 py-12 mt-20 ">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Why Choose US?</h2>
      <div className="flex flex-wrap justify-center gap-8">
     
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="text-blue-600 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </svg>
          </div>
          <p>We cater innovative software and applications to help the automotive sector to be more sustainable and cost-effective</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="text-blue-600 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 1.74.76 3.41 2.06 4.59L12 22l4.94-8.41C18.24 12.41 19 10.74 19 9c0-3.87-3.13-7-7-7zm0 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
            </svg>
          </div>
          <p>Help upgrade the traditional models with emerging technologies</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="text-blue-600 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 3h18v2H3V3zm2 3h14v2H5V6zm2 3h10v2H7V9zm2 3h6v2H9v-2zm4 3H11v2h2v-2z" />
            </svg>
          </div>
          <p>Through automotive apps, we create real-time digital experiences</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="text-blue-600 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3 12l18-6-7 18-2-10-9-2zm-1-2.2l4.24-4.24 1.41 1.41L4.41 9.2 2 7.8zm18.6.6l1.4-1.4 4.24 4.24-1.4 1.4L20.6 9.2z" />
            </svg>
          </div>
          <p>Build innovative solutions that help you address competitive pressures, customer demands, and new digital trends</p>
        </div>
        <div className="flex flex-col items-center text-center max-w-xs">
          <div className="text-blue-600 mb-4">
            <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4.15-.89 5.65-2.34L19.78 12c-.25.17-.51.34-.78.49l-.55.3-.45.24L12 19.72 5 13.02V11h1.24c-.44-.9-.68-1.88-.68-2.9 0-4.08 3.04-7.45 7-7.94V2h2v1.05c1.63.21 3.13.83 4.35 1.76L18.9 4.65C17.67 3.81 15.93 3 14 3s-3.67.81-4.9 1.65L12 6.5 15 4v4l-4 4zm0-8c-1.48 0-2.75.81-3.43 2.05l.91 1.36A2.997 2.997 0 0 1 12 6a3 3 0 0 1 3 3c0 .35-.06.69-.18 1.01l1.29 1.03c.1-.27.18-.57.18-.87 0-1.66-1.34-3-3-3zM4 22h16v-2H4v2zm2-4h12v-2H6v2z" />
            </svg>
          </div>
          <p>End-to-end automotive solutions that help build customers their own brand</p>
        </div>
      </div>

      
      <div className="mt-20">
      <Link to="/ContactUs" className="bg-blue-700 hover:bg-blue-500 text-white px-6 py-2 rounded-full text-center">
                        Contact Us
                    </Link>
      </div>
    </div>
  </div>


  <div className="bg-blue-50 py-12 mt-20">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold mb-20">Features we have worked on</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          {featuresLeft.map((feature, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start">
              <span className="text-blue-600 mr-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V10a1 1 0 01-1 1H7.707l3.647 3.646a.5.5 0 11-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 11.708.708L7.707 9H10a1 1 0 011 1V6.586z" clipRule="evenodd" />
                </svg>
              </span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
        <div className="space-y-4">
          {featuresRight.map((feature, index) => (
            <div key={index} className="flex items-center justify-center md:justify-start">
              <span className="text-blue-600 mr-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11.414V10a1 1 0 01-1 1H7.707l3.647 3.646a.5.5 0 11-.708.708l-4.5-4.5a.5.5 0 010-.708l4.5-4.5a.5.5 0 11.708.708L7.707 9H10a1 1 0 011 1V6.586z" clipRule="evenodd" />
                </svg>
              </span>
              <p>{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>

    <FAQ />

</div>
  )
}
export default Automotive;
