import "./about.scss"
import myresume from "../../files/castid5_resume.pdf"

export default function About() {
    return (
        <div className="about" id="about">
            <h1>About Me</h1>
            <div className="boxContainer" >
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>Overview</h2>   
                                <p>
                                    Welcome to my portfolio! I am currently a Computer Science BS major at the University of Nevada Las Vegas. As of now, I am a fourth year student 
                                    focusing on Software Development. I enjoy programming and have become efficient in a few languages such as Python, C++, Java, Javascript, Assembly, and hope to pick up 
                                    a few more soon. 
                                </p>

                                <a href={myresume} target="_blank" rel="noopener noreferrer">Click to see resume</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
