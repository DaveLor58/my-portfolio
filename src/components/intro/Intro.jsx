import "./intro.scss"
import {ExpandMore} from "@material-ui/icons";
import { useEffect, useRef } from "react";
import {init} from "ityped";
export default function Intro() {

    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60,
            strings: ["A College Student!", "An Aspiring Software Engineer!","A Programming Enthusiast!"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/author_pic.png" alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello There! I'm</h2>
                    <h1>Dave Lorenz Castillo,</h1>
                    <h3>
                        <span ref={textRef}></span>
                    </h3>
                </div>
                <a href="#portfolio">
                    <ExpandMore className="icon"/>
                </a>
            </div>
        </div>
    );
}
