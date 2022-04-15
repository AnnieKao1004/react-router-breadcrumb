import React from "react";
import { Outlet, Link, useLocation, matchRoutes } from "react-router-dom";
import routes from "./routes";

const BreadCrumb = ({ location }) => {
  let matchedRoutes = matchRoutes(routes, location); // to see which routes is matched (return an array)

  matchedRoutes = [
    { pathname: "/", route: { breadcrumbName: "Home" } },
    ...matchedRoutes,
  ];

  return (
    <nav>
      <ol className="breadcrumb">
        {matchedRoutes.map((matchRoute, i) => {
          const { breadcrumbName } = matchRoute.route;
          const { pathname } = matchRoute;

          if (location.pathname === pathname) {
            return (
              <li key={i} className="breadcrumb-item active">
                {breadcrumbName}
              </li>
            );
          }
          return (
            <li key={i} className="breadcrumb-item">
              <Link to={pathname}>{breadcrumbName}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

/**
 * These are root pages
 */
const Home = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="py-3">Home</h1>
      <BreadCrumb location={location} />
    </>
  );
};

const Books = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="py-3">Books</h1>
      <BreadCrumb location={location} />
    </>
  );
};

/**
 * These are pages nested in Electronics
 */
const Mobile = () => {
  return <h3>Mobile Phone</h3>;
};

const Desktop = () => {
  return <h3>Desktop PC</h3>;
};

const Laptop = () => {
  return <h3>Laptop</h3>;
};

const Electronics = () => {
  const location = useLocation();

  return (
    <>
      <h1 className="py-3">Electronics</h1>

      <BreadCrumb location={location} />

      <Outlet />
    </>
  );
};

export { Home, Books, Electronics, Mobile, Desktop, Laptop };
