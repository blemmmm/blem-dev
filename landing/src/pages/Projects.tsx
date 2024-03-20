import {
  EditOutlined,
  EllipsisOutlined,
  GithubOutlined,
  LinkOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card, Tag } from "antd";
import ImageHippo from "@assets/imagehippo.jpg";
import Groufie from "@assets/groufie.png";
import Meetings from "@assets/meetings.png";
import Bebot from "@assets/bebot.png";
import Whizpen from "@assets/whizpen.png";
import Charts from "@assets/charts.png";

const Projects = () => {
  const { Meta } = Card;

  return (
    <div className="flex flex-col items-center justify-center">
      <span className="text-center mb-10 mt-5">Things I built so far</span>

      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-6 w-full">
        <Card
          style={{ width: "auto" }}
          cover={
            <img
              alt="meetings"
              className="border border-solid border-gray-200 object-cover object-left-top h-52"
              src={Meetings}
            />
          }
          actions={[
            <a href="https://meetings-blesslypera.vercel.app" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" /> View Website
            </a>,
            <a href="https://github.com/blemmmm/meetings" target="_blank">
              <GithubOutlined key="code" title="View Code" /> Github Repo
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2 flex-wrap">
                Meetings
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
                  Host meetings anytime, anywhere, and connect with colleagues,
                  friends, or clients effortlessly.
                </span>
                <div className="flex items-center justify-start my-2">
                  <Tag bordered={false} className="shadow-sm">
                    Next.js
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    Typescript
                  </Tag>
                  <Tag bordered={false} className="shadow-sm">
                    Dyte.io
                  </Tag>
                </div>
              </div>
            }
          />
        </Card>
        <Card
          style={{ width: "auto" }}
          cover={
            <img
              alt="groufie"
              className="border border-solid border-gray-200 object-center object-fill h-52"
              src={Groufie}
            />
          }
          actions={[
            <a href="https://groufie.blem.dev" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" /> View Website
            </a>,
            <a
              href="https://github.com/blemmmm/blem-dev/tree/main/groufie"
              target="_blank"
            >
              <GithubOutlined key="code" title="View Code" /> Github Repo
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2 flex-wrap">
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
          style={{ width: "auto" }}
          cover={
            <img
              alt="imagehippo"
              className="border border-solid border-gray-200 object-cover h-52"
              src={ImageHippo}
            />
          }
          actions={[
            <a href="https://imagehippo.blem.dev" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" /> View Website
            </a>,
            <a
              href="https://github.com/blemmmm/blem-dev/tree/main/imagehippo"
              target="_blank"
            >
              <GithubOutlined key="code" title="View Code" /> Github Repo
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2 flex-wrap">
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
        {/* <Card
          style={{ width: "auto" }}
          cover={
            <img
              alt="HippoDirect"
              className="border border-solid border-gray-200 object-cover h-52"
              src="https://imagehippo.blem.dev/i/0a199cbf807dfa21ac1126ddce4d427a7494f8430db9df0cab62f89d.png"
            />
          }
          actions={[
            <a href="https://hippodirect.blem.dev" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" /> View Website
            </a>,
            <a
              href="https://github.com/blemmmm/blem-dev/tree/main/hippodirect"
              target="_blank"
            >
              <GithubOutlined key="code" title="View Code" /> Github Repo
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2 flex-wrap">
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
        </Card> */}
        <Card
          style={{ width: "auto" }}
          cover={
            <div className="pointer-events-none">
              <img
                alt="confidential"
                className="border border-solid border-gray-200 object-cover object-left-top h-52 "
                src={Whizpen}
              />
            </div>
          }
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2 flex-wrap">
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
          style={{ width: "auto" }}
          cover={
            <img
              alt="confidential"
              className="border border-solid border-gray-200 object-cover object-left-top h-52 pointer-events-none"
              src={Bebot}
            />
          }
          actions={[
            <a href="https://app.bebot.page" target="_blank">
              <LinkOutlined key="setting" title="Live Demo" /> View Website
            </a>,
          ]}
        >
          <Meta
            title={
              <div className="flex items-center justify-start gap-2 flex-wrap">
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
          style={{ width: "auto" }}
          cover={
            <img
              alt="data-viz"
              className="border border-solid border-gray-200 object-scale-down h-52 pointer-events-none"
              src={Charts}
            />
          }
        >
          <Meta
            title={
              <div className="flex flex-col items-start justify-start gap-2 flex-wrap text-wrap">
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
