import React, { useState } from "react";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton";
const JoinUs = () => {
    const [showJobs, setShowJobs] = useState(false); // Controls visibility of job positions

    // Job positions data
    const jobPositions = [
        {
            title: "Open PhD Position Available",
            description: "We are looking for talented PhD candidates to join our research team.",
            status: "Open", // Change to "Closed" if needed
            applyLink: "https://karriere.ume.de/job-finder/?get_job=12175",
        },
        {
            title: "Open Postdoc Position",
            description: "We are currently accepting applications for Postdoctoral research positions.",
            status: "Open",
            applyLink: "https://karriere.ume.de/job-finder/?get_job=12180",
        },
    ];

    return (
        <div className="join-us-container flex flex-col items-center justify-center min-h-screen bg-blue-50">
            {/* Hero Section */}
            <section className="w-full max-w-7xl py-16 px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">
                    {/* Text Section */}
                    <div className="flex flex-col items-center md:items-start">
                        <PageHeader title="Join Our Research Team" subtitle=""/>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
                            We are constantly looking for highly motivated <strong>MD-</strong>, 
                            <strong>PhD-</strong>, 
                            and <strong>Post-Doctoral</strong> candidates! 
                            If you are interested in working in a dynamic, devoted, 
                            and well-funded research team with a strong translational background and close 
                            interactions with clinical teams, we invite you to send your application.
                        </p>

                        {/* Apply Button (Hidden after Click) */}
                        {!showJobs && (
                            <button
                                onClick={() => setShowJobs(true)} // Clicking hides the button & shows jobs
                                className="mt-6 px-8 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-lg transition-transform transform hover:scale-105"
                            >
                                Apply Now →
                            </button>
                        )}
                    </div>

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src="hiring.jpg" // Ensure the correct image path
                            alt="Research teams working together"
                            className="w-full max-w-md md:max-w-lg h-auto rounded-xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Job Positions Section (Appears After Click) */}
            {showJobs && (
                <div className="w-full max-w-4xl mt-8 bg-white p-6 rounded-lg shadow-xl">
                    <h2 className="text-2xl font-semibold text-center mb-4">Available Positions</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {jobPositions.map((job, index) => (
                            <div key={index} className="border p-4 rounded-lg shadow-md bg-gray-100">
                                <h3 className="text-lg font-bold text-gray-800">{job.title}</h3>
                                <p className="text-gray-600">{job.description}</p>
                                
                                {/* Status section with styling */}
                                <p className="text-sm font-semibold mt-2 text-gray-900">
                                    Status:{" "}
                                    <span className={`px-2 py-1 rounded-lg text-white ${job.status === "Open" ? "bg-green-600" : "bg-red-600"}`}>
                                        {job.status}
                                    </span>
                                </p>

                                {job.status === "Open" && (
                                    <a
                                        href={job.applyLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
                                    >
                                        Apply Here →
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <GoToTopButton />
        </div>
    );
};

export default JoinUs;