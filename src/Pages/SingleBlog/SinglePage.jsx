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
      const response = await axios.get(`http://localhost:3000/blog/${id}`);
    
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
  <div className="w-full max-w-xl bg-white rounded-2xl shadow-md border border-gray-200 overflow-hidden">
    <div className="flex items-center px-6 py-4">
      <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
      <div>
        <h2 className="font-semibold text-gray-900">{blog?.title}</h2>
        <p className="text-sm text-gray-500">{blog?.subTitle}</p>
      </div>
    </div>

    <div className="px-6 pb-4 text-gray-800">
      <p className="mb-4">{blog?.description}</p>
    </div>

    <div className="px-6 py-2 border-t border-gray-200 flex justify-between text-sm text-gray-500">
      <button className="hover:text-blue-600 transition" onClick={() => navigate(-1)}>
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
