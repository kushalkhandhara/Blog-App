import blogImg from "../../../../../assets/BlogImg2.png";
import img2 from "../../../../../assets/Image.png"
import "./Section1.css";
import { GoArrowUpRight } from "react-icons/go";

export default function Section1() {
  return (
    <div className="popular-section1 mt-4">
      <div className="d-flex gap-4 ">
        
        <div className="popular-main-blog d-flex flex-column gap-2 flex-1">
          <div className="popular-main-img mb-4">
            <img src={blogImg} className="" alt="" />
          </div>
          <div className="popular-header">
            <h6>Olivia Rhye • 1 Jan 2023</h6>
            
            <div className="d-flex align-items-center mt-3">
              <h5 className="me-auto">
                UX review presentations
              </h5>
              <GoArrowUpRight size={30} />                  
            </div>
            <div className="popular-desc mt-3">
              <p>
              How do you create compelling presentations that wow your colleagues and impress your managers?
              </p>
            </div>
            <div className="popular-tags d-flex flex-wrap gap-2 mt-2">
              <div className="tag d-print-inline-block py-1 px-3">
                Design
              </div>
              <div className="tag d-print-inline-block py-1 px-3">
                  Research
              </div>
              <div className="tag d-print-inline-block py-1 px-3">
                Presentations
              </div>
            </div>
          </div>
        </div>


        <div className="pop-side flex-1 d-flex flex-column gap-3">
          
          <div className="pop-side-blog d-flex align-items-center gap-4">
            <div className="pop-side-img flex-1">
              <img src={blogImg} alt="Error" />
            </div> 
            <div className="pop-side-data flex-1">
              <h4>
                Phoenix Baker • 1 Jan 2023
              </h4>
              <h3 className="py-1">Migrating to Linear 101</h3>
              <p>
              Linear helps streamline software projects, sprints, tasks, and bug tracking. Here how to get...
              </p>
              <div className="pop-side-tags mt-1 d-flex flex-wrap gap-2">
                <div className="tag d-inline-block py-1 px-2">
                  Design
                </div>
                <div className="tag d-inline-block py-1 px-2">
                  Research
                </div>
              </div>
            </div>
          </div>

          <div className="pop-side-blog d-flex align-items-center gap-4">
            <div className="pop-side-img flex-1">
              <img src={img2} alt="Error" />
            </div> 
            <div className="pop-side-data flex-1">
              <h4>
                Phoenix Baker • 1 Jan 2023
              </h4>
              <h3 className="py-1">Migrating to Linear 101</h3>
              <p>
              Linear helps streamline software projects, sprints, tasks, and bug tracking. Here how to get...
              </p>
              <div className="pop-side-tags mt-1 d-flex flex-wrap gap-2">
                <div className="tag d-inline-block py-1 px-2">
                  Design
                </div>
                <div className="tag d-inline-block py-1 px-2">
                  Research
                </div>
              </div>
            </div>
          </div>
 
 
        </div>
 
      </div>
    </div>
  )
}
