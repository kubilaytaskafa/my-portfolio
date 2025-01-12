import React, { useState, useEffect } from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Proje 1",
      description: "Bu proje React kullanılarak yapıldı.",
      url: "https://proje1.com",
    },
    {
      id: 2,
      title: "Proje 2",
      description: "TailwindCSS ile harika bir tasarım.",
      url: "https://proje2.com",
    },
    {
      id: 3,
      title: "Proje 3",
      description: "ChatGPT stilinde animasyonlu kartlar.",
      url: "https://proje3.com",
    },
    {
      id: 4,
      title: "Proje 4",
      description: "Veri yönetimi ve API kullanımı.",
      url: "https://proje4.com",
    },
  ];

  const [visibleProjects, setVisibleProjects] = useState([]);

  useEffect(() => {
    const displayProjects = () => {
      projects.forEach((project, index) => {
        setTimeout(() => {
          setVisibleProjects((prev) => [...prev, project]);
        }, index * 1000); // Her proje için 1 saniye arayla ekleme
      });
    };
    displayProjects();
  }, []);

  return (
    <div className="min-h-screen bg-[#212121] text-white p-6 scroll-none  ">
      <div className="flex flex-col gap-6 w-full">
        {visibleProjects.map((project, index) => (
          <div
            key={project.id}
            className={`text-white p-6 mb-4 opacity-0 fadeIn font-mono transition-opacity duration-1000 delay-${index}`}
            style={{
              opacity: 1, // opacity'yi 1 yaparak projeyi görünür hale getiriyoruz
            }}
          >
            <h1 className="text-xl font-bold mb-2">{project.title}</h1>
            <p className="mb-4">{project.description}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-mono hover:underline"
            >
              {project.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
