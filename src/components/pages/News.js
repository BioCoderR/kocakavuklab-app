import React from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti"; // Import confetti
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import PageHeader from "../common/PageHeader";
// Icons
import { FaMoneyBillWave, FaUserPlus, FaNewspaper } from "react-icons/fa";
import { motion } from "framer-motion";
import GoToTopButton from "../common/GoToTopButton";
const fadeInEffect = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2 } }
};

const glowEffect = {
  initial: { boxShadow: "0px 0px 0px rgba(0, 255, 0, 0)" },
  animate: {
    boxShadow: [
      "0px 0px 20px rgba(0, 255, 0, 0.5)",
      "0px 0px 30px rgba(0, 255, 0, 0.7)",
      "0px 0px 20px rgba(0, 255, 0, 0.5)",
      "0px 0px 0px rgba(0, 255, 0, 0)"
    ],
    transition: { duration: 2, repeat: 1 }
  }
};
// News Data
const news = [
  {
    title: "Junior Clinician Scientist Fellowship by UMEA",
    date: "April 2024",
    description:
      "Fabian Ullrich, MD, has successfully secured a Junior Clinician Scientist fellowship granted by the Clinician Scientist Academy of the University Hospital Essen (UMEA) to join the lab and study aggressive and central nervous system lymphomas." ,
    image: "/news/umea.png",
    category: "grant",
    link: "/news/umea-fellowship-grant"
  },
  {
    title: "Emmy Noether Grant by the DFG",
    date: "February 2025",
    description:
      "This is a true milestone for our laboratory as we have secured funding in the prestigious Emmy Noether Program of the German Research Foundation (DFG). The grant with a funding volume over 2M EUR will support our research for the next six years. Stay tuned for postdoc and PhD positions!" ,
    image: "/news/logo_emmy_noether.jpg",
    category: "grant",
    link: "/news/emmy-noether-grant"
  },
  {
    title: "Memorial Fellowship by the EKFS",
    date: "February 2024",
    description:
      "We are excited to share the news that Emre Kocakavuk, MD, PhD has received the Memorial Fellowship by the Else Kröner-Fresenius-Stiftung (EKFS). This fellowship will support AI-guided analyses in precision oncology for the next two years.",
    image: "/news/elsekroner.png",
    category: "grant",
    link: "/news/memorial-fellowship"
  },
  {
    title: "Kocakavuk Lab opening its doors",
    date: "July 2023",
    description:
      "We are happy to share the news that the Kocakavuk Lab with a focus on Computational Oncology has opened. We welcome Pranav Swaroop Gundla, MSc as the first PhD student of the lab.",
    image: "/news/opening-doors.png",
    category: "new_member",
    link: "/news/lab-opening"
  }
];

// Sort news items in descending order (latest first)
// Function to parse date strings into actual Date objects for sorting
const parseDate = (dateString) => {
  const months = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
  };
  
  const [month, year] = dateString.split(" ");
  return new Date(parseInt(year), months[month], 1); // Correct month index
};

// Sort news items in descending order (latest first)
const sortedNews = [...news].sort((a, b) => parseDate(b.date) - parseDate(a.date));
// Function to return the correct icon based on the category
const getCategoryIcon = category => {
  switch (category) {
    case "grant":
      return <FaMoneyBillWave />;
    case "new_member":
      return <FaUserPlus />;
    default:
      return <FaNewspaper />;
  }
};

// Function to trigger confetti animation
const launchConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
};

function News() {
  const navigate = useNavigate();

  const handleNewsClick = item => {
    if (item.category === "grant") {
      launchConfetti(); // Trigger confetti for grant news
    }
    navigate(item.link);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100 flex flex-col items-center">
      {/* Reusable Page Header */}
      <PageHeader
        title="Latest News"
        subtitle="Stay updated with our latest achievements!"
      />

      <VerticalTimeline>
        {sortedNews.map((item, index) =>
          <VerticalTimelineElement
            key={index}
            date={item.date}
            contentStyle={{
              background: "#fff",
              color: "#333",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #fff" }}
            iconStyle={{
              background: "#fff",
              color: "#333",
              border: "2px solid #ccc"
            }}
            icon={getCategoryIcon(item.category)}
            onTimelineElementClick={() => handleNewsClick(item)}
            className="cursor-pointer"
          >
            {/* Apply animation only for new members */}
            {item.category === "new_member"
              ? <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={fadeInEffect}
                >
                  <motion.h3
                    className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
                    variants={glowEffect}
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>
              : <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
                  {/* News Title with Hover Effect */}
                  {item.title}
                </h3>}

            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-32 h-20 object-contain rounded-lg shadow-md my-4"
            />

            {/* Description */}
            <p className="text-gray-700">
              {item.description}
            </p>
          </VerticalTimelineElement>
        )}
      </VerticalTimeline>
      <GoToTopButton />
    </div>
  );
}

export default News;
