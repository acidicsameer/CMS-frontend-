import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      
      
      <h1 className="text-xl font-bold text-purple-700 cursor-pointer">
        MyBlog
      </h1>

    
      <div className="flex items-center gap-6 font-medium">
        <Link
          to="/"
           className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
         >
          Home
        </Link>

        <button
          onClick={() => navigate("/add")}
          className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition cursor-pointer">
          Add Blog
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
