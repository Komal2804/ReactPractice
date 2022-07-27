import FifthComp from "./FifthComp";
import { useState,useEffect } from "react";

    const FourthComp = () => {
        const [City, setName] = useState("Pune"); 
        const [flag, setFlag] = useState(false);
        const [res, setRes] = useState("");
      
        const upadateNameState = () => {
          setName("Nashik");
        };
      
        useEffect(() => {
          fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then((res) => res.json())
            .then((response) => {
              console.log(response);
              setRes(response.title);
            });
      
          console.log(City);
          console.log();
        }, [flag]); 
    return (
        <div>
        <p>Fourth Component</p>
        <p>{res}</p>
        <FifthComp cityName={City} />
        <button onClick={upadateNameState}>Update City</button>
        <button
          onClick={() => {
            setFlag(!flag);
          }}
        >
          Test
        </button>
      </div>
    );
  };
  
  export default FourthComp;
  