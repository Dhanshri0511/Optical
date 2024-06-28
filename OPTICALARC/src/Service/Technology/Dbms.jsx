import HeaderL from "../../HeaderL";

const Dbms = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <div className="w-full lg:w-1/2 px-8">
              <h2 className="text-4xl md:text-7xl font-bold mb-4 mt-10 text-blue-900">DBMS</h2>
              <p className='text-gray-700 mt-5 mb-5 text-lg'>
              "Build Better Mobile Apps to Grow your Business with DBMS!"
              </p>
          </div>
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
              <img src='src/Images/dbmss.png' className="w-full h-auto" />
          </div>
          </div>


            

            {/* Content Section */}
            <div className="m-10 mt-10 md:mt-28">
                <h2 className="text-2xl md:text-4xl font-bold text-blue-900 mb-6">What is DBMS Software?</h2>
                <p className="mb-4">The DBMS program is the sole item that has the capability to enter the database, extract information from it, or save information. The software functions as a bridge between the databases and application. When you utilize an online application, software mobile application. All information and data are stored in the database. The DBMS software connects your applications with the database.</p>
                <p className="mb-4">A Database Management System, or DBMS, is a critical component of modern business operations and software applications. It serves as the backbone for managing data efficiently, ensuring data integrity, and enabling organizations to make informed decisions based on their data.</p>
                <p className="mb-4">A Database Management System is software that allows users to define, create, maintain, and manage a database. It acts as an intermediary between the user, the database, and the applications that need access to the data. DBMS systems provide a structured way to store, retrieve, and manipulate data.</p>
            </div>

            {/* Footer and Navigation */}
            <HeaderL />
        </div>
    );
}

export default Dbms;
