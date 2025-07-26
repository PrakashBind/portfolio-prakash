import React from "react";
import { useNavigate } from "react-router-dom";

const Error: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-darkblue text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl md:text-9xl font-bold">404</h1>
        <h2 className="text-2xl md:text-3xl mt-4 font-semibold">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-300 text-sm md:text-base">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
};

export default Error;
