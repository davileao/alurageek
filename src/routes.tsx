import {Route, Routes} from "react-router-dom";
import Navigation from "./pages/Navigation";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AllProducts from "./pages/AllProducts";
import {ProductDetailsPage} from "./pages/ProductDetails";
import NotFound from "./pages/NotFound";
import Admin from "./pages/Admin";
import NewProduct from "./pages/Admin/NewProduct";
import React from "react";
import CategoryPage from "./pages/CategoryPage";

export default  function AppRouter() {

    return (
        <Routes>

            <Route path="/" element={<Navigation/>}>
                <Route index element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/allproducts" element={<AllProducts/>}/>
                <Route path="/productpage/:id" element={<ProductDetailsPage/>}/>
                <Route path="/categorypage/:id" element={<CategoryPage/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>

            <Route path="*" element={<NotFound/>}/>
            <Route path="/admin" element={<Admin/>}>
                <Route path="newproduct" element={<NewProduct/>}/>
            </Route>
        </Routes>


    );
}