import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from 'react'
 const posts = [
  { id: 1, title: "React Basics", content: "Learn the basics of React.js" },
  { id: 2, title: "React Router", content: "Using React Router for navigation" },
  { id: 3, title: "Hooks in React", content: "Understanding React Hooks" },
  { id: 4, title: "JavaScript Fundamentals", content: "Core concepts of JS" },
  { id: 5, title: "Advanced React", content: "Performance optimization and advanced patterns" },
  { id: 6, title: "Tailwind CSS", content: "Build modern UI with Tailwind styling" },
  { id: 7, title: "Node.js Basics", content: "Backend development with Node.js" },
  { id: 8, title: "Express.js API", content: "Create powerful APIs using Express framework" },
  { id: 9, title: "MongoDB Essentials", content: "Learn NoSQL database concepts and CRUD operations" },
  { id: 10, title: "TypeScript for Beginners", content: "Type-safe JavaScript development" },
  { id: 11, title: "Next.js Guide", content: "Learn server-side rendering and file-based routing" },
  { id: 12, title: "HTML & CSS Mastery", content: "Foundational skills for all web developers" },
  { id: 13, title: "Git & GitHub", content: "Version control and collaboration basics" },
  { id: 14, title: "Python Programming", content: "Learn Python fundamentals and logic building" },
  { id: 15, title: "Django Web Development", content: "Build web apps using the Django framework" }
];
const useQuery = ()=> {
  return new URLSearchParams(useLocation().search);
}
const Courses = () => {
 const query = useQuery();
 const searchTerm = query.get("q") || "";
 const navigate = useNavigate();
const [search, setSearch] = useState(searchTerm);

useEffect(()=> {
  if(search) {
     navigate(`?q=${search}`);
  }else {
    navigate("");
  }
},[search, navigate])
const filteredpost = posts.filter((post)=> post.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
  return (
    <>
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-md rounded-lg">
       <h2 className="text-2xl p-2 font-semibold mb-4">Search Posts</h2>
       <input className="w-full p-2 border border-gray-300 rounded-md"
        type="text" value={search} placeholder="searchPosts..."
        onChange={(e) => setSearch(e.target.value)} />
         <div className="mt-6">
          {filteredpost.length > 0 ? (
            <div className="space-y-4">
              {filteredpost.map((post) => (
                <div
                  key={post.id}
                  className="p-4 bg-gray-50 hover:bg-gray-100 transition rounded-lg border border-gray-200"
                >
                  <h2 className="text-lg font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mt-1">{post.content}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-red-600 text-center font-medium mt-4">
              No post found
            </p>
          )}
        </div>
      </div>
    </>
  )
}

export default Courses;