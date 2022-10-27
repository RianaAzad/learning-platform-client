import { createBrowserRouter, Link } from "react-router-dom";
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
import error from '../Assests/error.png';


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
                loader: ({params}) => fetch(`https://education-platform-server.vercel.app/courses/${params.id}`)
            },
            {
                path: '/course-details/:id',
                loader: ({params}) => fetch(`https://education-platform-server.vercel.app/course-details/${params.id}`),
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
                path: '/checkout/:id',
                loader: ({params}) => fetch(`https://education-platform-server.vercel.app/course-details/${params.id}`),
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
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            }
        ]
    },
    {
        path: '*', 
        element: <div className='bg-white text-center'>
          <img className='w-75 m-auto' src={error} alt="" />
          <div className='h5'> <p className="h1  text-danger">Error: 404</p>This route is not found! Please Enter a valid page link. Thank you!<br></br>
          <Link to='/'>Back to Home</Link>
          </div>
        </div>
      }
])