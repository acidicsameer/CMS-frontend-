import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Home = () => {

  const [items, setItems] = useState([]); 

  const fetchBlog = async () => {
    const response = await axios.get("https://cms-backend-iism.onrender.com");
    const result = response.data.data;
    setItems(result);
  }; 
  const deleteBlog=async(_id)=>{
try {
   const response= await axios.delete(`http://localhost:3000/blog/${_id}`) 
 console.log(response.data)   
 setItems((curr)=>curr.filter((item)=>item._id !== _id))

} catch (error) { 
  console.log("error while deleting blog",error)
  
}
  }
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlog();
  }, []);
  return (
    <>
  
      <section className="min-h-screen bg-gray-100 py-10 px-4">
  <div className="max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Blogs</h1>

    <ul className="space-y-6">
      {items.map((item) => (
        <li
          key={item._id}
          className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-1">{item.title}</h2>
          <h4 className="text-gray-500 mb-3">{item.subTitle}</h4>
          <p className="text-gray-700 mb-4">{item.description}</p>
          <div className="flex justify-between items-center">
            <Link
              to={`/singleblog/${item._id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              Read More →
            </Link>
            <button
              onClick={() => deleteBlog(item._id)}
              className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Delete
            </button>
           <Link to={`/edit/${item._id}`} >
<button  className="px-3 py-1 bg-green-600 text-white rounded hover:bg-red-700 transition">Update Blog</button>

           </Link>
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>

    </>
  );
};

export default Home;
