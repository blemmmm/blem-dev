import Blessly from "@/assets/blessly.jpeg";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";
import { Icon } from "@iconify/react";
import { Avatar, Divider, Tabs, Tag, Typography } from "antd";
import { useSpring } from "react-spring";
import Projects from "./Projects.js";
import Stack from "./Stack.js";

const HomeView = () => {
  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    delay: 500,
  });

  const tabItems = [
    {
      label: "Tech Stack",
      key: "stack",
      children: <Stack />,
    },
    {
      label: "Projects",
      key: "projects",
      children: <Projects />,
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      <div className="flex flex-col md:flex-row items-center justify-start gap-10 mx-auto max-w-screen-md">
        <div className="w-fit h-full">
          <Avatar
            src={<img src={Blessly} alt="avatar" draggable={false} />}
            size={200}
            className="border border-solid border-gray-200 "
          />
        </div>

        <div className="flex flex-col items-center md:items-start justify-center md:justify-start gap-3">
          <Typography.Text className="font-bold text-3xl mb-2">
            Blessly Pera
          </Typography.Text>
          <div className="flex items-center justify-start">
            <a target="_blank" href="https://github.com/blemmmm">
              <Tag className="font-semibold gap-2 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <GithubFilled rev={undefined} /> Github
              </Tag>
            </a>

            <a target="_blank" href="https://www.linkedin.com/in/blesslypera">
              <Tag className="font-semibold gap-2 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <LinkedinFilled rev={undefined} /> LinkedIn
              </Tag>
            </a>
            <a href="https://x.com/blemmmm" target="_blank">
              <Tag className="font-semibold gap-2 flex items-center justify-center cursor-pointer hover:bg-gray-100">
                <Icon icon="devicon:twitter" className="my-1" />
              </Tag>
            </a>
          </div>
          <span className="text-sm text-gray-400 font-normal">
            Senior Front-end Web Developer
          </span>

          <div className="flex flex-col md:items-start md:justify-start items-center justify-center gap-2">
            <p className="text-xs font-normal flex items-center justify-center gap-2 text-center md:text-left">
              With 4+ years of experience in NextJS, ReactJS, and TypeScript.
              Specialized in building scalable, high-performing web applications
              with clean, maintainable code.
            </p>
            <p className="text-xs font-normal flex items-center justify-center gap-2 text-center md:text-left">
              <MailFilled rev={undefined} /> pera.blessly@gmail.com
            </p>
          </div>
        </div>
      </div>

      <Divider className="mt-10 mb-1" />

      <Tabs defaultActiveKey="projects" centered items={tabItems} />
    </div>
  );
};

export default HomeView;
