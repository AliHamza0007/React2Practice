import  { useState } from "react";
import Layout from "../components/Layout";

const  Digital_clock=()=> {
  let current_time = new Date().toLocaleTimeString();
  const [time, setTime] = useState(current_time);
  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
 
 <Layout>
    <div className="container py-5 text-center">
<h1 className="py-5 text-light">{time}</h1>;
    </div>
  </Layout>
     
     
     
     ) ;
}

export default Digital_clock;
