import { useState } from "react";
import "./Navbar.css";
import logo from '../../images/logo.png';

function Navbar() {

    const [nav, setNav] = useState(false);

    function biggerNav() {
        if (nav) {
            setNav(false);
            document.getElementById("scrolled").style.display = "none";
            document.getElementById("cross").style.display = "none";
            document.getElementById("hamburger").style.display = "block";
            document.getElementById("Navbar").style.height = "10vh";
        }
        else {
            setNav(true);
            document.getElementById("Navbar").style.height = "60vh";
            document.getElementById("hamburger").style.display = "none";
            document.getElementById("cross").style.display = "block";
            setTimeout(() => {
                document.getElementById("scrolled").style.display = "grid";
            }, 400);
        }
    }

    return (
        <div id="Navbar">
            <div className="logo">
                <a href="#home"><img src={logo} className="invertColor" alt="logo_ved"></img></a>
            </div>
            <div className="titles">
                <a href="#concept" id="studies">Le concept</a>
                <a href="#episodes" id="resume">Episodes</a>
                <a href="#plateformes" id="home">Plateformes</a>
                <span id="hamburger" onClick={() => biggerNav()}></span>
                <span id="cross" onClick={() => biggerNav()}></span>
            </div>
            <div id="scrolled">
                <a href="#concept" id="studies">Concept</a>
                <a href="#episodes" id="resume">Episodes</a>
                <a href="#plateformes" id="home">Plateformes</a>
            </div>
        </div>
    );
}

export default Navbar;