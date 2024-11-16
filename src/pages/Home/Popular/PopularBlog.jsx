import Section1 from "./Sections/Section1/Section1";
import Section2 from "./Sections/Section2/Section2";
import Section3 from "./Sections/Section3/Section3";
import {useMediaQuery} from "react-responsive";
 
export default function PopularBlog() {


  const isMobile = useMediaQuery({ maxWidth: 767 })


  return (
    <div className="popular-blog mt-5">
      <h2>
        Most Popular Blogs
      </h2>
      <div className="popular-sections d-flex flex-column align-items-center gap-3">
        {isMobile ? <div></div>  : <>
          <Section1/>
          </>
        }
        <Section2/>
        <Section3/>
      </div>
    </div>
  )
}
