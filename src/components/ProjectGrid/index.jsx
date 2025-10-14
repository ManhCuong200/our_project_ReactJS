import React from "react";
import { useState } from "react";

const ProjectGrid = ({ projects }) => {
  const [visibleProjects, setVisibleProjects] = useState(6);
  const handleLoadMore = () => {
    if (visibleProjects >= projects.length) {
      setVisibleProjects(6);
    } else {
      setVisibleProjects((prev) => Math.min(prev + 6, projects.length));
    }
  };

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleProjects).map((proj) => (
            <div
              key={proj.id}
              className="bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden group"
            >
              <div className="aspect-[16/9] overflow-hidden rounded-t-2xl">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {proj.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3">{proj.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {proj.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-[#e9f5e2] text-[#6ea544] px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {(proj.title === "Crypto Marketplace & Wallet" ||
                  proj.title === "AI Chatbot") && (
                  <a
                    href={proj.link}
                    className="text-[#6ea544] font-medium text-sm hover:underline cursor-pointer"
                  >
                    See more
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <button
            onClick={handleLoadMore}
            className="border border-[#6ea544] text-[#6ea544] px-6 py-2 rounded-md hover:bg-[#6ea544] hover:text-white transition-all duration-200 cursor-pointer"
          >
            {visibleProjects >= projects.length ? "Collapse" : "Load more"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
