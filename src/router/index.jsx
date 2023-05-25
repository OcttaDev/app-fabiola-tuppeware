import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Location from "../pages/location";
import Products from "../pages/products";
import About from '../pages/about'

import { NavBar } from "../components/navbar";

function RouterApp(){
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/location" element={<Location/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}
export default RouterApp