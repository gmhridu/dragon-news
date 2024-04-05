import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import About from "../Pages/About";
import Career from "../Pages/Career";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import News from "../Pages/News/News";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element:
        <PrivateRoutes>
          <News />
        </PrivateRoutes>
      },
      {
        path: '/about',
        element: <About/>
      },
      {
        path: '/career',
        element: <Career/>
      },
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/register',
        element: <Register/>

      }
    ]
 },
])

export default router;