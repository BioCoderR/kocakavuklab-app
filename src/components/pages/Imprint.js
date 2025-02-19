import React from "react";
import { Link } from "react-router-dom";
import GoToTopButton from "../common/GoToTopButton";
const Imprint = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <h1 className="monst-font text-4xl md:text-5xl font-bold text-black mb-8">
        Imprint
      </h1>

      {/* Main Content Wrapper */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        {/* Information Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Information pursuant to Sect. 5 German Telemedia Act (TMG)
          </h2>
          <p className="text-gray-700 text-md mt-2">
            Computational Oncology Lab <br />
            University Hospital Essen (AöR) <br />
            Hufelandstraße 55, 45147 Essen
          </p>
        </div>

        {/* Representation Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Represented by:
          </h2>
          <p className="text-gray-700 text-md mt-2">
            Dr. med. Dr. rer. nat. Emre Kocakavuk
          </p>
        </div>

        {/* Contact Information */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Contact
          </h2>
          <p className="text-gray-700 text-md mt-2">
            Phone:{" "}
            <Link
              to="tel:+49-(0)201-723-0"
              className="text-blue-600 hover:underline"
            >
              +49-(0)201-723-0
            </Link>
          </p>
          <p className="text-gray-700 text-md mt-1">
            E-mail:{" "}
            <Link
              to="mailto:kocakavuklab@gmail.com"
              className="text-blue-600 hover:underline"
            >
              kocakavuklab@lab.de
            </Link>
          </p>
        </div>

        {/* Editorial Responsibility */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Person responsible for editorial content
          </h2>
          <p className="text-gray-700 text-md mt-2">
            Dr. med. Dr. rer. nat. Emre Kocakavuk
          </p>
        </div>

        {/* EU Dispute Resolution */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            EU Dispute Resolution
          </h2>
          <p className="text-gray-700 text-md mt-2">
            The European Commission provides a platform for online dispute
            resolution (ODR):{" "}
            <Link
              to="https://ec.europa.eu/consumers/odr/"
              className="text-blue-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </Link>
            . Our e-mail address can be found above in the site notice.
          </p>
        </div>

        {/* Consumer Arbitration Board */}
        <div>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
            Dispute Resolution Proceedings
          </h2>
          <p className="text-gray-700 text-md mt-2">
            We are not willing or obliged to participate in dispute resolution
            proceedings in front of a consumer arbitration board.
          </p>
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default Imprint;