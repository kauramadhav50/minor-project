import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home/Home.jsx'
import Network from './components/Network/Network.jsx'
import AddPost from './components/AddPost.jsx'
import Notification from './components/Notification/Notification.jsx'
import Jobs from './components/Job/Jobs.jsx'
import Message from './components/Message/Message.jsx'
import Login from './components/loginsignup/Login.jsx'
import Signup from './components/loginsignup/Signup.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "network",
        element: <Network />,
      },
      {
        path: "add-post",
        element: <AddPost />,
      },
      {
        path: "notification",
        element: <Notification />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      }
    ],
  }, {
    path: "message",
    element: <Message />
  },
  {
    path:"login",
    element:<Login/>
  },
  {
    path:"signup",
    element:<Signup/>
  }
]);


createRoot(document.getElementById('root')).render(


  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>

)
