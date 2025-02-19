import React from "react";
import { Link } from "react-router-dom";
import GoToTopButton from "../common/GoToTopButton";
const PrivacyPolicy = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-12 px-6">
      {/* Header */}
      <h1 className="monst-font text-4xl md:text-5xl font-bold text-black mb-8">
        Privacy Policy
      </h1>

      {/* Content Wrapper */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8 md:p-12">
        {/* Section: Overview */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">
            1. An Overview of Data Protection
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-teal-700 mt-4">
            General Information
          </h3>
          <p className="text-gray-700 text-md mt-2 leading-relaxed">
            The following information provides an easy-to-navigate overview of
            how your personal data is handled when visiting our website. The term
            <strong> “personal data”</strong> refers to any information that can be used to
            personally identify you. For more details, please refer to our full
            <strong> Data Protection Declaration</strong> below.
          </p>
        </div>

        {/* Section: Hosting */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">
            2. Hosting
          </h2>
          <p className="text-gray-700 text-md mt-2 leading-relaxed">
            We host our website with{" "}
            <Link
              to="https://vercel.com/"
              className="text-blue-600 hover:underline"
            >
              Vercel
            </Link>
            , a platform providing seamless deployment and infrastructure for
            modern web applications. It allows us to build and publish our
            website efficiently with GNU licensing.
          </p>
        </div>

        {/* Section: Custom Services */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-blue-600">
            3. Custom Services
          </h2>
          <p className="text-gray-700 text-md mt-2 leading-relaxed">
            We offer visitors the opportunity to submit job applications through
            various channels (email, postal mail, or online forms). Below is an
            outline of how we collect and process applicant data while
            maintaining compliance with GDPR and other data protection laws.
          </p>
        </div>

        {/* Section: Handling Applicant Data */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-teal-700">
            Handling Applicant Data
          </h3>
          <p className="text-gray-700 text-md mt-2 leading-relaxed">
            If you submit a job application to us, we process all relevant data
            (e.g., contact details, CV, interview notes) necessary for evaluating
            your application. The legal basis for data processing is based on:
          </p>
          <ul className="list-disc ml-6 text-gray-700 mt-2">
            <li><strong>§ 26 GDPR</strong> (Employment Relationship Negotiation - German Law)</li>
            <li><strong>Art. 6(1)(b) GDPR</strong> (General Contract Negotiations)</li>
            <li>
              <strong>Art. 6(1)(a) GDPR</strong> (Your explicit consent, which can be withdrawn at
              any time)
            </li>
          </ul>
        </div>

        {/* Section: Data Retention Policy */}
        <div className="mb-8">
          <h3 className="text-lg md:text-xl font-semibold text-teal-700">
            Data Retention Policy
          </h3>
          <p className="text-gray-700 text-md mt-2 leading-relaxed">
            If your application does not result in an offer or is withdrawn, we
            retain your data for <strong>up to 6 months</strong> after the end of the
            application process based on our <strong>legitimate interests</strong> (Art.
            6(1)(f) GDPR). This retention allows us to provide evidence in case
            of a legal dispute. Beyond this period, your data will be deleted.
          </p>
          <p className="text-gray-700 text-md mt-2 leading-relaxed">
            If required for ongoing legal proceedings, or if you provide explicit
            consent, data may be stored beyond this timeframe in compliance with
            <strong> Article 6(1)(a) GDPR</strong> and applicable statutory retention
            requirements.
          </p>
        </div>

        {/* Closing Note */}
        <div className="text-gray-700 text-md mt-6 border-t pt-4">
          <p>
            If you have any questions regarding your personal data, please refer
            to our full <strong>Data Protection Declaration</strong> or reach out to us
            directly.
          </p>
        </div>
      </div>
      <GoToTopButton />
    </div>
  );
};

export default PrivacyPolicy;