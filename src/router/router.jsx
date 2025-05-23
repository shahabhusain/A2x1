import {createBrowserRouter,  createRoutesFromElements, Route} from 'react-router-dom'
import Layout from '../Layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'
import Carrier from '../pages/Carrier'
import ServicesDetail from '../pages/ServicesDetail'
import BlogDetail from '../pages/BlogDetail'

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Layout />}>
           <Route index element={<Home />} />
           <Route path='/about' element={<About />} />
           <Route path='/services' element={<Services />} />
           <Route path='/servicesdetail' element={<ServicesDetail />} />
           <Route path='/blogdetail' element={<BlogDetail />} />
           <Route path='/blog' element={<Blog />} />
           <Route path='/contact' element={<Contact />} />
           <Route path='/career' element={<Carrier />} />
        </Route>
        </>
    )
)