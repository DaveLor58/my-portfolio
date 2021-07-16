import "./works.scss"
import {ArrowForwardIos} from "@material-ui/icons";


export default function Works() {
    return (
        <div className="works" id="works">
            <div className="slider">
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src="./assets/react.png" alt=""/>
                                </div>
                                <h2>title</h2>
                                <p>fladkjf;asdlkfjd;lkjdfadskljf
                                    aldksfj;dlksfj
                                    afdlsjf;dkf
                                    a;fkdlsjaf;dlskfjd;lfkjadf
                                </p>
                                <span>Projects</span>
                            </div>
                        </div>
                        <div className="right">
                            <img
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
            <ArrowForwardIos className="icon left" style={{fontSize: 60}}/>
            <ArrowForwardIos className="icon right" style={{fontSize: 60}}/>
        </div>
    );
}
