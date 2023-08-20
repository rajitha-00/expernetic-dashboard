import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import routes from "routes.js";
import TopNav from "components/navbar/TopNav";
import BG from '../../assets/Vector.png';

export default function Admin(props) {
  const { ...rest } = props;
  const location = useLocation();
  const [open, setOpen] = React.useState(true);
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);
      }
    }
    return activeRoute;
  };
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;
    for (let i = 0; i < routes.length; i++) {
      if (
        window.location.href.indexOf(routes[i].layout + routes[i].path) !== -1
      ) {
        return routes[i].secondary;
      }
    }
    return activeNavbar;
  };
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  document.documentElement.dir = "ltr";
  return (
    <>
      <img src={BG} className="fixed -z-0  bottom-0 "  alt="" />
      <img src={BG} className="fixed -z-0 right-0 top-0 rotate-180"  alt="" />
      <TopNav />
      <div className="flex h-full w-full">
        <Sidebar open={open} onClose={() => setOpen(false)} />

        <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">
          <main
            className={`mx-[12px] h-full flex-none transition-all md:pr-2 xl:ml-[313px]`}
          >
            <div className="h-full">
              <Navbar
                onOpenSidenav={() => setOpen(true)}
                brandText={currentRoute}
                secondary={getActiveNavbar(routes)}
                {...rest}
              />
              <div className="pt-5s sm:mx-auto lg:mx-10 mt-5 mb-auto h-full min-h-[90vh] p-2 md:pr-2">
                <Routes>
                  {getRoutes(routes)}
                  <Route
                    path="/"
                    element={<Navigate to="/admin/default" replace />}
                  />
                </Routes>
              </div>

            </div>
          </main>
        </div>
      </div>
    </>
  );
}
