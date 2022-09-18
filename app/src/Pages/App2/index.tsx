import React from "react";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
const App2 = React.lazy(() => import("app2/App"));

const App2Page = () => (
  <div>
    <h1>PAGE2</h1>
    <React.Suspense fallback="loading">
      <App2 />
    </React.Suspense>
  </div>
);

export { App2Page };
