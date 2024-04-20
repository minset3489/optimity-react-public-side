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
import Solutions from './pages/Solutions'
import About from './pages/About'
import News from './pages/News'
import Contact from './pages/Contact'


// layouts
import RootLayout from "./layouts/RootLayout"
import NotFound from './NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="solutions" element={<Solutions />} />
      <Route path="about" element={<About />} />
      <Route path="news" element={<News />} />
      <Route path="contact" element={<Contact />} />

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