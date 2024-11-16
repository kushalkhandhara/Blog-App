import Header from "../../components/header/Header";
import AllBlogs from "./AllBlogs/AllBlogs";
import "./Blog.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useState } from "react";

// Images
import blogImg from "../../assets/BlogImg2.png"
import blogImg1 from "../../assets/BlogImg3.png"
import blogImg2 from "../../assets/Image.png"
import blogImg3 from "../../assets/blogImg4.png";
import blogImg4 from "../../assets/blogs/blogImg4.png";
import blogImg5 from "../../assets/blogs/blogImg5.png"
import blogImg6 from "../../assets/blogs/blogImg6.png"
import blogImg7 from "../../assets/blogs/blogImg7.png"
import blogImg8 from "../../assets/blogs/blogImg8.png"

const animatedComponents = makeAnimated();

export default function Blog() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
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
      image: blogImg7,
      description: "Stay updated with the latest breakthroughs in technology.",
    },
    {
      id: 9,
      title: "Social Media Growth Tips",
      author: "Ivy",
      date: "Wednesday, 25 Mar 2023",
      tags: ["Social Media", "YouTube"],
      image: blogImg8,
      description: "How to grow your social media following organically.",
    },
  ]);

  // Tags
  const tags = [
    { label: "Design", value: "Design" },
    { label: "Research", value: "Research" },
    { label: "Coding", value: "Coding" },
    { label: "News", value: "News" },
    { label: "YouTube", value: "YouTube" },
    { label: "Social Media", value: "Social Media" },
    { label: "Jobs", value: "Jobs" },
    { label: "Market", value: "Market" },
  ];

  // Filtered Blogs
  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch = searchInput === "" || blog.title.toLowerCase().includes(searchInput.toLowerCase()) || blog.author.toLowerCase().includes(searchInput.toLowerCase());
    const matchesTags =selectedTags.length === 0 || selectedTags.some((tag) => blog.tags.includes(tag.value));

    return matchesSearch && matchesTags;
  });

  return (
    <div className="w-100 d-flex flex-column gap-4 mb-4">
      <Header />

      <div className="container">
        <div className="filter-Data mt-5">
          <h2>Search Blogs</h2>

          <input
            type="text"
            className="search mt-2"
            placeholder="Search Blog By Its Author Name or Title"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />

          <div className="filter-tags mt-2">
            <Select
              closeMenuOnSelect={false}
              components={animatedComponents}
              isMulti
              options={tags}
              menuPlacement="top"
              placeholder="Select Tags.."
              value={selectedTags}
              onChange={setSelectedTags}
            />
          </div>
        </div>

        <AllBlogs blogs={filteredBlogs} />
      </div>
    </div>
  );
}
