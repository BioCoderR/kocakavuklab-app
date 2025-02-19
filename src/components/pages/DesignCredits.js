import React from "react";
import { Link } from "react-router-dom";
import GoToTopButton from "../common/GoToTopButton";

const DesignCredits = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-gray-100 py-10 px-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-center text-gray-800 text-4xl font-bold mb-6">
          Site Credits
        </h1>

        <div className="text-gray-700 text-lg leading-relaxed">
          <p className="text-center">
            Website designed with {" "}&#x2764; by{" "}
            <Link
              to="https://biocoderr.github.io"
              className="text-blue-600 hover:underline"
            >
              Pranav a.k.a BioCoderR
            </Link>
          </p>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">
              Frameworks & Libraries Used:
            </h2>
            <ul className="list-disc list-inside mt-2">
              <li>
                <Link
                  to="https://react.dev/"
                  className="text-blue-600 hover:underline"
                >
                  React.js
                </Link>
              </li>
              <li>
                <Link
                  to="https://tailwindcss.com/"
                  className="text-blue-600 hover:underline"
                >
                  TailwindCSS
                </Link>
              </li>
              <li>
                <Link
                  to="https://nathansearles.github.io/slidesjs/"
                  className="text-blue-600 hover:underline"
                >
                  Slidejs
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800">Assets Used:</h2>
            <ul className="list-disc list-inside mt-2">
              <li>
                Icons from{" "}
                <Link
                  to="https://react-icons.github.io/react-icons/"
                  className="text-blue-600 hover:underline"
                >
                  react-icons
                </Link>
              </li>
              <li>
                Home Page Cover designed using{" "}
                <Link
                  to="https://www.adobe.com/sensei/generative-ai/firefly.html"
                  className="text-blue-600 hover:underline"
                >
                  Adobe Firefly
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default DesignCredits;