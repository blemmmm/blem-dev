import { BrowserRouter } from "react-router-dom";
import { RouterView } from "./router/RouterView";
import { ConfigProvider } from "antd";
import { theme } from "@theme/index";

const App = () => {
  return (
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <RouterView />
      </ConfigProvider>
    </BrowserRouter>
  );
};

export default App;
