import React from "react";

import "./main-content-layout.style.scss";

const MainContentLayout = (props) => {
  const { className, children, ...otherAttributes } = props;
  return (
    <main
      className={["main-content-layout", className ?? ""].join(" ")}
      {...otherAttributes}
    >
      {children}
    </main>
  );
};

export default MainContentLayout;
