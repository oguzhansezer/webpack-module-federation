import React from "react";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
// import App2 from "app2/App";

const App2 = React.lazy(() => import("app2/App"));
const Home = () => (
  <div>
    <h1>HomePage</h1>
    <React.Suspense fallback="loading">
      HomePage rendered from App
    </React.Suspense>
  </div>
);

export { Home };
