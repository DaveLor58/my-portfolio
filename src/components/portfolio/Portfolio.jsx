import "./portfolio.scss"
import Portfoliolist from "../portfoliolist/Portfoliolist"
import { useEffect, useState} from "react"
import {
    reactPortfolio,
    pythonPortfolio,
    cPortfolio,
    schoolPortfolio
} from "../../data"


export default function Portfolio() {
    const [selected, setSelected] = useState("react")
    const [data, setData] = useState([]);
    const list = [
        {
          id: "react",
          title: "React App",
        },
        {
          id: "python",
          title: "Python App",
        },
        {
          id: "c++/c#",
          title: "C++/C# App",
        },
        {
          id: "school",
          title: "School Projects",
        },
      ];

    useEffect(() =>{
        switch(selected){
            case "react":
                setData(reactPortfolio);
                break;
            case "python":
                setData(pythonPortfolio);
                break;
            case "c++/c#":
                setData(cPortfolio);
                break;
            case "school":
                setData(schoolPortfolio);
                break;
            default:
                setData(reactPortfolio);
        }
    }, [selected]);
    
    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(item => (
                    <Portfoliolist 
                        title={item.title} 
                        active={selected === item.id} 
                        setSelected={setSelected}
                        id = {item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map(d =>(
                    <div className="item">
                        <img 
                            src={d.img}
                            alt=""
                        />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}
