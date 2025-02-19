import React from "react";
import { useParams } from "react-router-dom";

const newsDetails = {
    "emmy-noether-grant": {
        title: "Emmy Noether Grant by the DFG",
        date: "02/2025",
        content:
            "This is a true milestone for our laboratory as we have secured funding in the prestigious Emmy Noether Program of the German Research Foundation (DFG). The grant with a funding volume over 2M EUR will support our research for the next six years. Stay tuned for postdoc and PhD positions!",
        image: "/news/logo_emmy_noether.jpg"
    },
    "umea-fellowship-grant": {
        title: "Junior Clinician Scientist Fellowship by UMEA",
        date: "04/2024",
        content:
            "Fabian Ullrich, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study aggressive and central nervous system lymphomas.",
        image: "/news/umea.png"
    },
    "memorial-fellowship": {
        title: "Memorial Fellowship by the EKFS",
        date: "02/2024",
        content:
            "We are excited to share the news that Emre Kocakavuk, MD, PhD has received the Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS). This fellowship will support AI-guided analyses in precision oncology for the next two years.",
        image: "/news/elsekroner.png"
    },
    "lab-opening": {
        title: "Kocakavuk Lab opening its doors",
        date: "07/2023",
        content:
            "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has opened. We welcome Pranav Swaroop Gundla, MSc as the first PhD student of the lab.",
        image: "/news/opening-doors.png"
    }
};

function NewsDetail() {
    const { newsId } = useParams();
    const newsItem = newsDetails[newsId];

    if (!newsItem) {
        return <p className="text-center text-red-500">News article not found!</p>;
    }

    return (
        <div className="max-w-3xl mx-auto py-16 px-8">
            <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full rounded-lg shadow-lg mb-6"
            />
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-sm text-gray-500 mb-4">
            {newsItem.date}
            </p>
            
            <p className="text-lg text-gray-700">{newsItem.content}</p>
        </div>
    );
}

export default NewsDetail;