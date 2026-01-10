import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const SinglePage = () => {
  const [blog, setBlog] = useState({}); 
  const navigate=useNavigate()
  const { id } = useParams();
  const SingleBlog = async () => {
    try {
      const response = await axios.get(`https://backendcms.up.railway.app/blog/${id}`);
    
      setBlog(response.data.data);
    } catch (error) {
      console.log("error in fetching single blog", error);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    SingleBlog();
  },[]);
  return (
    <>
   <section className="min-h-screen bg-gray-100 flex justify-center items-start pt-10 px-4">
  <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
    
    {/* Header with author & blog image */}
    <div className="flex items-center px-6 py-4 gap-4">
      {/* Author avatar */}
      <div className="w-12 h-12 bg-gray-300 rounded-full flex-shrink-0"></div>

      <div className="flex-1">
        <h2 className="text-2xl font-bold text-gray-900 mb-1">{blog?.title}</h2>
        <p className="text-sm text-gray-500 mb-2">{blog?.subTitle}</p>
        {blog.Image && (
          <img
            src={blog.Image}
            alt={blog?.title}
            className="w-full max-w-md h-64 object-cover rounded-lg mt-2"
          />
        )}
      </div>
    </div>

    {/* Blog content */}
    <div className="px-6 py-4 text-gray-800 space-y-4">
      <p>{blog?.description}</p>
    </div>

    {/* Footer with date and back button */}
    <div className="px-6 py-3 border-t border-gray-200 flex justify-between items-center text-sm text-gray-500">
      <button
        className="hover:text-blue-600 transition font-medium"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>
      <span>{new Date().toLocaleDateString()}</span>
    </div>
  </div>
</section>


    </>
  );
};

export default SinglePage;
