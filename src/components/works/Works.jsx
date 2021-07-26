import "./works.scss"
import {ArrowForwardIos} from "@material-ui/icons";
import { useState } from "react"; 
//import ReactPlayer from "react-player"

export default function Works() {

    const [currentSlide,setCurrentSlider] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/react.png",
            icon2: "./assets/todo-pic.png",
            title: "Todo App",
            desc:
              `A simple react project that I created that allows the user to input a list of to-dos
              and be able to filter out incomplete and completed items.`,
            img: // display the language proj was created in
              "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
            url: // displays the video associated to project 
            "https://www.youtube.com/watch?v=rW7OB_HDCGQ",
            projUrl: // display link to proj
             "https://davelor58.github.io/TodoApp/"
          },
          {
            id: "2",
            icon: "./assets/react.png",
            icon2: "./assets/recipe-pic.png",
            title: "Recipe App",
            desc:
              "A simple app that I created which allows users to search a recipe for a dish. The app will display the types of food along with ingredients and total calories.",
            img: // display the language proj was created in
              "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
            url: // displays the video associated to project 
            "https://www.youtube.com/watch?v=qII6Y7t1KBM",
            projUrl: // display link to proj
            "https://davelor58.github.io/recipeApp/"
          },
          
    ];

    const handleClick = (way) => {
        way === "left" ? setCurrentSlider(currentSlide > 0 ? currentSlide-1 : data.length-1) :
        setCurrentSlider(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="works" id="works">
            <h1> Featured Works</h1>
            <div 
                className="slider" 
                style={{transform: `translateX(-${currentSlide * 100}vw)`}}
            >
                {data.map((d) => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt=""/>
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>
                                        <a href={d.projUrl} target="_blank" rel="noopener noreferrer">Go To Project</a>
                                    </span>
                                </div>
                            </div>
                            <div className="right">
                              <div className="imgContainer">
                                <img src={d.icon2} alt=""/>
                              </div>
                              
                         {/*       
                                    Project Video In Progress
                                    <ReactPlayer 
                                    url = {d.url}
                                    height = "80%"
                                    controls={true}
                                    onContextMenu={(e) => e.preventDefault()}
                         /> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
                <ArrowForwardIos className="icon left" style={{fontSize: 60}} onClick={() => handleClick("left")}/>
                <ArrowForwardIos className="icon right" style={{fontSize: 60}} onClick={() => handleClick()}/>
            </div>
    );
}
