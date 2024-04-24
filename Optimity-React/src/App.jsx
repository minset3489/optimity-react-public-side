import '@fontsource-variable/montserrat';
import './index.css'

import {
  createBrowserRouter, 
  createRoutesFromElements,
  Route, 
  RouterProvider
} from 'react-router-dom'

// pages
import Home from './pages/Home'
import Solutions from  './pages/solutions/Solutions'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'

import SolutionDetails from './pages/solutions/SolutionDetails';
import ServiceDetails from './components/ServiceDetails';

// layouts
import RootLayout from "./layouts/RootLayout"
import SolutionLayout from './layouts/SolutionLayout';
import NotFound from './NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      
      <Route path="solutions" element={<SolutionLayout />} >
        <Route index element={<Solutions/>} />
      </Route>

      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />


      <Route path="solutions/:id" element={<SolutionDetails/>} />
      <Route path="services/:id" element={<ServiceDetails/>} />

      <Route path="*" element={<NotFound/>} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App