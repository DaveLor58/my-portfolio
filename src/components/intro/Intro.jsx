import "./intro.scss"
import {ExpandMore} from "@material-ui/icons";
import { useEffect, useRef } from "react";
import {init} from "ityped";
export default function Intro() {

    const textRef = useRef();

    useEffect(() =>{
        init(textRef.current, {
            showCursor: true,
            typeSpeed: 80,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["A College Student!", "An Aspiring Software Engineer!","A Programming Enthusiast!", "A Quick Learner!"],
        });
    },[]);

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/myPic.png" alt=""/>
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
                <a href="#about">
                    <ExpandMore className="icon"/>
                </a>
            </div>
        </div>
    );
}
