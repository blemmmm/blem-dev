import { MailOutlined } from "@ant-design/icons";
import { Button, Typography } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="h-[80px] mx-40 mb-10">
      <div className="flex justify-between items-center h-full">
        <Link to="https://github.com/blemmmm" target="_blank">
          <Typography.Text className="font-bold text-lg mb-2 text-[#563156]">
            blem.dev
          </Typography.Text>
          {/* <img src={Logo} alt="blessly" /> */}
        </Link>
        <Button
          type="primary"
          size="small"
          href="mailto:pera.blessly@gmail.com"
          className="bg-gray-100 text-[#563156] border-none ring-0 text-sm !px-3 !h-8 flex items-center justify-center"
        >
          <MailOutlined rev={undefined} /> Contact me
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
