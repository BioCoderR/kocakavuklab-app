import React from "react";
import { motion } from "framer-motion"; // Import animation library
import {
    CanTarLogo, BFondLogo, DFGLogo, WTZLogo, EKFSLogo, 
    ESMOLogo, WSGLogo, UMEALogo, UMEHLogo, YaleLogo, 
    ForbeckLogo, GLASSLogo, NCTLogo, JSTLogo, ENLogo,IKLogo,DHKLogo
} from "../LogoName.js";
import "../../App.css";
import PageHeader from "../common/PageHeader"; 
import GoToTopButton from "../common/GoToTopButton.js";

// Networking Collaborators
const networking = [
    { nid: 1, ntitle: "UMEH", nlogo: UMEHLogo, url: "https://www.uni-essen-haematologie.de/" },
    { nid: 2, ntitle: "ESMO", nlogo: ESMOLogo, url: "https://www.esmo.org/" },
    { nid: 3, ntitle: "NCT", nlogo: NCTLogo, url: "https://nct.dkfz.de/en/nct.html" },
    { nid: 4, ntitle: "Yale", nlogo: YaleLogo, url: "https://www.yale.edu/" },
    { nid: 5, ntitle: "WTZ", nlogo: WTZLogo, url: "https://wtz-essen.de/" },
    { nid: 6, ntitle: "GLASS", nlogo: GLASSLogo, url: "https://www.glass-consortium.org/" },
    { nid: 7, ntitle: "IKIM", nlogo: IKLogo, url: "https://www.ikim.uk-essen.de/" },
    { nid: 8, ntitle: "DHK", nlogo: DHKLogo, url: "#" }
];

// Funders Section
const funders = [
    { id: 1, title: "Boehringer Ingelheim Fonds", logo: BFondLogo, url: "https://www.bifonds.de/index.html" },
    { id: 2, title: "CANTAR", logo: CanTarLogo, url: "https://land.nrw/pressemitteilung/81-millionen-euro-landesfoerderung-fuer-fuenf-exzellente-forschungsnetzwerke" },
    { id: 3, title: "DFG", logo: DFGLogo, url: "https://www.dfg.de/" },
    { id: 4, title: "EKFS", logo: EKFSLogo, url: "https://www.ekfs.de/" },
    { id: 5, title: "Walter Siegenthaler Gesellschaft", logo: WSGLogo, url: "https://siegenthaler-gesellschaft.de/" },
    { id: 6, title: "Forbeck", logo: ForbeckLogo, url: "https://www.wgfrf.org/" },
    { id: 7, title: "UMEA", logo: UMEALogo, url: "https://www.uni-due.de/med/umea/" },
    { id: 8, title: "Emmy Noether", logo: JSTLogo, url: "https://www.jackstaedt-stiftung.de" },
    { id: 9, title: "Jack Staedt", logo: ENLogo, url: "https://www.dfg.de/de/foerderung/foerdermoeglichkeiten/programme/einzelfoerderung/emmy-noether" }
];

// Infinite Sliding Animation
const sliderAnimation = {
    animate: {
        x: ["0%", "-100%"], // Moves from left to right
        transition: {
            ease: "linear",
            duration: 80, // Speed of sliding (increase for slower effect)
            repeat: Infinity, // Loop forever
        },
    },
};

const Network = () => {
    return (
        <div className="w-full py-6 relative flex flex-col items-center">
            {/* Page Header */}
            <div className="relative networks-div mb-6">
                <PageHeader title="Our Network" />
            </div>

            {/* Collaborators Section */}
            <div className="w-full max-w-7xl px-4 overflow-hidden">
                <PageHeader title="Collaborations & Network" />
                <motion.div className="flex w-max" variants={sliderAnimation} animate="animate">
                    {networking.concat(networking).map((network, index) => (
                        <a
                            key={index}
                            href={network.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center p-4"
                        >
                            <img
                                src={network.nlogo}
                                alt={network.ntitle}
                                className="w-64 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Funders Section */}
            <div className="w-full max-w-7xl px-4 mt-12 overflow-hidden">
                <PageHeader title="Funding" />
                <motion.div className="flex w-max" variants={sliderAnimation} animate="animate">
                    {funders.concat(funders).map((funder, index) => (
                        <a
                            key={index}
                            href={funder.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex justify-center items-center p-4"
                        >
                            <img
                                src={funder.logo}
                                alt={funder.title}
                                className="w-64 h-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                            />
                        </a>
                    ))}
                </motion.div>
            </div>
            <GoToTopButton />
        </div>
    );
};

export default Network;