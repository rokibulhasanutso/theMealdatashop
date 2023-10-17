import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layouts/mainlayout";
import Kanye from "./pages/kanye";
import TheMealBd from "./layouts/TheMealBd";
import Home from "./pages/themealdb/Home";


const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Mainlayout/>,
      children : [
        {
          index: true,
          element: <Kanye/>
        },
      ],
      errorElement: <div>apni error khaisen</div>
    },
    {
      path: '/themealdb',
      element: <TheMealBd/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: 'meal',
          element: <h1>The meal pages</h1>
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  );
};

export default App;