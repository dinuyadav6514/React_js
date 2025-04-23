import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import {Home , About , Layout , Header , Footer , Contact , User, Github} from './components/export.js'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path:"home",
//         element : <Home />
//       },
//       {
//         path : "about",
//         element : <About />
//       },
//       {
//         path: "contact",
//         element: <Contact />
//       },
//       {
//         path: "",
//         element: <Header />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element = {<Layout/>}>
      <Route path = "home" element = {<Home/>}/>
      <Route path = "about" element = {<About/>}/>
      <Route path = "github" element = {<Github />} />
      <Route path = "contact" element = {<Contact/>}/>
      <Route path = "user/:userId" element = {<User/>}/>
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router ={router}/>
  </StrictMode>,
)
