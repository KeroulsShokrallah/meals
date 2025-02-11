import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from './Components/Layout/Layout';
import Meals from './Components/Meals/Meals';
import Area from './Components/Area/Area';
import Inredients from './Components/Inredients/Inredients';
import Mealdetails from './Components/Mealdetails/Mealdetails';
import Notfound from './Components/Notfound/Notfound';
import "@fortawesome/fontawesome-free/css/all.min.css"



function App() {
let x = createBrowserRouter([
{
  path:"/",element:<Layout/>,children:[
    {index:true, element : <Meals/>},
    {path:"area", element : <Area/>},
    {path:"inredients", element : <Inredients/>},
    {path:"mealdetails/:id", element : <Mealdetails/>},
    {path:"*", element : <Notfound/>},
  ]
}
])

  return (
    <>
   <RouterProvider router={x}></RouterProvider>
   </>
  )
}

export default App
