import "./Section2.css";
import blogImg from "../../../../../assets/blogImg3.png";
import { GoArrowUpRight } from "react-icons/go";

export default function Section2() {
  return (
    <div className="my-4">
      <div className="pop-sec2-main d-flex gap-4  ">
        
        <div className="pop-sec2-side1  ">
          <img src={blogImg}  alt="Error"/>
        </div>

        <div className="pop-sec2-side2">
          <h6 className="mt-3">Olivia Rhye • 1 Jan 2023</h6>
          <h4>Grid system for better Design User Interface <span className="ps-1"><GoArrowUpRight/></span></h4>
          <p>
          A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.
          </p>

          <div className="pop-sec2-tags d-flex gap-2 flex-wrap">
            
            <div className="pop-sec2-tag py-1 px-3">
              Design
            </div>
            <div className="pop-sec2-tag py-1 px-3">
              Code
            </div>
            <div className="pop-sec2-tag py-1 px-3">
              Hotel
            </div>

          </div>
        
        </div>

      
      </div>
    </div>
  )
}
