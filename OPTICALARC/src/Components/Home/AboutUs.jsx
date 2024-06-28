import HeaderL from '/src/HeaderL';

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 sm:mt-20 mb-10 sm:mb-20">
        <div className="w-full sm:w-1/2 px-4 sm:px-8 mb-6 sm:mb-0">
          <h2 className="text-5xl sm:text-8xl font-bold mb-4 text-blue-900">About Us</h2>
          <p className="text-2xl sm:text-4xl leading-8 mb-4">
            Where Imagination Meets Execution.
          </p>  
          <p className="text-gray-500">
            Optical Arc helps users all over the world to improve their business by using better software. We were founded in 2020 and since then we have been delivering the best apps for you.
          </p> 
        </div>
        <div className="w-full sm:w-1/2 px-4 sm:px-0">
          <img src='src/Images/team.png' alt="About Us" className="w-full h-auto" />
        </div>
      </div>

      <HeaderL />

      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 sm:mt-20 mb-10 sm:mb-20">
        <div className="w-full sm:w-1/2 px-4 sm:px-8 mb-6 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Who We Are?</h2>
          <p className="text-lg sm:text-xl leading-7 mb-4">
            Optical Arc is a team of trusted mobile app experts passionate about converting simple ideas to amazing mobile apps. Since our inception in 2009, we always aim to be part of successful entrepreneurial journeys by helping innovative people and businesses attain their dreams and vision in appifying their business.
            We have handled 350+ projects across the globe including Fortune 500 Companies. These projects include technologies based on iOS, Android, Firebase, React native, Corona, Xamarin and domains such as React, Node.js, DBMS, JAVA etc…
          </p>  
        </div>
        <div className="w-full sm:w-1/2 px-4 sm:px-0">
          <img src='src/Images/abtus.png' alt="About Us" className="w-full h-auto" />
        </div>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-center mt-10 sm:mt-20 mb-10 sm:mb-20">
        <div className="w-full sm:w-1/2 px-4 sm:px-8 mb-6 sm:mb-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-7">Things that make our work beautiful</h2>
          <div className="text-lg leading-7">
            <div className="flex items-center gap-5 mb-2">
              <img src="src/Images/bulb.jpg" className="w-10" alt="Icon" />
              <p>Create ideas for unique concepts</p>
            </div>
            <div className="flex items-center gap-5 mb-2">
              <img src="src/Images/file.png" className="w-10" alt="Icon" />
              <p>Solve complex issues</p>
            </div>
            <div className="flex items-center gap-5 mb-2">
              <img src="src/Images/people.jpg" className="w-10" alt="Icon" />
              <p>Collaborate with experts and professionals</p>
            </div>
            <div className="flex items-center gap-5 mb-2">
              <img src="src/Images/time.png" className="w-10" alt="Icon" />
              <p>Fast iterating</p>
            </div>
            <div className="flex items-center gap-5 mb-2">
              <img src="src/Images/benifits.png" className="w-10" alt="Icon" />
              <p>Deliver result-driven products</p>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-1/2 px-4 sm:px-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg sm:text-xl leading-7 mb-4">
            "At Optical Arc, we're on a mission to redefine possibilities in software solutions. We design, develop, and deliver exceptional products that exceed expectations, 
            focusing on reliability, scalability, and user-centricity. Committed to your success, we also offer remote staffing and leverage AI to empower your digital transformation. 
            Choose Optical Arc for innovation that goes beyond boundaries."
          </p> 
        </div>
      </div>

      <div className="bg-gray-100">
        <div className="max-w-6xl mx-auto py-12">
          <h1 className="text-3xl sm:text-5xl font-bold text-center mb-12">Our Team</h1>
          <div className="text-center mb-12">
            <img src="src/Images/opticalarc.jpg" className="w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-4" alt="Team member" />
            <h2 className="text-lg sm:text-xl font-semibold">Keshav Pathade</h2>
            <p className="text-gray-600">Director</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <img src="src/Images/1.jpg" className="w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-4" alt="Team member" />
              <h3 className="text-lg sm:text-xl font-semibold">ABC</h3>
              <p className="text-gray-600">Head of Business Development</p>
            </div>
            <div className="text-center">
              <img src="src/Images/2.jpg" className="w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-4" alt="Team member" />
              <h3 className="text-lg sm:text-xl font-semibold">ABC</h3>
              <p className="text-gray-600">Account Manager</p>
            </div>
            <div className="text-center">
              <img src="src/Images/3.jpg" className="w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-4" alt="Team member" />
              <h3 className="text-lg sm:text-xl font-semibold">ABC</h3>
              <p className="text-gray-600">HR Manager</p>
            </div>
            <div className="text-center">
              <img src="src/Images/4.jpg" className="w-28 sm:w-40 h-28 sm:h-40 rounded-full mx-auto mb-4" alt="Team member" />
              <h3 className="text-lg sm:text-xl font-semibold">ABC</h3>
              <p className="text-gray-600">Project Manager</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;
