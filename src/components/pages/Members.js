import React from "react";
import { SiGmail, SiGooglescholar, SiResearchgate } from "react-icons/si";
import PageHeader from "../common/PageHeader";
import GoToTopButton from "../common/GoToTopButton"; 
const members = [
    {
        name: "Emre Kocakavuk, MD, PhD",
        image: "/Emre.png",
        role: "Principal Investigator",
        description:
            "Dr. Emre Kocakavuk is a Clinician Scientist and Emmy Noether Group Leader at the Department of Hematology and Stem Cell Transplantation Leader at the West German Cancer Center & Institute for AI in Medicine (IKIM)",
        email: "mailto:emre.kocakavuk@uk-essen.de",
        twitter: "https://bsky.app/profile/ekocakavuk.bsky.social",
        scholar:
            "https://scholar.google.co.in/citations?user=gGSCLooAAAAJ&hl=en&oi=ao",
        researchgate: "",
    },
    {
        name: "Fabian Ullrich, MD",
        image: "/Fabian.png",
        role: "UMEA Clinician Scientist",
        description:
            "Dr. Fabian Ullrich is an UMEA-funded Clinician Scientist and dedicates his efforts on clinicogenomic characterization of aggressive and central nervous system lymphomas.",
        email: "mailto:fabian.ullrich@uk-essen.de",
        twitter: "https://twitter.com/fa_ulle",
        scholar: "",
        researchgate: "https://www.researchgate.net/profile/Fabian-Ullrich",
    },
    {
        name: "Pranav Swaroop Gundla, MSc",
        image: "/Pranav.png",
        role: "PhD Student",
        description:
            "Pranav Swaroop Gundla is a CANTAR-funded PhD Student and focusses on applying deep learning methods in computational pathology.",
        email: "mailto:pranavswaroop.gundla@uk-essen.de",
        twitter: "https://bsky.app/profile/pranavgundla.bsky.social",
        scholar:
            "https://scholar.google.co.in/citations?user=UzlYsbgAAAAJ&hl=en&oi=ao",
        researchgate: "",
    },
];

function Members() {
    return (
        <div className="p-8 flex flex-col items-center text-center">
            {/* Page Title */}
            <PageHeader title="Our Team" />

            {/* Centered Grid for Members */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
                    >
                        {/* Profile Image */}
                        <img
                            className="w-40 h-40 rounded-full object-cover transition-transform duration-200 hover:scale-110"
                            src={member.image}
                            alt={member.name}
                        />

                        {/* Name & Role */}
                        <div className="flex flex-col items-center mt-4">
                            <h3 className="text-lg font-semibold">
                                {member.name}
                            </h3>
                            <p className="text-cyan-500 text-sm mt-1">
                                {member.role}
                            </p>
                        </div>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mt-4">
                            {member.description}
                        </p>

                        {/* Social Icons - Always at the bottom */}
                        <div className="flex justify-center gap-4 mt-auto pt-6">
                            {member.email && (
                                <a
                                    href={member.email}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-red-500"
                                >
                                    <SiGmail size={20} />
                                </a>
                            )}

                            {member.twitter && (
                                <a
                                    href={member.twitter}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="transition hover:opacity-100"
                                >
                                    <img
                                        src="bluesky.svg"
                                        alt="Bluesky"
                                        className="w-5 h-5 opacity-80 transition"
                                        style={{
                                            filter: "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)",
                                            transition: "filter 0.3s ease-in-out",
                                        }}
                                        onMouseOver={(e) => {
                                            e.currentTarget.style.filter =
                                                "invert(48%) sepia(74%) saturate(440%) hue-rotate(163deg) brightness(90%) contrast(90%)";
                                        }}
                                        onMouseOut={(e) => {
                                            e.currentTarget.style.filter =
                                                "invert(0%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(0%) contrast(100%)";
                                        }}
                                    />
                                </a>
                            )}

                            {member.scholar && (
                                <a
                                    href={member.scholar}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-blue-500"
                                >
                                    <SiGooglescholar size={20} />
                                </a>
                            )}

                            {member.researchgate && (
                                <a
                                    href={member.researchgate}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-gray-700 transition hover:text-green-500"
                                >
                                    <SiResearchgate size={20} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Hiring Section */}
            <div className="flex flex-col items-center justify-center w-full mt-16">
                <img
                    className="w-72 sm:w-64 lg:w-80 h-auto mx-auto mb-6 transform duration-300 hover:scale-110"
                    src="unclesam-alpha.svg"
                    alt="We Are Hiring"
                    style={{
                      border: "none",
                      outline: "none",
                      display: "block",
                      objectFit: "contain",
                      boxShadow: "none",
                      filter: "drop-shadow(0px 0px 0px transparent)"
                  }}
                />
            </div>

            {/* Join Us Button with better UI/UX */}
            <button
            onClick={() => window.location.href = "/joinus"}
            className="mt-4 px-6 py-2 text-md font-medium text-white bg-black hover:bg-cyan-400 rounded-full shadow-lg transition-transform transform hover:scale-105 active:scale-95"
            >
            Join Us →
            </button>
            {/* Add the Go to Top Button */}
            <GoToTopButton />
        </div>
    );
}

export default Members;