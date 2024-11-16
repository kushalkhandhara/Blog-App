import "./Section1.css";
import aboutImg from "../../../../assets/about/About2.png";

export default function Section1() {
  return (
    <div className="aboutSec1">
        
        <div className="aboutSec1-header ">
            <h2>
                Story Behind <span style={{color : "#6941C6"}}>BlogSphere</span>
            </h2>
            <div className="aboutSec1-description">
                <p>
                    Welcome to a space where ideas meet innovation, and stories unfold with purpose. Our blog web journey began as a simple dream—to build a platform where knowledge, creativity, and curiosity converge. Fueled by the passion for technology, design, and storytelling, we crafted this digital haven to inspire, inform, and connect.
                </p>
                <p>
                    Every feature, every page, and every line of code reflects our commitment to creating a seamless experience. From user-friendly interfaces to visually captivating layouts, we’ve put our heart into making this platform a joy to explore. With every blog post, we aim to spark conversations, share insights, and build a community of thinkers, dreamers, and doers.
                </p>
 
            </div>
        </div>
        <div className="aboutSec1-img ">
            <img src={aboutImg} alt="Error" />
        </div>

    </div>
  )
}
