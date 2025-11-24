import React, { useState } from "react";

import { useEffect } from "react";
import axios from "axios";
const Home = () => {

  const [items, setItems] = useState([]);

  const fetchBlog = async () => {
    const response = await axios.get("http://localhost:3000/blog");
    const result = response.data.data;
    setItems(result);
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchBlog();
  }, []);
  return (
    <>
      <h1> hi </h1>
      <ul>
        {items.map((item) => (
          <div
            key={item._id}
            style={{
              border: "1px solid #ccc",
              margin: "10px",
              padding: "10px",
            }}
          >
            <h2>{item.title}</h2>
            <h4>{item.subTitle}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </ul>
    </>
  );
};

export default Home;
