import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route
} from 'react-router-dom'
import './index.css'
import Root from './routes/root'
import ErrorPage from './error-page'
import Login from './routes/login'
import Board from './routes/board'
import Index from './routes/index'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage/>}>
        <Route index element={<Index/>} />
        <Route
          path='/login'
          element={<Login/>}
          errorElement={<ErrorPage />}
        ></Route>
        <Route
          path='/board'
          element={<Board/>}
          errorElement={<ErrorPage />}
        ></Route>
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
