import "./Section3.css";
import { useState } from "react";
import blogImg from "../../../../../assets/blogImg4.png";
import blogImg1 from "../../../../../assets/blogImg2.png";
import blogImg2 from "../../../../../assets/blogImg3.png";
import blogImg3 from "../../../../../assets/blogImg4.png";
import blogImg4 from "../../../../../assets/blogs/blogImg7.png";
import blogImg5 from "../../../../../assets/blogs/blogImg5.png";
import blogImg6 from "../../../../../assets/blogs/blogImg6.png";


import { GoArrowUpRight } from "react-icons/go";

export default function Section3() {
    const [blogs] = useState([
        {
          id: 1,
          title: "Design Trends in 2024",
          author: "Alice",
          date: "Sunday, 1 Jan 2023",
          tags: ["Design", "Research"],
          image: blogImg,
          description: "Explore the top design trends of the coming year.",
        },
        {
          id: 2,
          title: "Top JavaScript Frameworks",
          author: "Bob",
          date: "Monday, 15 Jan 2023",
          tags: ["Coding", "News"],
          image: blogImg1,
          description: "A look at the most popular JavaScript frameworks.",
        },
        {
          id: 3,
          title: "Social Media Strategies",
          author: "Charlie",
          date: "Wednesday, 25 Jan 2023",
          tags: ["Social Media", "Market"],
          image: blogImg2,
          description: "Maximizing your reach with modern social media strategies.",
        },
        {
          id: 4,
          title: "How to Start a YouTube Channel",
          author: "Daisy",
          date: "Saturday, 10 Feb 2023",
          tags: ["YouTube", "Jobs"],
          image: blogImg3,
          description: "Step-by-step guide to launching a successful YouTube channel.",
        },
        {
          id: 5,
          title: "Remote Work in 2024",
          author: "Eve",
          date: "Thursday, 22 Feb 2023",
          tags: ["Jobs", "Research"],
          image: blogImg4,
          description: "Analyzing trends in remote work and their impact on productivity.",
        },
        {
          id: 6,
          title: "The Future of Web Design",
          author: "Frank",
          date: "Tuesday, 5 Mar 2023",
          tags: ["Design", "Market"],
          image: blogImg5,
          description: "What does the future hold for web design? Let's explore.",
        },
        {
          id: 7,
          title: "AI in Modern Coding",
          author: "Grace",
          date: "Friday, 15 Mar 2023",
          tags: ["Coding", "Research"],
          image: blogImg6,
          description: "The role of AI in assisting modern software developers.",
        },
        {
          id: 8,
          title: "Breaking News in Tech",
          author: "Henry",
          date: "Monday, 20 Mar 2023",
          tags: ["News", "Coding"],
          image: blogImg,
          description: "Stay updated with the latest breakthroughs in technology.",
        },
        {
          id: 9,
          title: "Social Media Growth Tips",
          author: "Ivy",
          date: "Wednesday, 25 Mar 2023",
          tags: ["Social Media", "YouTube"],
          image: blogImg4,
          description: "How to grow your social media following organically.",
        },
      ]);
  
    return (
    <div className="pop-section3 my-2">
        <h2 className="mt-2">Other Popular Blog Posts</h2>
        <div className="mt-4">

            <div className="pop-section3-blogs d-flex flex-wrap gap-4">
                {blogs.map((blog,index)=>{
                    return <div className="pop-section3-blog d-flex flex-column gap-5" key={index}>
                        <div className="pop-section3-img">
                            <img src={blog.image} alt={"Error"} />
                        </div>
                        <div className="pop-section3-data">
                            <h6>
                                {blog.author} • {blog.date}
                            </h6>
                            <h5 className="py-2">
                                {blog.title} <span className="ps-1"><GoArrowUpRight/></span>
                            </h5>
                            <p>
                                {blog.description}
                            </p>
                            {/* Tags */}
                            <div className="pop-sec-3tags d-flex flex-wrap gap-2">
                                {blog.tags.map((tag,index)=>{
                                    return <span key={index}>{tag}</span>;
                                })}
                            </div>
                        </div>

                    </div>
                })}

 

            </div>
        
        </div>
    </div>
  )
}
