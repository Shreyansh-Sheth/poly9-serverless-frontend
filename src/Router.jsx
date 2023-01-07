import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import IndexPage from "./pages/Index";
import AddUserPage from "./pages/user/add";
import EditUerPage from "./pages/user/edit";
const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <IndexPage />, index: true },
      { element: <AddUserPage />, path: "/user/add" },
      { element: <EditUerPage />, path: "/user/edit/:id" },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={Routes} />;
}
