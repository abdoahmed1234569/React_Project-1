
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

let routes = createBrowserRouter([
  {path: '/', element: <Layout />, children: [
    {index: true, element: <Home />},
    {path: 'about', element: <About />},
    {path: 'portfolio', element: <Portfolio />},
    {path: 'contact', element: <Contact />},
    {path: '*', element: <h5 style={{height: '80vh'}}>not-found works!</h5>}
  ]}
])
function App() {
  return (
    <RouterProvider router={routes}></RouterProvider>

  )
}

export default App
