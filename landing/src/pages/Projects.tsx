import {
  EditOutlined,
  EllipsisOutlined,
  GithubOutlined,
  LinkOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Tag } from "antd";

const Projects = () => {
  const { Meta } = Card;

  return (
    <div className="flex flex-col">
      <span className="text-center mb-10 mt-5">Things I built so far</span>

      <div className="grid grid-cols-1 px-[86px] sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full sm:px-6">
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="groufie"
              className="border border-solid border-gray-200 object-cover h-52"
              src="https://imagehippo.blem.dev/i/a28ec4d3d21014fa617a5ea95d9af3f906463c71559819c6999d6850.png"
            />
          }
          actions={[
            <a href="https://groufie.blem.dev" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" />
            </a>,
            <a
              href="https://github.com/blemmmm/blem-dev/tree/main/groufie"
              target="_blank"
            >
              <GithubOutlined key="code" title="View Code" />
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2">
                groufie
                <Tag
                  bordered={false}
                  color="purple"
                  className="text-[10px] font-light"
                >
                  Personal
                </Tag>
              </div>
            }
            description={
              <div className="flex flex-col">
                <span className="text-xs">
                  This is simple group chat demo. Any user who visits this page
                  can join the chat.
                </span>
                <div className="flex items-center justify-start my-2">
                  <Tag bordered={false} className="shadow-sm">
                    socket.io
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    Typescript
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    Node
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="imagehippo"
              className="border border-solid border-gray-200 object-cover h-52"
              src="https://imagehippo.blem.dev/i/a9b318c98e5e56f0230af7e2fc9548c272c29f76f82d6ef37bc034d3.png"
            />
          }
          actions={[
            <a href="https://imagehippo.blem.dev" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" />
            </a>,
            <a
              href="https://github.com/blemmmm/blem-dev/tree/main/imagehippo"
              target="_blank"
            >
              <GithubOutlined key="code" title="View Code" />
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2">
                ImageHippo
                <Tag
                  bordered={false}
                  color="purple"
                  className="text-[10px] font-light"
                >
                  Personal
                </Tag>
              </div>
            }
            description={
              <div className="flex flex-col">
                <span className="text-xs">
                  This app allows you to upload and share images like imgur. I
                  use this to store my assets in this portfolio
                </span>
                <div className="flex items-center justify-start my-2">
                  <Tag bordered={false} className="shadow-sm">
                    Node
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    ReactJS
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    sharpJS
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="HippoDirect"
              className="border border-solid border-gray-200 object-cover h-52"
              src="https://imagehippo.blem.dev/i/0a199cbf807dfa21ac1126ddce4d427a7494f8430db9df0cab62f89d.png"
            />
          }
          actions={[
            <a href="https://hippodirect.blem.dev" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" />
            </a>,
            <a
              href="https://github.com/blemmmm/blem-dev/tree/main/hippodirect"
              target="_blank"
            >
              <GithubOutlined key="code" title="View Code" />
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2">
                HippoDirect
                <Tag
                  bordered={false}
                  color="purple"
                  className="text-[10px] font-light"
                >
                  Personal
                </Tag>
              </div>
            }
            description={
              <div className="flex flex-col">
                <span className="text-xs">
                  This is a simple demo of an eCommerce store. Working in
                  progress.
                </span>
                <div className="flex items-center justify-start my-2">
                  <Tag bordered={false} className="shadow-sm">
                    Node
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    ReactJS
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    typesense
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="confidential"
              className="border border-solid border-gray-200 object-cover h-52 pointer-events-none"
              src="https://imagehippo.blem.dev/i/f3a8c589a87102347d93a60e547c467cb20e21fd137f86f049f664da.png"
            />
          }
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2">
                whizpen
                <Tag
                  bordered={false}
                  color="green"
                  className="text-[10px] font-light"
                >
                  Work - Confidential
                </Tag>
              </div>
            }
            description={
              <div className="flex flex-col">
                <span className="text-xs">
                  This is the first AI project assigned to me, I independently
                  handled the front-end development, creating a platform capable
                  of generating summaries and articles using AI. Collaborating
                  with ML and Back-end teams, this experience provided me with
                  valuable insights into effectively presenting responses
                  generated by generative AI. Additionally, I developed a Chrome
                  extension as part of this app.
                </span>
                <div className="flex items-center justify-start my-2">
                  <Tag bordered={false} className="shadow-sm">
                    Typescript
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    Vite
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    AI
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="confidential"
              className="border border-solid border-gray-200 object-cover h-52 pointer-events-none"
              src="https://imagehippo.blem.dev/i/f3a8c589a87102347d93a60e547c467cb20e21fd137f86f049f664da.png"
            />
          }
          actions={[
            <a href="https://app.bebot.page" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" />
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2">
                bebot
                <Tag
                  bordered={false}
                  color="green"
                  className="text-[10px] font-light"
                >
                  Work - Confidential
                </Tag>
              </div>
            }
            description={
              <div className="flex flex-col">
                <span className="text-xs">
                  In this project, I also independently handled the front-end
                  development. This app enables user to engage in a chat with a
                  document using AI. Expanding on what I learned from the
                  previous AI project, I improved my skills on this one because
                  it had more complex features.
                </span>
                <div className="flex items-center justify-start my-2">
                  <Tag bordered={false} className="shadow-sm">
                    Typescript
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    Vite
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    AI
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
        <Card
          style={{ width: 250 }}
          cover={
            <img
              alt="data-viz"
              className="border border-solid border-gray-200 object-scale-down h-52 pointer-events-none"
              src="https://imagehippo.blem.dev/i/5002b8b890d165c6a3f84015432b19c27e7c10426c1947875b6e80d7.png"
            />
          }
        >
          <Meta
            title={
              <div className="flex flex-col items-start justify-start gap-2">
                Data Vizualization
                <Tag
                  bordered={false}
                  color="green"
                  className="text-[10px] font-light"
                >
                  Work - Confidential
                </Tag>
              </div>
            }
            description={
              <div className="flex flex-col">
                <span className="text-xs">
                  I was given the responsibility to create the data
                  visualization page for the company's software product. This
                  involved rendering different types of charts, including bar,
                  line, pie, and nested treemap charts.
                </span>
                <div className="flex items-center justify-start my-2 flex-wrap gap-1">
                  <Tag bordered={false} className="shadow-sm">
                    Typescript
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    TailwindCSS
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    AntD Charts
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
      </div>
      <span className="text-center mb-10 mt-5">and more...</span>
    </div>
  );
};
export default Projects;
