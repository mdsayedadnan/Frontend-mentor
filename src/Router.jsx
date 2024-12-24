import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./LayOut/MainLayout";
import Error from "./Error";
import Login from "./Secure/Login";
import SignIn from "./Secure/SignIn";
import Home from "./Pages/Home/Home";
import Newsletter from "./Pages/Home/newsletter";
import Recentblog from "./Pages/Home/Recentblog";
import AllBlogs from "./Pages/AllBlogs";
import Details from "./Pages/Details";
import Add from "./Pages/Home/Add";
import Wishlist from "./Pages/Home/Wishlist";
import Update from "./Pages/Home/Update";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [

            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/newsletter',
                element: <Newsletter></Newsletter>
            },
            {
                path: '/recent',
                element: <Recentblog></Recentblog>,
            },
            {
                path: '/AllBlogs',
                element: <AllBlogs></AllBlogs>

            },
            {
                path: '/details/:id',
                element: <Details></Details>,
                // loader: ({ params }) => fetch(`item.json/details/${params.id}`)
            },
            {
                path: '/Update',
                element:<Update></Update>

            },
            {
                path: '/Add',
                element:<Add></Add>

            },
            {
                path:'/Wishlist',
                element:<Wishlist></Wishlist>


            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {

            },
        ]
    },
]);

export default router