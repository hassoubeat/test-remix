/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ["**/.*"],
  // AntDesign-iconのバグにより、module importがサポートされていないため、Nodeがパッケージを解決しようとするのを回避する一時的な対応(https://github.com/ant-design/ant-design-icons/issues/605#issuecomment-1780758427)
  serverDependenciesToBundle: [
    "@ant-design/icons",
    /^@ant-design\/icons-svg.*/,
    /^rc-util.*/,
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
