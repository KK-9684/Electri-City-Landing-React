import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "../pages/home";
import Roadmap  from "../pages/roadmap";
import LogoBar from "../components/LogoBar";
import ScrollTop from "../components/ScrollTop";
import About from "../pages/about";
import Nurtle from "../pages/nurtle";
import UniCred from "../pages/unicred";
import Event from "../pages/events";
import Error from "../pages/error";
import Footer from "../components/Footer";
export const Links = () => {
    return (
        <BrowserRouter>
            <LogoBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/unicred" element={<UniCred/>}/>
                <Route path="/events" element={<Event/>}/>
                <Route path="/roadmap" element={<Roadmap />} />
                <Route path="/about" element={<About />} />
                <Route path="/nurtle" element={<Nurtle />} />
                <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
            <ScrollTop />
        </BrowserRouter>
    );
};