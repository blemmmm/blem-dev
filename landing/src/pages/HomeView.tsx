import {
  CopyOutlined,
  GithubFilled,
  LinkedinFilled,
  MailOutlined,
  MobileOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import HeroSVG from "@assets/hero.svg";
import ImageHippo from "@assets/imagehippo.jpg";
import PortfolioSVG from "@assets/portfolio.svg";
import ContactLogo from "@assets/undraw_personal_email_svg.svg";
import { Icon } from "@iconify/react";
import {
  Avatar,
  Button,
  Col,
  Divider,
  Row,
  Space,
  Tabs,
  Tag,
  Typography,
  message,
} from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { animated, useSpring } from "react-spring";
import Blessly from "@assets/blessly.jpg";
import About from "./About";
import Stack from "./Stack";
import Projects from "./Projects";

const HomeView = () => {
  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: "translateX(0)",
    from: { opacity: 0, transform: "translateX(-50px)" },
    delay: 500,
  });

  const animationProps = {
    opacity,
    transform,
  };

  const { opacity: upOpacity, transform: upTransform } = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateX(0px)" },
    delay: 2000,
  });

  const tabItems = [
    {
      label: "About Me",
      key: "about",
      children: <About />,
    },
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
      <div className="flex items-start justify-start gap-14">
        <Avatar
          src={<img src={Blessly} alt="avatar" />}
          size={200}
          className="border border-solid border-gray-200"
        />
        <div className="flex flex-col items-start justify-start gap-3">
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
            Front-end Web Developer
          </span>

          <div className="flex flex-col items-start justify-start">
            <span className="text-xs font-normal flex items-center justify-center gap-2">
              super snack queen 2023
              <Icon icon="noto:crown" />
            </span>
            <span className="text-xs font-normal flex items-center justify-center gap-2">
              blood type: coffee <Icon icon="noto:brown-heart" />
            </span>
            <span className="text-xs font-normal flex items-center justify-center gap-2">
              let's build amazing things <Icon icon="noto:rocket" />
            </span>
            <span className="text-xs font-normal flex items-center justify-center gap-2">
              ReactJS | TypeScript <Icon icon="ph:code-bold" />
            </span>
          </div>
        </div>
      </div>

      <Divider className="mt-10 mb-1" />

      <Tabs defaultActiveKey="1" centered items={tabItems} />
    </div>
  );
};

export default HomeView;
