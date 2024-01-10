import { Icon } from "@iconify/react";
import { Typography } from "antd";

const Stack = () => {
  return (
    <div className="flex flex-col justify-center gap-6 w-full h-full">
      <span className="text-center mb-10 mt-5">
        Technologies I’ve been working with recently
      </span>
      <div className="flex items-center justify-evenly ">
        <Icon icon="logos:react" width={50} />

        <Icon icon="logos:typescript-icon" width={50} />

        <Icon icon="logos:javascript" width={50} />

        <Icon icon="logos:html-5" width={50} />

        <Icon icon="logos:css-3" width={50} />
      </div>
      <div className="flex items-center justify-evenly">
        <Icon icon="logos:ant-design" width={50} />

        <Icon icon="logos:tailwindcss-icon" width={50} />

        <Icon icon="logos:react-query-icon" width={50} />

        <Icon icon="logos:highcharts" width={50} />

        <Icon icon="logos:d3" width={50} />
      </div>
      <div className="flex items-center justify-evenly">
        <Icon icon="logos:axios" width={50} />

        <Icon icon="logos:nodejs" width={50} />

        <Icon icon="devicon:express" width={50} />

        <Icon icon="logos:git-icon" width={50} />

        <Icon icon="logos:figma" width={35} />

        <Icon icon="logos:adobe-photoshop" width={50} />
      </div>
      <div className="flex items-center justify-evenly">
        <Icon icon="simple-icons:shadcnui" width={50} />
        <Icon icon="skill-icons:postman" width={50} />
        <Icon icon="logos:openai-icon" width={50} />
        <Icon icon="logos:typesense-icon" width={50} />
        <Icon icon="skill-icons:docker" width={50} />
      </div>
    </div>
  );
};

export default Stack;
