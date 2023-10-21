import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Mainlayout from "./layouts/mainlayout";
import Kanye from "./pages/kanye";
import TheMealBd from "./layouts/TheMealBd";
import Home from "./pages/themealdb/Home";
import Meal from "./pages/themealdb/Meal";
import Search from "./pages/themealdb/Search";


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
          path: 'meal/:cate_name',
          element: <Meal/>
        },
        {
          path: 'search',
          element: <Search/>
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