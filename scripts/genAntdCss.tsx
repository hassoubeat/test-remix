// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import fs from 'fs';
import { extractStyle } from "@ant-design/static-style-extract";
import { ConfigProvider } from "antd";
import { customTheme } from "../app/theme.js";

const outputPath = "./public/antd.min.css";

const css = extractStyle((node) => (
  <ConfigProvider theme={{ token: customTheme }} >
    {node}
  </ConfigProvider>
));

fs.writeFileSync(outputPath, css);