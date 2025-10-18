import { Icon } from "@iconify/react";
import { Typography } from "antd";

const Stack = () => {
  const skills = [
    {
      category: "Front-end",
      items: [
        "NextJS",
        "ReactJS",
        "TypeScript",
        "Tailwind CSS",
        "shadcn/ui",
        "AntD",
        "Material UI",
      ],
    },
    {
      category: "Data & State Management",
      items: ["Redux", "Zustand", "Tanstack Query", "Axios"],
    },
    {
      category: "Back-end libraries & Database",
      items: [
        "Node.js",
        "REST APIs",
        "OAuth2",
        "Socket.IO",
        "Server-side events",
        "PostgreSQL",
      ],
    },
    {
      category: "Tools & Testing",
      items: [
        "Git",
        "GitHub",
        "Vitest",
        "Jest",
        "Figma",
        "JIRA",
        "Roo Code",
        "Supermaven",
        "Postman",
      ],
    },
    {
      category: "DevOps & Infrastructure",
      items: ["Docker", "DigitalOcean", "AWS", "Cloudflare"],
    },
    {
      category: "Integrations",
      items: [
        "OpenAI",
        "Claude",
        "Stripe",
        "reCAPTCHA",
        "Highcharts",
        "AntD Charts",
      ],
    },
  ];

  return (
    <div className="flex flex-col justify-center gap-6 w-full h-full p-4">
      <span className="text-center mb-10 mt-5">
        Technologies I’ve been working with recently
      </span>
      <div
        className="transition-all fade-in"
        style={{ transitionDelay: "200ms" }}
      >
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-screen-lg mx-auto">
          {skills.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="p-3 md:p-4 bg-card rounded-lg border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-out"
              style={{
                transitionDelay: `${300 + index * 100}ms`,
              }}
            >
              <h3 className="font-bold text-[#563156] mb-2 md:mb-3 text-xs md:text-sm">
                {skillGroup.category}
              </h3>
              <ul className="space-y-1">
                {skillGroup.items.map((item) => (
                  <li key={item} className="text-foreground/70 text-xs">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
