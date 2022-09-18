import React, { useEffect, useRef } from "react";
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
// const App3 = React.lazy(() => import("app3/App"));
import { mount } from "app3/App";

const App3Page = () => {
  const ref = useRef(null);
  useEffect(() => {
    mount(ref.current);
  }, []);
  return (
    <React.Suspense fallback="loading">
      <div className="app3-page-module" ref={ref} />
    </React.Suspense>
  );
};

export { App3Page };
