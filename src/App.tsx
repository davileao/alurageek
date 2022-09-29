import React from 'react';
import './styles/App.css';
import {Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

function App() {
    return (
        <main className="container">
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            <Footer/>
        </main>
    );
}

export default App;


// <Header/>
// <Routes>
//     <Route path="/" element={<Header/>}>
//         <Route index element={<Home/>}/>
//         <Route path="/cardapio" element={<Cardapio/>}/>
//         <Route path={"sobre"} element={<Sobre/>}/>
//     </Route>
//     <Route path="*" element={<NotFound/>}/>
// </Routes>
// <Footer/>