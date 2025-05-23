import React from "react";

const projects = [
  {
    title: "Weather App",
    description:
      "A React + Vite app fetching weather data from OpenWeather API.",
    github: "https://github.com/yourusername/weather-app",
    demo: "https://yourusername.github.io/weather-app/",
  },
  // add more projects here
];

export default function Projects() {
  return (
    <section className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <div className="grid gap-6">
        {projects.map((project) => (
          <div
            key={project.title}
            className="p-6 bg-white rounded shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline mr-4"
            >
              GitHub
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 hover:underline"
            >
              Live Demo
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
