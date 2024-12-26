import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "./LayOut/MainLayout";
import Error from "./Error";
import Login from "./Secure/Login";
import SignIn from "./Secure/SignIn";
import Home from "./Pages/Home/Home";
import Newsletter from "./Pages/Home/newsletter";
import AllBlogs from "./Pages/AllBlogs";
import Details from "./Pages/Details";
import Add from "./Pages/Home/Add";
import Wishlist from "./Pages/Home/Wishlist";
import Update from "./Pages/Home/Update";
import Recentblog from "./Pages/Home/Recentblog";
import Featured from "./Pages/Home/Featured";
import PrivateRouter from "./Provider/PrivateRouter";

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
                 element: <Recentblog></Recentblog>
            },
            {
                path: '/AllBlogs',
                element: <AllBlogs></AllBlogs>

            },
            {
                path: '/details/:id',
                element: <Details></Details>,
            },
            {
                path: '/Update/:id',
                element:<PrivateRouter><Update></Update></PrivateRouter>

            },
            {
                path: '/Add',
                element:<PrivateRouter><Add></Add></PrivateRouter>

            },
            {
                path: '/Feature',
                element:<Featured></Featured>
            },
            {
                path:'/Wishlist',
                element:<PrivateRouter><Wishlist></Wishlist></PrivateRouter>

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