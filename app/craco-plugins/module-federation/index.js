const webpack = require("webpack");
const paths = require("react-scripts/config/paths");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const getModuleFederationConfigPath = (additionalPaths = []) => {
  const path = require("path");
  const fs = require("fs");
  const appDirectory = fs.realpathSync(process.cwd());
  const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

  const moduleFederationConfigFiles = [
    "modulefederation.config.js",
    ...additionalPaths,
  ];
  return moduleFederationConfigFiles
    .map(resolveApp)
    .filter(fs.existsSync)
    .shift();
};
console.log(process.env.ANALYZE_MODE, "mylog");
module.exports = {
  overrideWebpackConfig: ({ webpackConfig }) => {
    const moduleFederationConfigPath = getModuleFederationConfigPath();

    if (moduleFederationConfigPath) {
      webpackConfig.output.publicPath = "auto";

      const htmlWebpackPlugin = webpackConfig.plugins.find(
        (plugin) => plugin.constructor.name === "HtmlWebpackPlugin"
      );

      htmlWebpackPlugin.userOptions = {
        ...htmlWebpackPlugin.userOptions,
        publicPath: paths.publicUrlOrPath,
        excludeChunks: [require(moduleFederationConfigPath).name],
      };

      webpackConfig.plugins = [
        ...webpackConfig.plugins,
        new webpack.container.ModuleFederationPlugin(
          require(moduleFederationConfigPath)
        ),
      ];
      if (process.env.ANALYZE_MODE)
        webpackConfig.plugins.push(
          new BundleAnalyzerPlugin({
            analyzerMode: "server",
          })
        );
    }
    return webpackConfig;
  },
  overrideDevServerConfig: ({ devServerConfig }) => {
    devServerConfig.headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "*",
      "Access-Control-Allow-Headers": "*",
    };

    return devServerConfig;
  },
};
