import { Layout, Terminal, Figma, Server } from "lucide-react";

const skillsData = [
  {
    category: "Frontend Magic",
    icon: <Layout className="h-6 w-6 text-pink-500" />,
    skills: [
      "React",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    category: "Backend Wizardry",
    icon: <Server className="h-6 w-6 text-pink-500" />,
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL"],
  },
  {
    category: "Developer Tools",
    icon: <Terminal className="h-6 w-6 text-pink-500" />,
    skills: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "npm"],
  },
  {
    category: "Design & UX",
    icon: <Figma className="h-6 w-6 text-pink-500" />,
    skills: ["Figma", "Responsive Design", "UI/UX Principles"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          What I Love Working With 💖
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2">
                  {category.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Always learning something new because the tech world never sleeps
            (and neither do I, apparently) ☕
          </p>
        </div>
      </div>
    </section>
  );
}
