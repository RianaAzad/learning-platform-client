import { createBrowserRouter } from "react-router-dom";
import Categories from "../Courses/Categories";
import Course from "../Courses/Course";
import CourseDetails from "../Courses/CourseDetails";
import CoursesList from "../Courses/CoursesList";
import Home from "../Home/Home";
import Main from "../layout/Main";
import TermsAndConditions from "../Others/TermsAndConditions";
import Blog from "../Pages/Blog";
import CheckOut from "../Pages/CheckOut";
import FAQ from "../Pages/FAQ";
import Message from "../Pages/Message";
import Profile from "../Pages/Profile";
import Purchase from "../Pages/Purchase";
import Login from "../Signin/Login";
import Register from "../Signin/Register";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categories',
                element: <Categories></Categories>
            },
            {
                path: '/courses-list/:id',
                element: <CoursesList></CoursesList>
            },
            {
                path: '/courses/',
                element: <Course></Course>
            },
            {
                path: '/courses/:id',
                element: <Course></Course>,
                loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/course-details/:id',
                loader: ({params}) => fetch(`http://localhost:5000/course-details/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/checkout',
                element: <PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/purchase',
                element:<Purchase></Purchase>
            }
    

        ]
    }
])