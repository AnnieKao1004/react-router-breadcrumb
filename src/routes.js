import { Home, Books, Electronics, Mobile, Desktop, Laptop } from "./pages";

const routes = [
  {
    path: "/",
    element: <Home />,
    index: true,
    breadCrumbName: "Home",
  },
  {
    path: "books",
    element: <Books />,
    breadcrumbName: "Book",
  },
  {
    path: "electronics",
    element: <Electronics />,
    breadcrumbName: "Electronics",
    children: [
      {
        path: "mobile",
        element: <Mobile />,
        breadcrumbName: "Mobile Phone",
      },
      {
        path: "desktop",
        element: <Desktop />,
        breadcrumbName: "Desktop PC",
      },
      {
        path: "laptop",
        element: <Laptop />,
        breadcrumbName: "Laptop",
      },
    ],
  },
];

export default routes;
