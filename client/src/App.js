import React from "react";
import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "jquery/dist/jquery"
import "bootstrap/dist/js/bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'popper.js';
import {Route, Routes} from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Pages/Homepage/Home";
import Footer from "./Components/Footer/Footer";
import Contact from "./Pages/Contact/Contact";
import Creator from "./Pages/Creator/Creator";
import Coach from "./Pages/Coach/Coach";
import Error from "./Pages/404/Error";
import SeachBeach from "./Pages/SearchBeach/SeachBeach";
import Blog from "./Pages/Blog/Blog";
import When from "./Pages/When/When";
import JulianRock from "./Pages/Blog/Component/Blogs/JulianRock";
import ShellyBeach from "./Pages/Blog/Component/Blogs/ShellyBeach";
import GordonBay from "./Pages/Blog/Component/Blogs/GordonBay";
import Clovelly from "./Pages/Blog/Component/Blogs/Clovelly";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index path={"/"} element={<Home/>}/>
                <Route path={"/when"} element={<When/>}/>
                <Route path={"/where"} element={<SeachBeach/>}/>
                <Route path={"/creator"} element={<Creator/>}/>
                <Route path={"/coach"} element={<Coach/>}/>
                <Route path={"/blog"}>
                    <Route index element={<Blog/>}/>
                    <Route path={"julianrock"} element={<JulianRock/>}/>
                    <Route path={"shellybeach"} element={<ShellyBeach/>}/>
                    <Route path={"gordonbay"} element={<GordonBay/>}/>
                    <Route path={"clovelly"} element={<Clovelly/>}/>
                </Route>
                <Route path={"/contact"} element={<Contact/>}/>
                <Route path={"*"} element={<Error/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
