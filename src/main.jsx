import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import FriendDetails from './Pages/FriendDetails/FriendDetails.jsx'
import Timeline from './Pages/Timeline/Timeline.jsx'
import Stats from './Pages/Stats/Stats.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'timeline',
        element: <Timeline />,
      },
      {
        path: 'stats',
        element: <Stats />,
      },
      {
        path: 'friends/:id',
        element: <FriendDetails />,
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
