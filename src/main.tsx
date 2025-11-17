import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, HashRouter } from 'react-router-dom';

import './index.css'

import { RouterProvider } from 'react-router-dom'
import App from './App.tsx'

import { Home } from './routes/Home.tsx'
import Repos from './routes/Repos.tsx'

const routes = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/repos/:login",
        element: <Repos />
      }]

  }
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <RouterProvider router={routes} />
    </HashRouter>
  </StrictMode>,
)
