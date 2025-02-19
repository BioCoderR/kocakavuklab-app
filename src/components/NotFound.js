import React from "react";
import { useNavigate } from "react-router-dom";
import GoToTopButton from "./common/GoToTopButton";

function NotFound() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/"); // Navigate to the "Overview" page
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen px-6 text-center bg-gray-100">
      {/* Error Message Section */}
      <div className="max-w-4xl flex flex-col-reverse items-center justify-between lg:flex-row">
        
        {/* Left: Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
            Oops! Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Sorry, we couldn't find the page you were looking for.
          </p>
          
          {/* Back Home Button */}
          <button
            onClick={handleClick}
            className="mt-6 px-6 py-3 text-lg font-medium text-white bg-indigo-600 rounded-md shadow-md hover:bg-rose-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Go back to Home"
          >
            Go Back Home
          </button>
        </div>

        {/* Right: Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img 
            src="notfound.svg" 
            alt="404 Error - Page Not Found" 
            className="w-full max-w-sm lg:max-w-md"
          />
        </div>
      </div>
      <GoToTopButton/>
    </div>
  );
}

export default NotFound;