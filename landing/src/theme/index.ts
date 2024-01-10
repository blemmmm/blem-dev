import { ThemeConfig } from "antd/es/config-provider/context";

export const theme: ThemeConfig = {
  components: {
    Button: {
      borderRadius: 4,
      colorTextBase: "white",
    },
  },
  token: {
    fontFamily: "Noto Sans",
    colorPrimary: "#563156",
    colorTextBase: "#333333",

    screenXXLMin: 1536,

    screenXLMax: 1535,
    screenXL: 1280,
    screenXLMin: 1280,

    screenLGMax: 1279,
    screenLG: 1024,
    screenLGMin: 1024,

    screenMDMax: 1023,
    screenMD: 768,
    screenMDMin: 768,

    screenSMMax: 766,
    screenSM: 640,
    screenSMMin: 640,
  },
};
