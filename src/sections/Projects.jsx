import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Weather Dashboard",
    description:
      "A fun, responsive weather app that tells you if you need an umbrella or sunglasses today.",
    image: "/weather-app-dashboard.png",
    technologies: ["React", "JavaScript", "Weather API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "A full-featured store where retail therapy meets smooth user experience.",
    image: "/ecommerce-website-homepage.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity app that makes organizing tasks actually fun.",
    image: "/task-management-app-interface.png",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Personal Blog",
    description:
      "My little corner of the internet where I share tutorials and thoughts.",
    image: "/blog-website-concept.png",
    technologies: ["Next.js", "Markdown", "Vercel", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Things I've Built 🚀
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative h-48 md:h-56 w-full">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-pink-100 text-pink-800 px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-2 border border-pink-500 text-pink-500 rounded hover:bg-pink-100 transition"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-3 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-100 transition"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
