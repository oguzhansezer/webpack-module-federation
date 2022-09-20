import React from "react";

const Home = () => (
  <div>
    <h1>HomePage</h1>
    <React.Suspense fallback="loading">
      HomePage rendered from App
    </React.Suspense>
  </div>
);

export { Home };
