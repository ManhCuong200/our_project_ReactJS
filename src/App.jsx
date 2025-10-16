import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar";
import ProjectGrid from "./components/ProjectGrid";
import ConsultationSection from "./components/ConsultationSection";
import image from "./assets/image.png";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const categories = [
    // "All",
    // "Web Apps",
    // "Mobile Apps",
    // "AI Solutions",
    // "Blockchain",
    // "Embedded Systems",
    // "Quality Control",
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Web Apps",
    },
    {
      id: 3,
      name: "Mobile Apps",
    },
    {
      id: 4,
      name: "AI Solutions",
    },
    {
      id: 5,
      name: "Blockchain",
    },
    {
      id: 6,
      name: "Embedded Systems",
    },
  ];

  const [projects, setprojects] = useState([
    {
      id: 1,
      title: "GitHub Community Booster",
      description:
        "Rewarding and voting management platform for GitHub open-source communities",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6789c529ec11d9d0c7cd0b22-Github.svg",
      tech: ["All", " Web Apps"],
    },
    {
      id: 2,
      title: "Secured Cloud Storage For Personal Data",
      description:
        "Best-in-class privacy and security solution for storing, managing and sharing personal data with end-to-end encryption",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6787244fec11d9d0c7cba27b-AI-Chatbot.svg",
      tech: ["All", " Web Apps", " Blockchain "],
    },
    {
      id: 3,
      title: "ECU Unit Test",
      description:
        "Testing engine control units to ensure cars' engine systems and functions operate faultlessly",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6788bf24ec11d9d0c7cc76c9-ECU%20Testing.svg",
      tech: ["All", " Web Apps", " Mobile App", " Blockchain "],
    },
    {
      id: 4,
      title: "Accounting System Testing",
      description:
        "Testing reconciliation, reports, and other features related to the accounting process to ensure the system works securely and effectively",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6788c5f5ec11d9d0c7cca408-Accounting%20System.svg",
      tech: ["All", " Web Apps", " Blockchain "],
    },
    {
      id: 5,
      title: "ERC 20 Token Development",
      description:
        "Empowering global investment and DAO fundraising under Ethereum blockchain",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6787215fec11d9d0c7cb9d53-ERC-20.svg",
      tech: ["All", " Web Apps", " Blockchain "],
    },
    {
      id: 6,
      title: "NFT Game Launchpad",
      description:
        "A powerful blockchain-based platform for launching and growing NFT games",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/67872325ec11d9d0c7cba1da-NFT-Game.svg",
      tech: ["All", " Web Apps", "Ai Solution "],
    },
    {
      id: 7,
      title: "Smart Contract Hackathon",
      description:
        "A seamless platform for organizing and managing code competitions",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/67872198ec11d9d0c7cb9e37-Smart-Contract-Hackathon.svg",
      tech: ["All", " Web Apps", " Ai Solution "],
    },
    {
      id: 8,
      title: "AI Content Marketing Management",
      description:
        "Suggesting, editing and generating massive content with less effort and time",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/678722a6ec11d9d0c7cba146-AI-Content-Marketing-Management.svg",
      tech: ["All", " Web Apps", " Mobile App", " Blockchain "],
    },
    {
      id: 9,
      title: "Blockchain-based Smart Payment Platform",
      description:
        "Cloud-based financial solutions to manage corporate payments and secure B2B transactions",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6789c529ec11d9d0c7cd0b22-Github.svg",
      tech: ["All", " Embedded Systems", " Quality Control "],
    },
    {
      id: 10,
      title: "Crypto Marketplace & Wallet",
      description:
        "Professional application for digital asset management and cryptocurrency exchange with secure custodial wallet",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/678721f0ec11d9d0c7cb9f1e-Crypto-Marketplace.svg",
      tech: ["All", " Web Apps", "Mobile App"],
      link: "#",
    },
    {
      id: 11,
      title: "NFT Art Project Launchpad",
      description:
        "Blockchain-based platform for launching NFT art projects, promoting and exchanging NFTs",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6788be97ec11d9d0c7cc73f3-NFT%20Art%20Project.svg",
      tech: ["All", " Quality Control "],
    },
    {
      id: 12,
      title: "AI Chatbot",
      description:
        "A high-customizable and embeddable AI virtual consultant for enhancing consumer engagement and experience",
      image:
        "https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6787244fec11d9d0c7cba27b-AI-Chatbot.svg",
      tech: ["All", " Web Apps", " Blockchain "],
      link: "#",
    },
    {
      id: 13,
      title: "Car Navigation",
      description:
        "Real-time and reliable automotive navigation system for finding directions and enhancing driving experience and safety",
      image:
        "	https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6788bb73ec11d9d0c7cc5ee2-Car%20Navigation.svg",
      tech: ["All", " Web Apps", "Mobile Apps"],
    },
    {
      id: 14,
      title: "Next-Gen E-Commerce Platform",
      description:
        "A complete B2B and B2C solution from store design to system management and optimization",
      image:
        "	https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6789c0c1ec11d9d0c7ccf4b1-Ecommerce.svg",
      tech: ["All", " Web Apps "],
    },
    {
      id: 15,
      title: "Metaverse Ecosystem",
      description:
        "Cloud virtual reality powered by Blockchain and Unreal Engine with advanced gaming, personalized experiences, NFT exchange, and crypto rewards",
      image:
        "	https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/678725aeec11d9d0c7cba6b6-Metaverse-Ecosystem.svg",
      tech: ["All"],
    },
    {
      id: 16,
      title: "In-store Contactless System",
      description:
        "Operating and automating front of house smoothly with less contact and service staff",
      image:
        "	https://d2xd1xgy7uhqas.cloudfront.net/NapaGlobal-image/6787250cec11d9d0c7cba508-In-store.svg",
      tech: ["Blockchain"],
    },
  ]);
  const [filterData, setfilterData] = useState(projects);
  const [tech, setTech] = useState("");
  const handlefilter = (category) => {
    console.log("category:", category);
    if (category === "All") {
      setfilterData(projects);
    }
    if (category === "Web Apps") {
      setfilterData(projects.filter((proj) => proj.tech.includes("Web Apps")));
    }
    if (category === "Mobile Apps") {
      setfilterData(
        projects.filter((proj) => proj.tech.includes("Mobile Apps"))
      );
    }
    if (category === "Blockchain") {
      setfilterData(
        projects.filter((proj) => proj.tech.includes("Blockchain"))
      );
    }
    if (category === "AI Solutions") {
      setfilterData(
        projects.filter((proj) => proj.tech.includes("AI Solutions"))
      );
    }
    if (category === "Quality Control") {
      setfilterData(
        projects.filter((proj) => proj.tech.includes("Quality Control"))
      );
    }
  };
  return (
    <>
      <div
        className="relative min-h-screen w-full text-white overflow-hidden"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          filter: "brightness(1.25)",
        }}
      >
        <div className="absolute inset-0 z-0 bg-black/10"></div>
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
      </div>

      <FilterBar
        tech={tech}
        categories={categories}
        handlefilter={handlefilter}
      />
      <ProjectGrid projects={projects} filterData={filterData} />
      <ConsultationSection />
      <Footer />
    </>
  );
}

export default App;
