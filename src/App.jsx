import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom"

import Sign_Up from "./pages/Sign_Up"
import Map from "./pages/Map"
import Home from "./pages/Home"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

import "./style.scss"

const Layout = () => {
  return (
      <>
      <Navbar />
      <Outlet/>
      <Footer />
      </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/sign_up",
        element: <Sign_Up />
      },
      {
        path: "/map",
        element: <Map />
      },
    ]
  },
]);

function App() {
  return (
      <div className="app">
          <div className="container">
              <RouterProvider router={router} />
          </div>
      </div>
  );
}

export default App;