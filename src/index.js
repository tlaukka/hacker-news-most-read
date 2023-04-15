import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import StoryPage from './StoryPage'
import styled from '@emotion/styled'

const Layout = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  background-color: #bababa;
`

function PageLayout () {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}

const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/story/:storyId',
        element: <StoryPage />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
