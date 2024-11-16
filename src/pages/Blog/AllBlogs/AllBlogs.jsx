/* eslint react/prop-types: 0 */
import "./AllBlogs.css";
import Blog from "./Blog/Blog";

export default function AllBlogs({ blogs }) {

  console.log(blogs);
  return (
    <div className="mt-5">
      <div className="allblog d-flex flex-wrap gap-3">
        {blogs.length > 0 ? (
          blogs.map((blog) => (
            <Blog
              key={blog.id}
              title={blog.title}
              author={blog.author}
              date={blog.date}
              image={blog.image}
              description={blog.description}
              tags = {blog.tags}
            />
          ))
        ) : (
          <p>No blogs found matching the criteria.</p>
        )}
      </div>
    </div>
  );
}
