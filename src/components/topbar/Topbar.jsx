import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";
import { SocialIcon } from 'react-social-icons';


export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        Dave
                    </a>
                    <div className="itemContainer">
                        <Person  className="icon"/>
                        <span>+702 826 7000</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>davelor58@gmail.com</span>
                    </div>
                    <div className="itemContainer">
                        <div className="iconContainer">
                            <SocialIcon url="https://www.linkedin.com/in/dave-lorenz-castillo-3b6b021aa/" style={{ height: 35, width:35}} target="_blank" rel="noopener noreferrer" />
                        </div>
                        <div className="iconContainer">
                            <SocialIcon url="https://github.com/DaveLor58" style={{ height: 35, width:35}} target="_blank" rel="noopener noreferrer"/>
                        </div>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}
