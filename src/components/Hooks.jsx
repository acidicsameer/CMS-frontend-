import React, { useState,useEffect } from "react";

const Hooks = () => {
  const arr = [1,2,3,4,5,6]
 

  const [array,setArray] = useState([]);
  //   function increase() {
  //     setPrice(price + 1);
  //   }
  //   function decrease() {
  //     setPrice(price - 1);
  //   } 
 
   function handlearr(){ 
  setArray(arr)
     
   } 
   useEffect(() => { 
    console.log(array)
    
   }, [array]);

  return (
    <div>
      {/* <button onClick={increase}> Hooks </button>
      <button onClick={decrease}> Hooks </button> */}
      <button onClick={handlearr}> Hooks </button>
    </div>
  );
};

export default Hooks;
