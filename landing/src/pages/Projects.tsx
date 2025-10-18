import { GithubOutlined, LinkOutlined } from "@ant-design/icons";
import Bebot from "@/assets/bebot.png";
import Charts from "@/assets/charts.png";
import Groufie from "@/assets/groufie.png";
import ImageHippo from "@/assets/imagehippo.jpg";
import Meetings from "@/assets/meetings.png";
import Whizpen from "@/assets/whizpen.png";
import Salina from "@/assets/salina.png";
import Onca from "@/assets/onca.webp";
import MMI from "@/assets/mmi.webp";
import ReactLogo from "@/assets/react.svg";
import EmailGen from "@/assets/emailgen.png";
import { Card, Divider, Tag } from "antd";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
}

const Projects = () => {
  const { Meta } = Card;

  const workProjects: Project[] = [
    {
      id: 1,
      title: "Salina - AI-Powered SaaS",
      description:
        "Led front-end development of an AI-powered SaaS app for video transcription, text to chat, and image generation. From scratch to integrations.",
      image: Salina,
      tags: ["React", "TypeScript", "Socket.IO", "Stripe"],
      link: "#",
    },
    {
      id: 2,
      title: "Admin Dashboard & Community Website",
      description:
        "Delivered responsive Admin Dashboard and Community Website using NextJS, TypeScript, AntD and TailwindCSS with REST API integration.",
      image: Onca,
      tags: ["Next.js", "TypeScript", "AntD", "Tailwind CSS"],
      link: "#",
    },
    {
      id: 3,
      title: "V4 Client/Admin Media Monitoring",
      description:
        "Developed real-time dashboards for a media monitoring system with live data feeds",
      image: MMI,
      tags: ["React", "Highcharts", "AntD Charts", "Real-time"],
      link: "#",
    },
    {
      id: 4,
      title: "Legacy iGaming System Modernization",
      description:
        "Modernized legacy iGaming systems with responsive design and updated practices, improving code quality through PR reviews and mentoring.",
      image: ReactLogo,
      tags: ["Next.js", "JavaScript", "Redux", "Responsive Design"],
      link: "#",
    },
  ];

  const personalProjects: Project[] = [
    {
      id: 5,
      title: "Meetings",
      description:
        "Host meetings anytime, anywhere, and connect with colleagues, friends, or clients effortlessly. A real-time video conferencing application.",
      image: Meetings,
      tags: ["TypeScript", "NextJS", "Real-time", "Dyte.io"],
      link: "https://meetings-blesslypera.vercel.app",
    },
    {
      id: 6,
      title: "Email Generator",
      description:
        "Create emails with ease using AI. An intelligent email composition tool powered by generative AI to help draft professional emails.",
      image: EmailGen,
      tags: ["TypeScript", "Generative AI", "OpenAI", "NodeJS"],
      link: "https://github.com/blemmmm/email-generator",
    },
    {
      id: 7,
      title: "Groufie",
      description:
        "Simple group chat demo where any user who visits can join the chat. A real-time messaging application with instant communication.",
      image: Groufie,
      tags: ["TypeScript", "Socket.IO", "Real-time", "NodeJS"],
      link: "https://groufie.blem.dev",
    },
    {
      id: 8,
      title: "Image Uploader",
      description:
        "Upload and share images like Imgur. An image sharing platform with cloud storage and sharing capabilities.",
      image: ImageHippo,
      tags: ["TypeScript", "Node.js", "Cloud Storage"],
      link: "https://imagehippo.blem.dev",
    },
    {
      id: 9,
      title: "Task Management",
      description:
        "A simple task management application for organizing, tracking, and collaborating on projects and tasks efficiently.",
      image: ReactLogo,
      tags: ["TypeScript", "NodeJS", "PostgreSQL", "React"],
      link: "https://tasks.blem.dev",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-center mb-10 mt-5">Work Projects</span>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-screen-md mx-auto">
        {workProjects.map((project) => (
          <Card
            key={project.id}
            style={{ width: "auto" }}
            cover={
              <img
                alt={project.title}
                className="border border-solid border-gray-200 object-contain h-52"
                src={project.image}
                draggable={false}
              />
            }
          >
            <Meta
              title={
                <div className="flex items-center justify-start gap-2 flex-wrap">
                  <span className="whitespace-normal">{project.title}</span>
                </div>
              }
              description={
                <div className="flex flex-col">
                  <span className="text-xs">
                    {project.description}
                    <div className="flex items-center justify-start my-2">
                      <Tag
                        bordered={false}
                        color="purple"
                        className="text-[10px] font-light"
                      >
                        {project.tags.join(", ")}
                      </Tag>
                    </div>
                  </span>
                </div>
              }
            />
          </Card>
        ))}
      </div>
      <Divider />
      <span className="text-center ">Personal Projects</span>
      <Divider className="mb-10 mt-5" />
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-screen-md mx-auto">
        {personalProjects.map((project) => (
          <Card
            key={project.id}
            style={{ width: "auto" }}
            cover={
              <img
                alt={project.title}
                className="border border-solid border-gray-200 object-cover object-left-top h-52"
                src={project.image}
                draggable={false}
              />
            }
          >
            <Meta
              title={
                <div className="flex items-center justify-start gap-2 flex-wrap">
                  <span className="whitespace-normal">{project.title}</span>
                </div>
              }
              description={
                <div className="flex flex-col">
                  <span className="text-xs">
                    {project.description}
                    <div className="flex items-center justify-start my-2">
                      <Tag
                        bordered={false}
                        color="purple"
                        className="text-[10px] font-light"
                      >
                        {project.tags.join(", ")}
                      </Tag>
                    </div>
                  </span>
                </div>
              }
            />
          </Card>
        ))}
      </div>
      <span className="text-center mb-10 mt-5">and more...</span>
    </div>
  );
};
export default Projects;
