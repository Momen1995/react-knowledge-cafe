import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = () => {

  const [blogs,setBlogs] = useState([])

  useEffect(() =>{
    fetch('blogs.json')
    .then(res => res.json())
    .then(data => setBlogs(data))
  },[])
  return (
    <div className="w-8/12 bg-gray-100 p-4">
      <div>
        {
          blogs.map(blog =><Blog key={blog.id} blog={blog}></Blog>)
        }
      </div>
    </div>
  );
};

export default Blogs;