import React, { useEffect } from "react";

const Hooks = () => {
//   const arr = [1,2,3,4,5,6]
//   const [count,_setCount]=useState(9)

//   const [array,setArray] = useState([]);
//   //   function increase() {
//   //     setPrice(price + 1);
//   //   }
//   //   function decrease() {
//   //     setPrice(price - 1);
//   //   } 
 
//    function handlearr(){ 
//   setArray(arr)
     
//    } 
   useEffect(() => { 
    console.log( " rendered ")
    
   });

  return (
    <div> 
      <button > Hooks </button>
      {/* <button onClick={decrease}> Hooks </button>
      {/* <button onClick={handlearr}> Hooks </button> */} 
    </div>
  );
};

export default Hooks;
