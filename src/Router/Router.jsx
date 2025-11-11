import { createBrowserRouter } from "react-router";
import RootLayout from "../Layout/RootLayout";
import Hero from "../Component/Hero/Hero";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Registretion/Registretion";
import ProductsDetails from "../Pages/Products/ProductsDetails";
import MyExport from "../Pages/MyExports/MyExport";
import AboutUs from "../Component/AboutUs/AboutUs";
import MyImport from "../Pages/MyImport/MyImport";
import LatestProducts from "../Pages/LatestProducts/LatestProducts";
import AllProducts from "../Pages/AllProducts/AllProducts";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
           index: true,
           Component:  Hero,
        },
        {
           path: "products-details/:id",
           loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
           Component: ProductsDetails,
        },
        {
            path: "latest-products",
            element: <LatestProducts />
         },
        {
            path: "allproducts",
            element: <AllProducts/>
         },
        {
           path: "login",
           Component: Login,
        },
        {
           path: "register",
           Component: Register,
        },
        {
           path: "about",
           element: <AboutUs></AboutUs>,
        },
        {
         path: "export",
         element:<MyExport></MyExport>,
        },
        {
         path: "import",
         element:<MyImport></MyImport>,
        }
    ]
  },
  
]);
export default router;