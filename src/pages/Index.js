import { useRef } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";


//layouts
import Footer2 from "../layouts/Footer2";
import ScrollToTop from "./../layouts/ScrollToTop";


//Pages
import ErrorPage from "./ErrorPage";
import UnderConstruction from "./UnderConstruction";
import Home2 from "./Home2";
import Header2 from "../layouts/Header2";


function Index() {
  var baseName = "/";
  const scrollTopBtn = useRef(null);

  window.onscroll = () => {
    window.scrollY > 650
      ? scrollTopBtn.current.setAttribute("style", "display:block")
      : scrollTopBtn.current.setAttribute("style", "display:none");
  };
  return (
    <BrowserRouter basename={baseName}>
      <Routes>
        <Route path="/error-404" exact element={<ErrorPage />} />
        <Route path="/under-maintenance" exact element={<UnderConstruction />}/>
        <Route element={<MainLayout2 />}>
          <Route path="/" exact element={<Home2 />} />
        </Route>
      </Routes>
      {/* <Switcher /> */}
      <ScrollToTop />
      <button
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        ref={scrollTopBtn}
        className="scroltop icon-up"
        type="button"
      >
        <i className="fas fa-arrow-up"></i>
      </button>
    </BrowserRouter>
  );
}

function MainLayout2() {
  return (
    <div className="page-wraper">
      <Header2 />
      <Outlet />
      <Footer2 />
    </div>
  );
}

export default Index;
