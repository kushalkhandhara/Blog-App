/* eslint react/prop-types: 0 */
import "./Blog.css";
import { GoArrowUpRight } from "react-icons/go";

export default function Blog({ title, author, date, image, description,tags }) {
  console.log("Tags",tags)
  return (
    <div className="blogData d-flex flex-column gap-3">
      <div className="blogImg">
        <img src={image} alt="Blog" />
      </div>
      <div className="blogDetails">
        <h6>{date}</h6>
        <h5 className="py-2">
          {title} <span className="ps-1"><GoArrowUpRight /></span>
        </h5>
        <p>{description}</p>
        <p><strong>Author:</strong> {author}</p>
        
        <div className="blogtags d-flex flex-wrap gap-2">
         {
          tags.map((tag,index)=>{
            return <span key={index}>
              {tag || 'tag'}
            </span>
          })
         }
        </div>

      </div>
    </div>
  );
}
