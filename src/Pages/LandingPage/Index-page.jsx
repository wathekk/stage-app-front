import React from "react";

// core components
import IndexNavbar from "../../Components/views/Navbar/Navbar.component";
import IndexHeader from "../../Components/views/Header/Header.component";

import "./index-page.styles.css";

function Index() {
  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <IndexHeader />
        <div className="main">
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
          <h1>Landing page</h1>
        </div>
      </div>
    </>
  );
}

export default Index;
