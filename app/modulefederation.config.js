const deps = require("./package.json").dependencies;

module.exports = {
  name: "app",
  remotes: {
    app2: "app2@http://localhost:3002/remoteEntry.js",
    app3: "app3@http://localhost:3003/remoteEntry.js",
  },
  filename: "remoteEntry.js",
  shared: {
    ...deps,
    react: {
      singleton: true,
      //   requiredVersion: deps["react"],
    },
    "react-dom": {
      singleton: true,
      //   requiredVersion: deps["react-dom"],
    },
  },
};
